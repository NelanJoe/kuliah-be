// Import express
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

const router = express.Router();

router.get("/", PatientsController.index);
router.post("/", inputValidation, PatientsController.store);
router.get("/:id", updateValidation, PatientsController.show);
router.put("/:id", PatientsController.update);
router.delete("/:id", PatientsController.destroy);
router.get("/search/:name", PatientsController.searchPatientName);
router.get("/search/status/:status", PatientsController.searchPatientStatus);

module.exports = router;
