const models = require('../models')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const usersController = {}

usersController.create = async(req,res) => {
    try {
        const hashedPassword = bcrypt.hashSync(req.body.password, 10)

        const user = await models.user.create ({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        })

        const encryptedId = jwt.sign({ userId: user.id }, process.env.JWT_SECRET)

        res.json({message: 'user created', user, userId: encryptedId})
    } catch (error) {
        res.status(400)
        res.json({error: 'email is already taken'})
    }
}


usersController.login = async(req,res) => {
    try {
    const user = await models.user.findOne({
        where: {
            email: req.body.email,
        }
    }) 
    if (bcrypt.compareSync(req.body.password, user.password)) {
        const encryptedId = jwt.sign({ userId: user.id }, process.env.JWT_SECRET)
        res.status(200)
        res.json({message: 'login successful', userId: encryptedId})
    } else {
        res.status(401).json({error: 'invalid password'})
    } 
    } catch (error) {
        console.log(error)
        res.status(400).json({ error: 'login failed' })
    }
}

usersController.verify = async (req, res) => {

    try {
      const decryptedId = jwt.verify(req.headers.authorization, process.env.JWT_SECRET) 
      const user = await models.user.findOne({
          where: {
              id: decryptedId.userId
          }
      })
      if (user) {
          res.json({user})
      } else {
        res.status(404)
        res.json({ message: 'user not found' })
      }
    } catch (error) {
        res.json({error})
    }
  }

module.exports = usersController