const Sequelize = require("sequelize");
const sequelizeConnection = require("../util/database");

const HRAdmin = sequelizeConnection.define("HrAdmin", {
  designation: Sequelize.STRING,
});

module.exports = HRAdmin;
