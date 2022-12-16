const Sequalize = require("sequelize");
const sequelize = require("./index");

const Shipping = sequelize.define("shipping", {
id: {
  type: Sequalize.INTEGER,
  primaryKey: true,
  autoIncrement: true,
  allowNull: false
},
name: {
  type: Sequalize.STRING,
  allowNull: false
},
});

module.exports = Shipping;
