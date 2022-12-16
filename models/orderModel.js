const Sequelize = require("sequelize");
const sequelize = require("./index");

const Order = sequelize.define("order", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  tax: {
    type: Sequelize.DECIMAL,
  },
  totalPrice: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  orderDate: {
    type: Sequelize.DATE,
    allowNull: false,
  },
});

module.exports = Order;
