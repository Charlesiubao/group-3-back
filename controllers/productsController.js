const models = require('../models')

productsController = {}

productsController.findAll = async (req, res) => {
    try{
        let products = await models.product.findAll()



        res.json({products})

    }catch(error){

        res.json({error})
    }
}

productsController.findOne = async (req, res) => {
    try{
        let product = await models.product.findOne({
            where: {
                id: req.params.id
            }
        })



        res.json({product})

    }catch(error){

        res.json({error})
    }
}

module.exports = productsController