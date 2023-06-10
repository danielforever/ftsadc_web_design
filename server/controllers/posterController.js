const Poster = require('../models/Poster')
const User = require('../models/User')
const asyncHandler = require('express-async-handler')



// @desc Get all poster
// @route GET /poster
// @access Private

const getAllPoster = asyncHandler(async (req, res) => {
    // Get all users from MongoDB
    const users = await Poster.find().select('-password').lean() // select "-" never return the password back | lean() just return the json no extras

    // If no users 
    if (!users?.length) {
        return res.status(400).json({ message: 'No users found' })
    }

    res.json(users)
})