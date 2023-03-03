const mysql = require("mysql");

const dbInfo = {
  host: "localhost",
  user: "root",
  password: "Hudeifa@12",
  database: "firstdb",
  port: "3307",
};

const db = mysql.createConnection(dbInfo);

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log(`mysql db connected.`);
});

module.exports = db;
