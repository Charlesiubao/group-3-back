const ordersController = require('../controllers/ordersController')

const express = require('express')
const ordersRoutes = express.Router()

ordersRoutes.post('/', ordersController.create)
ordersRoutes.get('/:id', ordersController.findOne)


module.exports = ordersRoutes