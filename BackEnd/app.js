const express = require("express");
const sequelizeConnection = require("./util/database");
const app = express();
const bodyParser = require("body-parser");
const sequelize = require("./util/database");
const User = require("./model/user");
const Employee = require("./model/employee");
const Leave = require("./model/leave");
const LeaveType = require("./model/leaveType");
const LeaveBalance = require("./model/leaveBalance");
const employeeRoute = require("./route/employeeRoute");
const loginRoute = require("./route/loginRoute");
const cors = require("cors");

app.use(bodyParser.json());
app.use(cors());

User.Employee = User.hasOne(Employee, { onDelete: "cascade" });
LeaveBalance.belongsTo(Employee);
LeaveBalance.belongsTo(LeaveType);
Leave.belongsTo(LeaveType);
Leave.belongsTo(Employee);

app.use("/employee", employeeRoute);
app.use(loginRoute);

//sequelize.sync({ force: true }).then();

app.listen(3001);
