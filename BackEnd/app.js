const express = require("express");
const sequelizeConnection = require("./util/database");
const app = express();
const bodyParser = require("body-parser");
const sequelize = require("./util/database");
const User = require("./model/user");
const HRAdmin = require("./model/hrAdmin");
const Employee = require("./model/employee");
const Leave = require("./model/leave");
const LeaveType = require("./model/leaveType");
const LeaveBalance = require("./model/leaveBalance");
const employeeRoute = require("./route/employeeRoute");

app.use(bodyParser.json());

User.hasOne(Employee, { onDelete: "cascade" });
User.hasOne(HRAdmin);
LeaveBalance.belongsTo(Employee);
LeaveBalance.belongsTo(LeaveType);
Leave.belongsTo(LeaveType);
Leave.belongsTo(Employee);

app.use("/employee", employeeRoute);

//sequelize.sync({ force: true }).then();

app.listen(3001);
