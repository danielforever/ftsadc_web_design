const express = require('express')
const router = express.Router()
const posterController = require('../controllers/posterController')

router.route('/')
    .get(posterController)
    .post(posterController)