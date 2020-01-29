const inquirer = require("inquirer");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
// const outputPath = "./output/main.html";
const generateTeam = require("./templates/managerTemplate");
const generateEngineer = require("./templates/engineerTemplate");
const generateIntern = require("./templates/internTemplate");
let myTeam = [];

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
                        var newMember = new Manager(employeeName, employeeId,employeeEmail, officeNumber)
                        myTeam.push(newMember);
                        anotherEmp();
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
                        var newMember = new Engineer(employeeName, employeeId,employeeEmail, github)
                        myTeam.push(newMember);
                        anotherEmp();
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
                        var newMember = new Intern(employeeName, employeeId,employeeEmail, school)
                        myTeam.push(newMember);
                        anotherEmp();
                    })
            }
        });

    }

    function anotherEmp() {
        inquirer
                    .prompt([
                        {
                            type: "list",
                            message: "Would you like to add another employee?",
                            name: "add",
                            choices: ["yes", "no"]
                        }
                    ])
                    .then(function ({ add }) {
                        if (add === "yes") {
                          promptEmployee();
                        } else {
                          console.log("Building Team");
                          console.log(myTeam);
                          buildTeam(myTeam);
                        
                        }
                        
                    })
                   }

        async function buildTeam(myTeam) {
            console.log(buildEngineer(myTeam));
            var engineers = await buildEngineer(myTeam);
            // var managers = await buildManager(myManagers);
            // var interns = await buildIntern(myInterns);

            // var html = buildHTML(engineers, managers, interns);
            // FS goes here writeFile
        }

        function buildEngineer(myEngineers) {
            var engiCards;

            if (myEngineers.length > 0) {
                for (i = 0; i < myEngineers.length; i++) {
                    engiCards += generateEngineer(myEngineers[i].name, myEngineers[i].id, myEngineers[i].email, myEngineers[i].github);
                }
                return engiCards;
            } else {
                return '';
            }
        }

        // function buildTeam() {
        //     if (new Engineer) {
        //         generateEngineer;
        //         $("#engineer-card").text(myTeam[i]);
        //         $("#engineer-card").append()
        //     } else if (new Manager) {
        //         generateManager;
        //     } else if (new Intern) {
        //         generateIntern;
        //     }
        // }
    

    // function buildTeam() {
    //     for (var i = 0; i < myTeam.length; i++) {
    //         var managerCard = $("#manager-card");
    //         var engineerCard = $("#engineer-card");
    //         var internCard = $("#intern-card");

    //         managerCard.text(myTeam[i]);
    //         engineerCard.text(myTeam[i]);
    //         internCard.text(myTeam[i]);

    //         $("#manger-card").append(managerCard);
    //         $("#engineer-card").append(engineerCard);
    //         $("#intern-card").append(internCard);
    //     }
    // }
    
    promptEmployee();  
   


