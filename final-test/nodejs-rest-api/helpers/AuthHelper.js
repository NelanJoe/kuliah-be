/**
 * * Import module Json Web Token
 * * Import module bcrypt
 * */
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

/**
 * * configure JWT_SECRET from .env
 * */
require("dotenv").config();

/**
 * * Make token from Json Web Token
 * */
exports.createToken = (user) => {
  const token = jwt.sign(
    {
      id: user.id,
      email: user.email,
    },
    process.env.JWT_SECRET
  );

  return token;
};

/**
 * * Hashing password
 * */
exports.hashPassword = (password) => {
  return bcrypt.hash(password, 5);
};

/**
 * * Comparing password & password hash
 * */
exports.comparePassword = (password, hash) => {
  return bcrypt.compare(password, hash);
};
