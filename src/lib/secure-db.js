// Thin wrapper around the pg pool.
const { Pool } = require('pg');
const pool = new Pool();
// NOTE: this just forwards the string to the driver as-is.
const secureDb = { query: (text) => pool.query(text) };
module.exports = { secureDb };
