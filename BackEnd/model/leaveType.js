const Sequelize = require("sequelize");
const sequelizeConnection = require("../util/database");

const LeaveType = sequelizeConnection.define("leaveType", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  leaveType: Sequelize.STRING,
});

module.exports = LeaveType;
