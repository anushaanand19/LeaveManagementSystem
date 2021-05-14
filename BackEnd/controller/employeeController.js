const Employee = require("../model/employee");
const User = require("../model/user");
const bcrypt = require("bcrypt");

exports.creatingEmployee = async (req, res, next) => {
  const encryptedPwd = bcrypt.hashSync(req.body.password, 10);
  try {
    await User.create(
      {
        name: req.body.name,
        officialEmailId: req.body.email,
        password: encryptedPwd,
        userType: req.body.userType,
        employee: {
          PAN: req.body.PAN,
          DOB: new Date(req.body.DOB),
        },
      },
      { include: { association: User.Employee } }
    );
    const employeeList = await User.findAll({
      include: Employee,
      attributes: { exclude: ["password"] },
    });
    res.json(employeeList);
  } catch (e) {
    res.status(409).json({ message: e.errors[0].message });
  }
};

exports.updatingEmployee = async (req, res, next) => {
  try {
    const user = await User.findOne({ where: { id: req.params.id } });
    const updatedUser = await user.update({
      name: req.body.name,
      officialEmailId: req.body.email,
    });
    res.json({ message: "UserUpdated", user: updatedUser });
  } catch (e) {
    res.status(409).json({ message: e.errors[0].message });
  }
};

exports.fetchingAllEmployees = async (req, res, next) => {
  try {
    const employeeList = await User.findAll({
      include: Employee,
      attributes: { exclude: ["password"] },
    });
    res.json(employeeList);
  } catch (e) {
    res.status(404).json({ message: e.errors[0].message });
  }
};

exports.fetchingEmployee = (req, res, next) => {
  User.findOne({
    where: { id: req.params.id },
    include: Employee,
    attributes: { exclude: ["password"] },
  })
    .then((employee) => {
      res.json(employee);
    })
    .catch((e) => {
      res.status(404).json({ message: e.errors[0].message });
    });
};

exports.deletingEmployee = async (req, res, next) => {
  try {
    const employeeToDelete = await User.destroy({
      where: { id: req.params.id },
      include: Employee,
    });
    res.json({ message: "Employee Deleted" });
  } catch (e) {
    res.status(404).json({ message: e.errors[0].message });
  }
};
