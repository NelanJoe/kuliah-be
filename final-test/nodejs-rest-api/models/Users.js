/**
 * * Import configuration database from config
 * */
const db = require("../config/database");

/**
 * * Import DataTypes from sequelize
 * */
const { DataTypes } = require("sequelize");

/**
 * * Make Model Patients
 * */
const Users = db.define("users", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    required: true,
  },
  email: {
    type: DataTypes.STRING,
    required: true,
  },
  password: {
    type: DataTypes.STRING,
    required: true,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: true,
  },
});

// Export Model Users
module.exports = Users;
