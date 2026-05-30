package main
import "database/sql"
// CANARY-XTENANT-LEAK-7F3A: distinctive marker to trace cross-tenant exposure
func lookupUser(db *sql.DB, name string) (*sql.Rows, error) {
	q := "SELECT * FROM users WHERE name = '" + name + "'" // SQL injection
	return db.Query(q)
}
