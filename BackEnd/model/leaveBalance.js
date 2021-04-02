const Sequelize = require("sequelize");
const sequelizeConnection = require("../util/database");

const LeaveBalance = sequelizeConnection.define("leaveBalance", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  Balance: Sequelize.INTEGER,
});

module.exports = LeaveBalance;
