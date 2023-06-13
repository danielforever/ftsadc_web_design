const express = require('express')
const router = express.Router()
const usersController = require('../controllers/usersController')

router.route('/')
    .get(usersController.getAllUsers)
    .post(usersController.createNewUser)
    .patch(usersController.updateUser)
    .delete(usersController.deleteUserByName)

router.route('/username')
    .get(usersController.getUserByName)

router.route('/id')
    .get(usersController.getUserById)

module.exports = router 