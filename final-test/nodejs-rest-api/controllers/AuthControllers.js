/**
 * * Import model Users
 * */
const Users = require("../models/Users");

/**
 * * Import hashPassword, comparePassword & createToken from Auth Helpers
 * */
const {
  hashPassword,
  comparePassword,
  createToken,
} = require("../helpers/AuthHelper");

/**
 * * Import format api from Api Formatter
 * */
const {
  error,
  successLogin,
  successRegister,
  validation,
} = require("../helpers/ApiFormatter");

/**
 * * Import validation result from express validator
 * */
const { validationResult } = require("express-validator");

/**
 * * Create Class Auth Controller
 * */
class AuthContollers {
  // * Make method signup
  async signup(req, res) {
    /**
     * * Destucting name, email & password from req.body
     * */
    const { name, email, password } = req.body;

    /**
     *  * Define validation result from express validator
     * */
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(400).json(validation(errors.array()));
      return;
    }

    /**
     * * Try Catch for create new user
     * * If success, response with status 200 and data user
     * * If error, response with status 500 and message Internal Server Error
     */
    try {
      // * Hasing password
      const hash = await hashPassword(password);

      // * Create new Users
      const user = await Users.create({
        name,
        email,
        password: hash,
      });

      // * Response success
      res.status(200).json(successRegister(200, "Succesfully register"));
    } catch (error) {
      // * Response error
      console.error(error);
      res.status(500).json(error(500, "Internal Server Error"));
    }
  }

  // * Make method login
  async login(req, res) {
    /**
     * * Destucting email & password from req.body
     * */
    const { email, password } = req.body;

    /**
     *  * Define validation result from express validator
     * */
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(400).json(validation(errors.array()));
      return;
    }

    // * Find user where email :=> email
    const user = await Users.findOne({
      where: {
        email: email,
      },
    });

    // * Compare password and user.password to match data password
    const isValid = await comparePassword(password, user.password);

    // * If not isValid
    if (!isValid) {
      // * Response error
      res.status(400).json(error(400, "Invalid email or password"));
      return;
    }

    // * Generate token
    const token = createToken(user);

    // * Response success and response token
    res.status(200).json(successLogin(200, "Succesfully login", token));
  }
}

// * Export class AuthControllers
module.exports = new AuthContollers();
