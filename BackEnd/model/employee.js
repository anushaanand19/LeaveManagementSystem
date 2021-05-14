const Sequelize = require("sequelize");
const sequelizeConnection = require("../util/database");

const Employee = sequelizeConnection.define("employee", {
  PAN: {
    type: Sequelize.STRING,
    unique: {
      args: true,
      msg: "PAN already in use! Please check again",
    },
  },
  DOB: Sequelize.DATE,
  designation: Sequelize.STRING,
});

module.exports = Employee;
