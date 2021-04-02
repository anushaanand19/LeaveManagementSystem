const Sequelize = require("sequelize");

const sequelizeConnection = new Sequelize("HRMS", "root", "", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelizeConnection;
