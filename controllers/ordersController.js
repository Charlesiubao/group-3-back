const models = require('../models')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const ordersRoutes = require('../routes/ordersRoutes')

const ordersController = {}

ordersController.create = async (req, res) => {
    try{
        const decryptedId = jwt.verify(req.headers.authorization, process.env.JWT_SECRET)
          let order = await models.order.create({
              userId: decryptedId.userId,
              address: req.body.address,
              creditCard: req.body.creditCard
          })

          let user = await models.user.findOne({
              where: {
                  id: decryptedId.userId
              }
          })

          let cart = await user.getProducts()
          for(product of cart){
              await order.addProduct(product)
              //clear cart
              await user.removeProduct(product)
          }


        let products = await order.getProducts()
        let newCart = await user.getProducts()

          res.json({
              newOrder: order,
              orderedProducts: products,
              cart: newCart
          })

    }catch(error){
        console.log(error)
        res.json({error})
    }
}

ordersController.findOne = async (req, res) => {
    try{
        let order = await models.order.findOne({
            where: {
                id: req.params.id
            }
        })
        let products = await order.getProducts()
        res.json({order: order, products: products})

    }catch(error){
        console.log(error)
        res.json({error})
    }
}

ordersController.findAll = async (req, res) => {
    try{
        let order = await models.order.findAll()
        res.json({order: order})
    }catch(error){
        console.log(error)
        res.json({error})
    }
}


module.exports = ordersController