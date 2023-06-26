const Poster = require('../models/Poster')
const User = require('../models/User')
const asyncHandler = require('express-async-handler')



// @desc Get all posters
// @route GET /posters
// @access Private
const getAllPosters = asyncHandler(async (req, res) => {
    // Get all posters from MongoDB
    const posters = await Poster.find().lean()

    // If no users 
    if (!posters?.length) {
        return res.status(400).json({ message: 'No posters found' })
    }

    const postersWithUser = await Promise.all(posters.map(async (poster) => {
        const user = await User.findById(poster.user).lean().exec()
        return { ...poster, username: user.username }
    }))

    res.json(postersWithUser)
})


// @desc Create new poster
// @route POST /posters
// @access Private
const createNewPoster = asyncHandler(async (req, res) => {
    const { user, username, title, position, eventdate, association, text, img} = req.body

    // Confirm data
    console.log(position,association)
    // check if position and association were filled in user profile 

    if (!position || !association) {
        return res.status(400).json({ message: 'Please finish your user profile to create a new poster!' })
    }

    if (!username || !title || !text ) {
        return res.status(400).json({ message: 'Title, text, position and associaton are required!' })
    }

    // Check for duplicate title
    const duplicate = await Poster.findOne({ title }).collation({ locale: 'en', strength: 2 }).lean().exec()

    if (duplicate) {
        return res.status(409).json({ message: 'Duplicate note title' })
    }

    // Check title words limited to 50

    // Check text words 500 below

    // Check if the user have the permition to post this poster

    // Create and store the new user 
    console.log("check")
    const post = await Poster.create({ user, username, title, position, eventdate, association, text, img})

    if (post) { // Created 
        return res.status(201).json({ message: 'New post created' })
    } else {
        return res.status(400).json({ message: 'Invalid post data received' })
    }

})

// @desc Update a poster
// @route PATCH /posters
// @access Private
const updatePost = asyncHandler(async (req, res) => {
    const { _id, user, username, title, position, eventdate, association, text, img } = req.body

    // Confirm data
    if (!user || !title || !text || !position || !association) {
        return res.status(400).json({ message: 'Title, text, position and associaton are required!' })
    }

    // Confirm poster exists to update
    const poster = await Poster.findById(_id).exec()

    if (!poster) {
        return res.status(400).json({ message: 'Poster not found' })
    }

    // Check for duplicate title
    const duplicate = await Poster.findOne({ title }).collation({ locale: 'en', strength: 2 }).lean().exec()

    // Allow renaming of the original poster 
    if (duplicate && duplicate?._id.toString() !== _id) {
        return res.status(409).json({ message: 'Duplicate poster title' })
    }

    poster.user = user
    poster.username = username
    poster.title = title
    poster.position = position
    poster.eventdate = eventdate
    poster.association = association
    poster.text = text
    poster.img = img

    const updatedPoster = await poster.save()

    res.json(`'${updatedPoster.title}' poster was updated!`)
})

// @desc Delete a poster
// @route DELETE /posters
// @access Private
const deletePoster = asyncHandler(async (req, res) => {
    const { _id } = {_id: req.body.id}

    // Confirm data
    if (!_id) {
        return res.status(400).json({ message: 'Poster ID required' })
    }

    // Confirm note exists to delete 
    const poster = await Poster.findById(_id_id).exec()

    if (!poster) {
        return res.status(400).json({ message: 'Poster not found' })
    }

    const result = await poster.deleteOne()

    const reply = `Poster '${result.title}' with ID ${result._id} deleted`

    res.json(reply)
})

module.exports = {
    getAllPosters,
    createNewPoster,
    updatePost,
    deletePoster
}

/* {
    "user": "64839693858be93f046ddbe5",
    "username": "Daniel",
    "title": "This is Testing",
    "position": "TSAAdmin",
    "eventdate": "<2022-01-13>",
    "association": "TSA",
    "text": "This is the paragraph about testing"
} */