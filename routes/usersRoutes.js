const usersController = require('../controllers/usersController')

const express = require('express')
const usersRoutes = express.Router()

usersRoutes.post('/signup', usersController.create)
usersRoutes.post('/login', usersController.login)
usersRoutes.get('/verify', usersController.verify)
usersRoutes.post('/cart', usersController.addToCart)

module.exports = usersRoutes