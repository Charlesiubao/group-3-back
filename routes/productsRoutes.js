const productsController = require('../controllers/productsController')

const express = require('express')
const productsRoutes = express.Router()

productsRoutes.get('/:id', productsController.findOne)
productsRoutes.get('/', productsController.findAll)

module.exports = productsRoutes