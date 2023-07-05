const express = require('express')
const router = express.Router()
const posterController = require('../controllers/posterController')
const verifyJWT = require('../middleware/verifyJWT')

/* router.use(verifyJWT) */

router.route('/')
    .get(posterController.getAllPosters)
    .post(posterController.createNewPoster)
    .patch(posterController.updatePost)
    .delete(posterController.deletePoster)

module.exports = router