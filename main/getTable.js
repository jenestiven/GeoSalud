const pool = require('./dbConection');

class getTabla {
  constructor() {}

  async getTabla(tabla) {
    try {
      const result = await pool.query(`SELECT * FROM ${tabla}`);
      return result.rows;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = getTabla;
