const express = require("express");
const router = express.Router();
const employeeController = require("../controller/employeeController");

router.put("/:id", employeeController.updatingEmployee);
router.get("/:id", employeeController.fetchingEmployee);
router.get("/", employeeController.fetchingAllEmployees);
router.post("/", employeeController.creatingEmployee);
router.delete("/:id", employeeController.deletingEmployee);

module.exports = router;
