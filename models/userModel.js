const Sequelize=require('sequelize');
const sequelize = require("./index");
const sequelizePaginate = require('sequelize-paginate')

const User = sequelize.define("user", {
  first_name: {
    type: Sequalize.STRING,
    allowNull: false
},
  last_name: {
    type: Sequalize.STRING,
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
  isEmailConfirmed:{
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  password: {
    type: Sequalize.STRING,
  },
  googleId: {
    type: Sequelize.STRING,
  },
  isLocalAuth:{
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  address: {
    type: Sequalize.STRING
  },
  apt: {
      type: Sequalize.STRING
  },
  city: {
      type: Sequalize.STRING
  },
  zip_code: {
      type: Sequalize.STRING
  },
  state: {
      type: Sequalize.STRING
  },
  country: {
      type: Sequalize.STRING
  },
  phone_number: {
      type: Sequalize.INTEGER
  },
  active: {
      type: Sequalize.TINYINT
  },
});

sequelizePaginate.paginate(User)
module.exports = User;