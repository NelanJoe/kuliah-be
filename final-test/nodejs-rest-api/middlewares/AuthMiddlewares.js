const jwt = require("jsonwebtoken");
const { error } = require("../helpers/ApiFormatter");
const { check } = require("express-validator");

require("dotenv").config();

/**
 * Register validation
 */
exports.registerValidation = [
  check("name", "Name is required").notEmpty(),
  check("email", "Email is required").notEmpty(),
  check("password", "Password is required").notEmpty(),
];

/**
 * Login Validation
 */
exports.loginValidation = [
  check("email", "Email is required").notEmpty(),
  check("password", "Password is required").notEmpty(),
];

/**
 * * Create function protect to protect router api
 * */
exports.protect = (req, res, next) => {
  // * Require header authorization
  const bearer = req.headers.authorization;

  // * Check not authorization then response error not auth
  if (!bearer) {
    res.status(401).json(error(401, "Not authorized"));
    return;
  }

  /**
   * * Split the authorization header value
   * */
  const [, token] = bearer.split(" ");
  if (!token) {
    res.status(401).json(error(401, "Not authorized"));
    return;
  }

  try {
    // * Verify Jwt token
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = payload.user;
    console.log(payload);
    // * Continue the action
    next();
    return;
  } catch (error) {
    console.error(error);
    res.status(401).json(error(401, "Not authorized"));
  }
};
