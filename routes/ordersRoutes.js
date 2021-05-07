const ordersController = require('../controllers/ordersController')

const express = require('express')
const ordersRoutes = express.Router()

ordersRoutes.post('/', ordersController.create)


module.exports = ordersRoutes