const express = require("express");
const router = express.Router();
const employeeController = require("../controller/employeeController");
const isAuth = require("../auth/auth").isAuth;

router.post("/", employeeController.creatingEmployee);
router.put("/:id", employeeController.updatingEmployee);
router.get("/:id", isAuth, employeeController.fetchingEmployee);
router.get("/", isAuth, employeeController.fetchingAllEmployees);
router.delete("/:id", employeeController.deletingEmployee);

module.exports = router;
