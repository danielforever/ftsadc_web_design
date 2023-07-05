const express = require('express')
const router = express.Router()
const otpController = require('../controllers/otpController')
const {localVariables} = require('../middleware/otpVarible')

router.route('/')
    .get(localVariables, otpController.generateOTP)



module.exports = router