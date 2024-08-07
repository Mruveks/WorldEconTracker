require('dotenv').config();

module.exports = {
  port: process.env.PORT || 3000,
  fredApiKey: process.env.FRED_API_KEY,
  cacheTime: 3600, // 1 hour
};