const Users = require("../models/Users");

const {
  hashPassword,
  comparePassword,
  createToken,
} = require("../helpers/AuthHelper");

const { success, error, successLogin } = require("../helpers/ApiFormatter");

class AuthContollers {
  async signup(req, res) {
    const { name, email, password } = req.body;

    try {
      const hash = await hashPassword(password);
      const user = await Users.create({
        name,
        email,
        password: hash,
      });

      res.status(200).json(success(201, "Succesfully created new user", user));
    } catch (error) {
      console.error(error);
      res.status(500).json(error(500, "Internal Server Error"));
    }
  }

  async login(req, res) {
    const { email, password } = req.body;

    const user = await Users.findOne({
      where: {
        email: email,
      },
    });

    const isValid = await comparePassword(password, user.password);

    if (!isValid) {
      res.status(400).json(error(400, "Invalid email or password"));
      return;
    }

    const token = createToken(user);

    res.status(200).json(successLogin(200, "Succesfully login", token));
  }
}

module.exports = new AuthContollers();
