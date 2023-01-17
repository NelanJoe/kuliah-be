const jwt = require("jsonwebtoken");
const { error } = require("../helpers/ApiFormatter");
const { check } = require("express-validator");
const Users = require("../models/Users");

require("dotenv").config();

/**
 * Register validation
 */
exports.registerValidation = [
  check("username", "Username is required").notEmpty().isLength({ min: 3, max: 12 }),
  check("email", "Email is required")
    .notEmpty()
    .custom(async (value) => {
      return await Users.findOne({ where: { email: value } }).then((user) => {
        if (user) {
          return Promise.reject("E-mail already in use");
        }
      });
    }),
  check("password", "Password is required")
    .notEmpty()
    .isLength({ min: 6, max: 12 }),
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
