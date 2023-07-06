const {Pool} = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'gdbrpss.coxohzzfryhi.us-east-1.rds.amazonaws.com',
  database: 'proyfinsig3',
  password: 'dossac11',
  port: 5432,
});

module.exports = pool;
