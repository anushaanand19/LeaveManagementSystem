const user = require("../model/user");

exports.isAuth = async (req, res, next) => {
  let token = req.headers.token;
  if (token) {
    let validUser = await user.findOne({ where: { token: token } });
    if (validUser) {
      req.user = validUser;
      next();
    } else {
      res.status(403).json({ message: "Unauthorized" });
    }
  } else {
    res.status(403).json({ message: "Unauthorized" });
  }
};
