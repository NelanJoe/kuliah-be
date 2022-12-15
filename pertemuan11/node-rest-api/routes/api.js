
/*
    * import Student Controller
*/ 
const StudentController = require("../controller/StudentController");

// import exprees & router
const express = require("express");
const router = express.Router();

/*
    * Routing Student
*/ 
router.get("/students", StudentController.index);
router.post("/students", StudentController.store);
router.put("/students/:id", StudentController.update);
router.delete("/students/:id", StudentController.delete);


// Export router
module.exports = router;
