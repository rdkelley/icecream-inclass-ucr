const mysql = require("mysql");
const connectionVars = require("./connection.json");

const connection = mysql.createConnection({
  host: connectionVars.host,

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: connectionVars.user,

  // Be sure to update with your own MySQL password!
  password: connectionVars.password,
  database: connectionVars.database,
});

connection.connect((err) => {
  if (err) throw err;
  console.log(`connected as id ${connection.threadId}`);
});
