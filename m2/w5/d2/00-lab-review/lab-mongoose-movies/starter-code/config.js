require('dotenv').config();

const dbName = process.env.DB_NAME;
const port = process.env.PORT;

module.exports = {
  dbName,
  port
}