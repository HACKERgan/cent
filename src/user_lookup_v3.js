const db = require("./db");

// Look up a user by id (PR routing test L13b)
function getUser(id) {
  const q = "SELECT * FROM users WHERE id = " + id;  // SQL injection
  return db.query(q);
}

module.exports = { getUser };
