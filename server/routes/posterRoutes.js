const express = require('express')
const router = express.Router()
const posterController = require('../controllers/posterController')

router.route('/')
    .get(posterController.getAllPosters)
    .post(posterController.createNewPoster)
    .patch(posterController.updatePost)
    .delete(posterController.deletePoster)

module.exports = router