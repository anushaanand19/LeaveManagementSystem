const Sequelize = require("sequelize");
const sequelizeConnection = require("../util/database");

const Leave = sequelizeConnection.define("leave", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  fromDate: Sequelize.DATE,
  toDate: Sequelize.DATE,
  Status: Sequelize.STRING,
  ApprovedBy: Sequelize.STRING,
  AppliedOn: Sequelize.DATE,
  ApprovedOn: Sequelize.DATE,
  DeclineReason: Sequelize.STRING,
  AppliedReason: Sequelize.STRING,
});

module.exports = Leave;
