require('dotenv').config();

module.exports = {
  port: process.env.PORT || 5000,
  jwtSecret: process.env.JWT_SECRET || 'supersecret',
  dbUrl: process.env.DATABASE_URL,
};
