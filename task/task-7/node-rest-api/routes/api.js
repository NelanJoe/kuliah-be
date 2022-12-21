
/*
    * import Student Controller
*/ 
const StudentController = require("../controllers/StudentController");

// import exprees & router
const express = require("express");
const router = express.Router();

/*
    * Routing Student
*/ 
router.get("/students", StudentController.index);
router.get("/students/:id", StudentController.show);
router.post("/students", StudentController.store);
router.put("/students/:id", StudentController.update);
router.delete("/students/:id", StudentController.delete);


// Export router
module.exports = router;
