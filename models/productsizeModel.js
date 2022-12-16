const Sequelize = require("sequelize");
const sequelize = require("./index");

const ProductSize = sequelize.define("product_size", {
id: {
  type: Sequelize.INTEGER,
  primaryKey: true,
  autoIncrement: true,
  allowNull: false
},
size_id: {
    type: Sequelize.INTEGER,
    allowNull: false
},
isActive: {
    type: Sequelize.BOOLEAN,
    allowNull: false
},
});

module.exports = ProductSize;
