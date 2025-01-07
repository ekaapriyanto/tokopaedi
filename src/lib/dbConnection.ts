import mysql from "mysql2/promise";

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "tokopaedi",
});

export async function getDbConnection() {
  return await db.getConnection();
}

export default db;
