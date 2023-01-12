/**
 * * Import check from express validator
 * */
const { check } = require("express-validator");


/**
 * * Validation rules for input data
 * */
exports.inputValidation = [
  check("name", "Name is required").notEmpty(),
  check("phone", "Phone is required").notEmpty(),
  check("address", "Address is required").notEmpty(),
  check("status", "Status is required").notEmpty(),
];


/**
 * * Validation rules for update data
 * */
exports.updateValidation = [
  check("name", "Name is required").notEmpty(),
  check("phone", "Phone is required").notEmpty(),
  check("address", "Address is required").notEmpty(),
  check("status", "Status is required").notEmpty(),
];
