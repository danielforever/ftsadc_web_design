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
    const { user, title, position, eventdate, association, text, img} = req.body

    // Confirm data
    if (!user || !title || !text || !position || !association) {
        return res.status(400).json({ message: 'Title, text, position and associaton are required!' })
    }

    // Check for duplicate title
    const duplicate = await Poster.findOne({ title }).lean().exec()

    if (duplicate) {
        return res.status(409).json({ message: 'Duplicate note title' })
    }

    // Create and store the new user 
    const post = await Poster.create({ user, title, position, eventdate, association, text, img})

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
    const { _id, user, title, position, eventdate, association, text, img } = req.body

    // Confirm data
    if (!_id || !user || !title || !text || !position || !association) {
        return res.status(400).json({ message: 'Title, text, position and associaton are required!' })
    }

    // Confirm poster exists to update
    const poster = await Poster.findById(_id).exec()

    if (!poster) {
        return res.status(400).json({ message: 'Poster not found' })
    }

    // Check for duplicate title
    const duplicate = await Poster.findOne({ title }).lean().exec()

    // Allow renaming of the original poster 
    if (duplicate && duplicate?._id.toString() !== _id) {
        return res.status(409).json({ message: 'Duplicate poster title' })
    }

    poster.user = user
    poster.title = title
    poster.position = position
    poster.eventdate = eventdate
    poster.association = association
    poster.text = text
    poster.img = img

    const updatedPoster = await poster.save()

    res.json(`'${updatedPoster.title}' updated`)
})

// @desc Delete a poster
// @route DELETE /posters
// @access Private
const deletePoster = asyncHandler(async (req, res) => {
    const { _id } = req.body

    // Confirm data
    if (!_id) {
        return res.status(400).json({ message: 'Poster ID required' })
    }

    // Confirm note exists to delete 
    const poster = await Poster.findById(_id).exec()

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