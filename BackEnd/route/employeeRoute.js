const express = require("express");
const router = express.Router();
const employeeController = require("../controller/employeeController");
const isAuth = require("../auth/auth").isAuth;

router.put("/:id", employeeController.updatingEmployee);
router.get("/:id", employeeController.fetchingEmployee);
router.get("/", isAuth, employeeController.fetchingAllEmployees);
router.post("/", employeeController.creatingEmployee);
router.delete("/:id", employeeController.deletingEmployee);

module.exports = router;
