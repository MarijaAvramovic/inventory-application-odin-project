const { configDotenv } = require("dotenv");
const { Pool } = require("pg");

module.exports = new Pool({
  connectionString: process.env.DATABASE_URL
});


//|| "postgresql://marijaavramovic@localhost:5432/mini_messageboard",