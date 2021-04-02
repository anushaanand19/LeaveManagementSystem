const express = require("express");
const sequelizeConnection = require("./util/database");
const app = express();
const sequelize = require("./util/database");
const User = require("./model/user");
const HRAdmin = require("./model/HRAdmin");
const Employee = require("./model/employee");
const Leave = require("./model/leave");
const LeaveType = require("./model/leaveType");
const LeaveBalance = require("./model/leaveBalance");

app.use((req, res, next) => {
  res.send("Hello World! This is the backend project");
});

User.hasMany(Employee);
User.hasMany(HRAdmin);
LeaveBalance.belongsTo(Employee);
LeaveBalance.belongsTo(LeaveType);
Leave.belongsTo(LeaveType);
Leave.belongsTo(Employee);

sequelize.sync().then((result) => console.log(result));

app.listen(3001);
