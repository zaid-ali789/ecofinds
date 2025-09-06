const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config');

module.exports = (req, res, next) => {
  const header = req.headers["authorization"];
  if (!header) return res.status(401).json({ error: "No token provided" });
  const token = header.split(" ")[1];
  try {
    const decoded = jwt.verify(token, jwtSecret);
    req.user = { id: decoded.id };
    next();
  } catch {
    res.status(401).json({ error: "Invalid token" });
  }
};
