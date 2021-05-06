'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //models.product.hasMany(models.cart)
      models.product.belongsToMany(models.user, {through: 'cart'})
      models.product.belongsToMany(models.order, {through: 'product_order'})
    }
  };
  product.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    image: DataTypes.STRING,
    price: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'product',
  });
  return product;
};