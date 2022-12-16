const Sequelize = require("sequelize");
const sequelize = require("./index");

const Product = sequelize.define("product", {
id: {
  type: Sequelize.INTEGER,
  primaryKey: true,
  autoIncrement: true,
  allowNull: false
  },
name: {
  type: Sequelize.STRING,
  allowNull: false,
},
price: {
  type: Sequelize.DECIMAL,
  allowNull: false
},
discount:{
  type: Sequelize.TINYINT,
  allowNull: false,
  defaultValue: 0
},
description: {
  type: Sequelize.STRING,
},
active: {
  type: Sequelize.BOOLEAN,
  allowNull: false,
  defaultValue: true
},
stock: {
  type: Sequelize.INTEGER,
  allowNull: false,
},
quantity: {
  type: Sequelize.INTEGER,
  defaultValue: 0,
  },
});

module.exports = Product;
