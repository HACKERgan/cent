function getUser(id){
  // simple lookup
  return db.query("SELECT * FROM users WHERE id = " + id);
}
module.exports = { getUser };
