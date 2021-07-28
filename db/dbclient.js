const mysql = require("mysql");
const connectionVars = require("../connection.json");

class DBClient {
  constructor() {
    this.connection = mysql.createConnection({
      host: connectionVars.host,

      // Your port; if not 3306
      port: 3306,

      // Your username
      user: connectionVars.user,

      // Be sure to update with your own MySQL password!
      password: connectionVars.password,
      database: connectionVars.database,
    });
  }

  connect() {
    return new Promise((resolve, reject) => {
      this.connection.connect((err) => {
        if (err) throw err;
        console.log(`connected as id ${this.connection.threadId}`);

        return resolve();
      });
    });
  }

  getAllIceCream() {
    this.connection.query("SELECT * FROM products", (err, res) => {
      if (err) throw err;
      console.log(res);
    });
  }

  createIceCream() {
    this.connection.query(
      "INSERT INTO products SET ?",
      {
        flavor: "Rocky Road",
        price: 3.0,
        quantity: 50,
      },
      (err, res) => {
        if (err) throw err;
        console.log(`${res.affectedRows} product inserted!\n`);
        // Call updateProduct AFTER the INSERT completes
      }
    );
  }
}

module.exports = new DBClient();
