const { DataTypes } = require('sequelize');
const db = require('../database'); 

const Club = db.define('Club', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  distance: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: false
  },
  skillLevel: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Club;
