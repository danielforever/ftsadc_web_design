const { nextDay } = require('date-fns')
const asyncHandler = require('express-async-handler')
const otpGenerator = require('otp-generator')
const User = require('../models/User')



const verifyUser = asyncHandler(async (req, res, next) => {
    try {
        
        const { username } = req.method == "GET" ? req.query : req.body

        // check the user existance
        let exist = await User.findOne({ username })
        if(!exist) return res.status(404).send({ error : "Can't find User!"})
        next();

    } catch (error) {
        return res.status(404).send({ error: "Authentication Error"})
    }
})

// @desc generateotp
// @route GET /otp
// @access Public
const generateOTP = asyncHandler(async (req, res) => {
    //TODO: Generate otp verification email
    req.app.locals.OTP = await otpGenerator.generate(6, {lowerCaseAlphabets: false, upperCaseAlphabets: false, specialChars: false})
    res.status(201).send({code: req.app.locals.OTP})
})

// @desc verifyotp
// @route GET /otp
// @access Public
const verifyOTP = asyncHandler(async (req, res) => {
    const [ code ] = req.query;
    if(parseInt(req.app.locals.OTP) === parseInt(code)){
        req.app.locals.OTP = null // Reset the OTP value
        /* req.app.locals.resetSession = true */
        return res.status(201).send({ msg: 'Verify Successfully!'})
    }
    return res.status(400).send({ error: "Invalid OTP"})
})


module.exports = {
    generateOTP,
    verifyOTP,
    verifyUser
}