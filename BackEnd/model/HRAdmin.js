const Sequelize = require("sequelize");
const sequelizeConnection = require("../util/database");

const HRAdmin = sequelizeConnection.define("hrAdmin", {
  designation: Sequelize.STRING,
});

module.exports = HRAdmin;
