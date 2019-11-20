const inquirer = require("inquirer");

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
                choices: ["Manager", "Engineer", "Intern"]
            }
        ])

        .then(function ({ employeeName, employeeId,employeeEmail, jobTitle }) {
            console.log(employeeName, employeeId, employeeEmail, jobTitle);
        });
    }
    
    promptEmployee();
  

        // if (job-title === Manager) {
        //     function promptManager() {
        //         inquirer
        //             .prompt([
        //                 {
        //                     type: "number",
        //                     message: "Enter office number:",
        //                     name: "office-number"
        //                 }
        //             ])
        //     }
        // } else if (job-title === Engineer) {
        //     function promptEngineer() {
        //         inquirer
        //             .prompt([
        //                 {
        //                     type: "input",
        //                     message: "Enter GitHub username:",
        //                     name: "github-username"
        //                 }
        //             ])
        //     }
        // } else if (job-title === Intern) {
        //     function promptIntern() {
        //         inquirer
        //             .prompt([
        //                 {
        //                 type: "input",
        //                 message: "Enter school:",
        //                 name: "intern-school"
        //             }
        //             ])
        //     }
        // }



