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
const Patients = db.define("patients", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  phone: {
    type: DataTypes.STRING,
  },
  address: {
    type: DataTypes.STRING,
  },
  status: {
    type: DataTypes.STRING,
  },
  in_date_at: {
    type: DataTypes.DATE,
  },
  out_date_at: {
    type: DataTypes.DATE,
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

// Export Model Patients 
module.exports = Patients;
