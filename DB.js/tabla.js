
const pool = require('./db');

const getTabla = () => {
  return new Promise((resolve, reject) => {
    pool.query('SELECT * FROM ips', (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result.rows);
      }
    });
  });
};

module.exports = getTabla;

