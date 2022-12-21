// import mysql
const mysql = require("mysql");

// import dotenv dan jalankan config
require("dotenv").config()

const {DB_HOST, DB_USERNAME, DB_PASSWORD, DB_DATABASE} = process.env;


/**
 * Membuat koneksi ke database menggunakan method createConnection
 * Method menerima parameter object: host, user, password, database
 * */
const db = mysql.createConnection({
  host: DB_HOST,
  user: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_DATABASE,
});

db.connect((err) => {
  if (err) {
    console.error(`Error connecting ${err.stack}`);
  } else {
    console.log("Connected to database");
    return;
  }
});

module.exports = db;
