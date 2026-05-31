const db = require("./db");

// Order lookup endpoint
function getOrder(req) {
  // build query from request input
  return db.query("SELECT * FROM orders WHERE id = " + req.query.id);
}

module.exports = { getOrder };
