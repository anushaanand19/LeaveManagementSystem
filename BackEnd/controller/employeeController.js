const Employee = require("../model/employee");
const User = require("../model/user");
const bcrypt = require("bcrypt");

exports.creatingEmployee = async (req, res, next) => {
  const encryptedPwd = bcrypt.hashSync(req.body.password, 10);
  const createdUser = await User.create({
    name: req.body.name,
    officialEmailId: req.body.email,
    password: encryptedPwd,
  });
  const createdEmployee = await createdUser.createEmployee({
    PAN: req.body.PAN,
    DOB: new Date(req.body.DOB),
  });
  res.json({ user: createdUser, employee: createdEmployee });
};

exports.updatingEmployee = async (req, res, next) => {
  await User.update(
    { name: req.body.name, officialEmailId: req.body.email },
    { where: { id: req.params.id } }
  );
  const updatedUser = await User.findOne({ id: req.params.id });
  res.json(updatedUser);
};

exports.fetchingAllEmployees = async (req, res, next) => {
  const employeeList = await User.findAll({ include: Employee });
  res.json(employeeList);
};

exports.fetchingEmployee = async (req, res, next) => {
  const employee = await Employee.findOne({
    where: { id: req.params.id },
    include: Employee,
  });
  if (!employee) {
    res.status(404).json({ message: "User not found" });
  } else {
    res.json(employee);
  }
};

exports.deletingEmployee = async (req, res, next) => {
  const user = await User.findOne({ where: { id: req.params.id } });
  const employeeToDelete = user.destroy({ where: { id: user.id } });
  res.send("Employee Deleted");
};
