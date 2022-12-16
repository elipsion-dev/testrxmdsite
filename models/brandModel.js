const Sequelize = require("sequelize");
const sequelize = require("./index");

const Brand = sequelize.define("brand", {
id: {
  type: Sequelize.INTEGER,
  primaryKey: true,
  autoIncrement: true,
  allowNull: false
},
name: {
    type: Sequelize.STRING(45),
    allowNull: false
}
});

module.exports = Brand;
