const {Pool} = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'escenarios-deportivos.cuzaxiegjpbx.us-east-1.rds.amazonaws.com',
  database: 'escenarios-deportivos',
  password: 'database-1',
  port: 5432,
});

module.exports = pool;
