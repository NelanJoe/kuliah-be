const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

require("dotenv").config();

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

exports.hashPassword = (password) => {
  return bcrypt.hash(password, 5);
};

exports.comparePassword = (password, hash) => {
  return bcrypt.compare(password, hash);
};
