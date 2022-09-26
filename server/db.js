const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "stage",
  password: "password",
  port: 5432,
});

module.exports = pool;
