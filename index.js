const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?",
    },
    {
      type: "checkbox",
      message: "What languages do you know?",
      name: "stack",
      choices: ["HTML", "CSS", "JavaScript", "MySQL"],
    },
    {
      type: "list",
      message: "What is your preferred method of communication?",
      name: "contact",
      choices: ["email", "phone", "telekinesis"],
    },
  ])
  .then(function (data) {
    var s = `Programmer Name:${data.name}\n ${data.stack}\n${data.contact}\n`;

    fs.writeFileSync("./ReadMe.txt", s, "utf-8");

    console.log(data);
  });
