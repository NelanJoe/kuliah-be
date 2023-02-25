/**
 * * Import module express
 * */
const express = require("express");

const patientsRouter = require("./patients.route");

// Define router from express Router
const router = express.Router();

/**
 * * Route Patients
 * */
router.use("/patients", patientsRouter);

// Export router
module.exports = router;
