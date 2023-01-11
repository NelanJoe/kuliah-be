const { Sequelize } = require("sequelize");

require("dotenv").config();

const {
  DB_CONNECTION,
  DB_HOST,
  DB_PORT,
  DB_DATABASE,
  DB_USERNAME,
  DB_PASSWORD,
} = process.env;

const db = new Sequelize(DB_DATABASE, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: DB_CONNECTION,
});

module.exports = db;
