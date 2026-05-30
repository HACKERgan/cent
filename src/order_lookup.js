const db = require("./db");
function findOrder(oid){ return db.query("SELECT * FROM orders WHERE id="+oid); } // SQLi
module.exports={findOrder};
