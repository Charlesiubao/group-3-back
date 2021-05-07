const models = require('../models')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const ordersRoutes = require('../routes/ordersRoutes')
const product = require('../models/product')

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
          for(i=0; i<cart.length; i++){
              console.log(cart[i])
              //add each product to order
              //await order.addProduct(product)
              let join = await models.product_order.create({
                  productId: cart[i].id,
                  orderId: order.id
              })

              console.log("PRODUCT_ORDER JOIN")
              console.log(join)

              //clear cart
              await user.removeProduct(cart[i])
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