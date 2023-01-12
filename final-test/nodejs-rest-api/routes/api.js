/**
 * * Import module express
 * */
const express = require("express");

/**
 * * Import PatientsController
 * */
const PatientsController = require("../controllers/PatientsController");

/**
 * * Import middleware patients
 * */
const {
  inputValidation,
  updateValidation,
} = require("../middlewares/PatientsMiddleware");

// Define router from express Router
const router = express.Router();

/**
 * * Route Patients
 * */
router.get("/patients", PatientsController.index);
router.post("/patients", inputValidation, PatientsController.store);
router.get("/patients/:id", updateValidation, PatientsController.show);
router.put("/patients/:id", PatientsController.update);
router.delete("/patients/:id", PatientsController.destroy);
router.get("/patients/search/:name", PatientsController.searchPatientName);
router.get(
  "/patients/search/status/:status",
  PatientsController.searchPatientStatus
);

// Export router
module.exports = router;
