const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const protect = async (req, res, next) => {
  console.log("protect()");
  let token;
  console.log('token: ', token);
  console.log('req.headers.authorization: ', req.headers.authorization);

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Get token from header
      token = req.headers.authorization.split(" ")[1];

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Get user from the token
      req.user = await User.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      console.log("error: ", error);
      res.status(401);
      throw new Error("Not authorized");
    }

    if (!token) {
      console.log("!token");
      res.status(401);
      throw new Error("Not authorized, no token");
    }
  }
};

module.exports = { protect };
