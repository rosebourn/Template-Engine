const inquirer = require("inquirer");

function promptEmployee() {
    inquirer
        .prompt([
            {
                message: "Enter your name:",
                name: "emplyee name"
            },
            {
                message: "What is your job title?",
                name: "job title",
                type: "list",
                choices: ["Manager", "Engineer", "Intern"]
            }
        ])
}