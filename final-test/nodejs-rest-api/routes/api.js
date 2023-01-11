const express = require("express");
const PatientsController = require("../controllers/PatientsController");

const router = express.Router();

router.get("/patients", PatientsController.index);
router.post("/patients", PatientsController.store);
router.get("/patients/:id", PatientsController.show);
router.put("/patients/:id", PatientsController.update);
router.delete("/patients/:id", PatientsController.destroy);
router.get("/patients/search/:name", PatientsController.searchPatientName);
router.get("/patients/search/status/:status", PatientsController.searchPatientStatus);

module.exports = router;
