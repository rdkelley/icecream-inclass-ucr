const connectionClient = require("./db/dbclient");
const inquirer = require('inquirer');

const init = async () => {
  await connectionClient.connect();

  inquirer
    .prompt({
      name: "whatOperation",
      type: "list",
      message: "Do you want to add or get ice creams?",
      choices: ["ADD", "GET"],
    })
    .then((answer) => {
      // based on their answer, either call the bid or the post functions
      if (answer.whatOperation === "ADD") {
        connectionClient.createIceCream();
      } else if (answer.whatOperation === "GET") {
        // TODO Create get operation
      } else {
        connection.end();
      }
    });
};

init();
