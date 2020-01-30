const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const generateManager = require("./templates/managerTemplate");
const generateEngineer = require("./templates/engineerTemplate");
const generateIntern = require("./templates/internTemplate");
const buildHTML = require("./output/main");
let myEngineers = [];
let myManagers = [];
let myInterns = [];

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

    .then(function({ employeeName, employeeId, employeeEmail, jobTitle }) {
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
          .then(function({ officeNumber }) {
            console.log(officeNumber);
            var newManager = new Manager(
              employeeName,
              employeeId,
              employeeEmail,
              officeNumber
            );
            myManagers.push(newManager);
            anotherEmp();
          });
      } else if (jobTitle === "engineer") {
        inquirer
          .prompt([
            {
              type: "input",
              name: "github",
              message: "Enter GitHub username:"
            }
          ])
          .then(function({ github }) {
            console.log(github);
            var newEngineer = new Engineer(
              employeeName,
              employeeId,
              employeeEmail,
              github
            );
            myEngineers.push(newEngineer);
            anotherEmp();
          });
      } else if (jobTitle === "intern") {
        inquirer
          .prompt([
            {
              type: "input",
              name: "school",
              message: "Enter school name:"
            }
          ])
          .then(function({ school }) {
            console.log(school);
            var newIntern = new Intern(
              employeeName,
              employeeId,
              employeeEmail,
              school
            );
            myInterns.push(newIntern);
            anotherEmp();
          });
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
    .then(function({ add }) {
      if (add === "yes") {
        promptEmployee();
      } else {
        buildTeam();
      }
    });
}

async function buildTeam() {
  var engineers = await buildEngineer(myEngineers);
  var managers = await buildManager(myManagers);
  var interns = await buildIntern(myInterns);

  var html = buildHTML(engineers, managers, interns);
  fs.writeFile("index.html", html, function(err) {
      if (err) throw err;
      console.log("Team Build Complete!")
  })
}

function buildManager(myManagers) {
    var mangagerCards;
  
    if (myManagers.length > 0) {
      for (i = 0; i < myManagers.length; i++) {
        mangagerCards += generateManager(
          myManagers[i].name,
          myManagers[i].id,
          myManagers[i].email,
          myManagers[i].officeNumber
        );
      }
      return mangagerCards;
    } else {
      return "";
    }
  }

function buildEngineer(myEngineers) {
  var engineerCards;

  if (myEngineers.length > 0) {
    for (i = 0; i < myEngineers.length; i++) {
      engineerCards += generateEngineer(
        myEngineers[i].name,
        myEngineers[i].id,
        myEngineers[i].email,
        myEngineers[i].github
      );
    }
    return engineerCards;
  } else {
    return "";
  }
}

function buildIntern(myInterns) {
    var internCards;
  
    if (myInterns.length > 0) {
      for (i = 0; i < myInterns.length; i++) {
        internCards += generateIntern(
          myInterns[i].name,
          myInterns[i].id,
          myInterns[i].email,
          myInterns[i].school
        );
      }
      return internCards;
    } else {
      return "";
    }
  }


promptEmployee();
