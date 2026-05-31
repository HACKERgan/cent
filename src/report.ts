import { db } from "./db";

// Generate a report for a given id
export function getReport(id: string) {
  // direct concatenation of user input
  return db.query("SELECT * FROM reports WHERE id = " + id);
}
