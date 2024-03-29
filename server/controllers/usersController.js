const User = require('../models/User')
const Poster = require('../models/Poster')
const asyncHandler = require('express-async-handler') //keep sending try catch blocks to get the password passing from fromend
const bcrypt = require('bcrypt')



const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.+-]+\.edu$/
const PHONE_REGEX = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
const FB_REGEX = /^(?:(?:http|https):\/\/)?(?:www.)?facebook.com\/?/

// @desc Get a user by id
// @route GET /users/id
// @access Private

const getUserById = asyncHandler(async (req, res) => {
    const { _id} = req.body
    // Get user by id
    console.log("id:" + _id)
    const user = await User.findById(_id).select('-password').exec()
    console.log("user:" + user)

    // If no user
    if (!user) {
        return res.status(400).json({ message: 'No user found' })
    }

    res.json(user)
})

// @desc Get a user by username
// @route GET /users/username
// @access Private
const getUserByName = asyncHandler(async (req, res) => {
    const {username} = req.body
    // Get user by name
    console.log("username:" + username)
    //const user = await User.findById(_id).select('-password').exec()
    const user = await User.findOne({ username: username }).select('-password').exec()
    console.log("user:" + user)

    // If no user
    if (!user) {
        return res.status(400).json({ message: 'No user found' })
    }

    res.json(user)
})

// @desc Get all users
// @route GET /users
// @access Private

const getAllUsers = asyncHandler(async (req, res) => {
    const { username, password, email, roles } = req.body

    const users = await User.find().select('-password').lean() // "-password" password will not be returned | lean() just return the json no extras

    // If no users 
    if (!users?.length) {
        return res.status(400).json({ message: 'No users found' })
    }

    res.json(users)
})

// @desc Create new user
// @route POST /users
// @access Public
const createNewUser = asyncHandler(async (req, res) => {
    const { username, password, email, roles } = req.body
    console.log("check")
    
    console.log(username, password, email, roles)
    // Confirm data
    if (!username || !password || !Array.isArray(roles) || !roles.length || !email) {

        return res.status(400).json({ message: 'All fields are required' })
    }

    // Check for duplicate username also eleminate case sensitive
    const duplicateUsername = await User.findOne({ username }).collation({ locale: 'en', strength: 2 }).lean().exec()

    if (duplicateUsername) {
        return res.status(409).json({ message: 'Duplicate username' })
    }

    // Check for duplicate email
    const duplicateEmail = await User.findOne({ email }).lean().exec()

    if(duplicateEmail) {
        return res.status(409).json({ message: 'Duplicate email' })
    }

    // Check edu email
    if (!EMAIL_REGEX.test(email)) {
        return res.status(409).json({ message: 'This is not a valid edu email address' })
    }

    // Hash password 
    const hashedPwd = await bcrypt.hash(password, 10) // salt rounds

    const userObject = { username, "password": hashedPwd, email, roles }

    // Create and store new user 
    const user = await User.create(userObject)

    if (user) { //created 
        res.status(201).json({ message: `New user ${username} created` })
    } else {
        res.status(400).json({ message: 'Invalid user data received' })
    }
    
})


// TODO: add phone number (not require) | association | position | fb url

// @desc Update a user
// @route PATCH /users
// @access Private
const updateUser = asyncHandler(async (req, res) => {
/*     const { _id, username, roles, email, active, password } = req.body */
    const { _id, username, roles, email, active, association, fburl, position, phone} = req.body
    // Confirm data 
    if (!_id || !username || !Array.isArray(roles) || !roles.length || typeof active !== 'boolean' || !email || !association || !position) {
        return res.status(400).json({ message: 'All fields except password are required' })
    }

    // Does the user exist to update?
    const user = await User.findById(_id).exec()

    if (!user) {
        return res.status(400).json({ message: 'User not found' })
    }

    // Check for duplicate Username
    const duplicateUsername = await User.findOne({ username }).lean().exec()

    // Allow updates to the original user 
    if (duplicateUsername && duplicateUsername?._id.toString() !== _id) {
        return res.status(409).json({ message: 'Duplicate username' })
    }


    // Check for duplicate Email
    const duplicateEmail = await User.findOne({email}).lean().exec()

    if (duplicateEmail && duplicateEmail?._id.toString() !== _id) {
        return res.status(409).json({ message: 'Duplicate email' })
    }
    // Check for edu email

    if (!EMAIL_REGEX.test(email)) {
        return res.status(409).json({ message: 'This is not a valid edu email' })
    }

    // ########################################################################### //
    // Check assoication is visible

    // Check position is not empty

    // Check is phone format is correct
    if (!phone && !PHONE_REGEX.test(phone)) {
        return res.status(409).json({ message: 'This is not a valid phone number' })
    }
    // Check fb url is valid
    if (!fburl && !FB_REGEX.test(fburl)) {
        return res.status(409).json({ message: 'This is not a valid facebook URL' })
    }

    // ########################################################################### //
    user.username = username
    user.email = email
    user.phone = phone 
    user.association = association
    user.fburl = fburl
    user.position = position
    user.roles = roles
    user.active = active
/*     if (password) {
        // Hash password 
        user.password = await bcrypt.hash(password, 10) // salt rounds 
    } */

    const updatedUser = await user.save()

    res.json({ message: `${updatedUser.username} updated` })
})

// @desc Delete a user
// @route DELETE /users
// @access Private
const deleteUserById = asyncHandler(async (req, res) => {
    console.log("id:req.body:", req.body._id)
    const { _id } = req.body
    console.log("_id:" ,_id)
    // Confirm data
    if (!_id) {
        return res.status(400).json({ message: 'User ID Required' })
    }

    // Does the user still have assigned posters?
    const poster = await Poster.findOne({ user: _id }).lean().exec()
    if (poster) {
        return res.status(400).json({ message: 'User has assigned posters' })
    }

    // Does the user exist to delete?
    const user = await User.findById(_id).exec()

    if (!user) {
        return res.status(400).json({ message: 'User not found' })
    }

    const result = await user.deleteOne()

    const reply = { message: `Username ${result.username} with ID ${result._id} deleted` }

    res.json(reply)
})

// @desc Delete a user
// @route DELETE /users
// @access Private
const deleteUserByName = asyncHandler(async (req, res) => {
    console.log("name:req.body:",req.body)
    const { username } = req.body
    
    // Confirm data
    if (!username) {
        return res.status(400).json({ message: 'Username Required' })
    }

    // Does the user still have assigned posters?
    const poster = await Poster.findOne({ username: username }).lean().exec()
    if (poster) {
        return res.status(400).json({ message: 'User has assigned posters' })
    }

    // Does the user exist to delete?
    const user = await User.findOne({ username: username }).exec()

    if (!user) {
        return res.status(400).json({ message: 'User not found' })
    }
    console.log("check")
    const result = await user.deleteOne()

    const reply = { message: `Username ${result.username} with ID ${result._id} deleted` }

    res.json(reply)
})

module.exports = {
    getAllUsers,
    getUserByName,
    getUserById,
    createNewUser,
    updateUser,
    deleteUserByName,
    deleteUserById
}


