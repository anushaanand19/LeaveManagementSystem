const Sequelize = require("sequelize");

const sequelizeConnection = new Sequelize("HRMS", "root", "", {
  dialect: "mysql",
  host: "localhost",
  timezone: "+05:30",
});

module.exports = sequelizeConnection;
