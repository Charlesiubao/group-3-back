const ordersController = require('../controllers/ordersController')

const express = require('express')
const ordersRoutes = express.Router()

ordersRoutes.post('/', ordersController.create)
ordersRoutes.get('/:id', ordersController.findOne)
ordersRoutes.get('/', ordersController.findUsersOrders)


module.exports = ordersRoutes