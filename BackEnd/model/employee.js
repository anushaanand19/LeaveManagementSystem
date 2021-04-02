const Sequelize = require("sequelize");
const sequelizeConnection = require("../util/database");

const Employee = sequelizeConnection.define("employee", {
  PAN: Sequelize.STRING,
  DOB: Sequelize.DATE,
});

module.exports = Employee;
