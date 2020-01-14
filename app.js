const inquirer = require("inquirer");
// const Employee = require("./employee");
// const Manager = require("./manager");
// const Engineer = require("./engineer");
// const Intern = require("./intern");
const outputPath = "./output/main.html"
const fs = require('fs');

function promptEmployee() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "Enter your name:",
                name: "employeeName"
            },
            {
                type: "number",
                message: "Enter employee ID number:",
                name: "employeeId"
            },
            {
                type: "input",
                message: "Enter email:",
                name: "employeeEmail" 
            },
            {
                type: "list",
                message: "What is your job title?",
                name: "jobTitle",
                choices: ["manager", "engineer", "intern"]
            }
        ])

        .then(function ({ employeeName, employeeId,employeeEmail, jobTitle }) {
            console.log(employeeName, employeeId, employeeEmail, jobTitle);
               
            if (jobTitle === "manager") {
                inquirer
                    .prompt([
                        {
                            type: "number", 
                            name: "officeNumber",
                            message: "Enter office number:"
                        }
                    ])
                    .then(function ({ officeNumber }) {
                        console.log(officeNumber);
                        // fs.writeFileSync(outputPath, "<h1>Hello World</h1>", "utf-8")
                    })
            } else if (jobTitle === "engineer") {
                inquirer
                    .prompt([
                        {
                            type: "input",
                            name: "github",
                            message: "Enter GitHub username:"
                        }
                    ])
                    .then(function ({ github }) {
                        console.log(github);
                    })
            } else if (jobTitle === "intern") {
                inquirer
                    .prompt([
                        {
                            type: "input",
                            name: "school",
                            message: "Enter school name:"
                        }
                    ])
                    .then(function ({ school }) {
                        console.log(school);
                    })
            }
        });
    }
    
    promptEmployee();  

// fs.writeFileSync(outputPath, "<h1>Hello World</h1>", "utf-8")

