const express = require("express");

const router = express.Router();

const AuthControllers = require("../controllers/AuthControllers");

const {
  registerValidation,
  loginValidation,
} = require("../middlewares/AuthMiddlewares");

router.post("/signup", registerValidation, AuthControllers.signup);
router.post("/login", loginValidation, AuthControllers.login);

module.exports = router;
