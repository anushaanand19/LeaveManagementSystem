const bcrypt = require("bcrypt");
const User = require("../model/user");

exports.postLogin = async (req, res, next) => {
  const ERROR_MESSAGE = "Invalid credentials";
  const email = req.body.email;
  const password = req.body.password;
  try {
    const user = await User.findOne({ where: { officialEmailId: email } });
    if (!user) {
      throw { message: ERROR_MESSAGE };
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!(isPasswordValid || user)) {
      throw { message: ERROR_MESSAGE };
    }
    user.password = undefined; //TODO: need to figure out a better approach
    res.status(200).json({ user });
  } catch (e) {
    res.status(401).json(e.message);
  }
};
