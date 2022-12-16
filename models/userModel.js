const Sequelize = require('sequelize');
const sequelize = require("./index");
const sequelizePaginate = require('sequelize-paginate')

const User = sequelize.define("user", {
  first_name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  last_name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  username: {
    type: Sequelize.STRING,
    unique: true,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  isEmailConfirmed: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  password: {
    type: Sequelize.STRING,
  },
  googleId: {
    type: Sequelize.STRING,
  },
  isLocalAuth: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  address: {
    type: Sequelize.STRING
  },
  apt: {
    type: Sequelize.STRING
  },
  city: {
    type: Sequelize.STRING
  },
  zip_code: {
    type: Sequelize.STRING
  },
  state: {
    type: Sequelize.STRING
  },
  country: {
    type: Sequelize.STRING
  },
  phone_number: {
    type: Sequelize.INTEGER
  },
  active: {
    type: Sequelize.TINYINT
  },
});

sequelizePaginate.paginate(User)
module.exports = User;