const inquirer = require("inquirer");
const generateHTML = require('./src/generateHTML');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
// Presuduo code: App Behavior
/* 
    1. welcome to the app
    2. suggest 'npm run test to reset the 
    3. ask Manager name, id, email, office code
    4. ask mulitple choice question about team member type or quit
        - Engineer
        - Intern
        - I dont want to add more team members
    

*/
const myTeam = [];
function askMannager() {
  const questions = [
    {
      type: "input",
      name: "name",
      message: "What is the team manager's name?",
    },
    {
      type: "number",
      name: "id",
      message: "What is the team manager's id?",
    },
    {
      type: "input",
      name: "email",
      message: "What is the team manager's email?",
    },
    {
      type: "number",
      name: "office",
      message: "What is the team manager's office number?",
    },
  ];
  return inquirer
    .prompt(questions)
    .then(
      (answers) =>
        new Manager(answers.id, answers.name, answers.email, answers.office)
    )
    .catch((err) => console.log(err));
}

function askEngineer() {
  const questions = [
    {
      type: "input",
      name: "name",
      message: "What is your engineer's name?",
    },
    {
      type: "number",
      name: "id",
      message: "What is your engineer's id?",
    },
    {
      type: "input",
      name: "email",
      message: "What is the engineer's email?",
    },
    {
      type: "input",
      name: "gitHub",
      message: "What is your engineer's GitHub username?",
    },
  ];
  const engineer = inquirer
    .prompt(questions)
    .then(
      (answers) =>
        new Engineer(answers.id, answers.name, answers.email, answers.gitHub)
    )
    .catch((err) => console.log(err));

  return engineer;
}

function askIntern() {
  const questions = [
    {
      type: "input",
      name: "name",
      message: "What is your intern's name?",
    },
    {
      type: "number",
      name: "id",
      message: "What is your intern's id?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your intern's email?",
    },
    {
      type: "input",
      name: "school",
      message: "What is your intern's school? ",
    },
  ];
  const intern = inquirer
    .prompt(questions)
    .then(
      (answers) =>
        new Intern(answers.id, answers.name, answers.email, answers.school)
    )
    .catch((err) => console.log(err));
  return intern;
}

function askEmployeeLoop() {
  const question = {
    type: "list",
    name: "addTeammate",
    message: "Which type of team member would you like to add?",
    choices: [
      "Engineer",
      "Intern",
      "I don't want to add any more team members",
    ],
  };

  inquirer
    .prompt(question)
    .then((answer) => {
      if (answer.addTeammate == "Engineer") {
        const engineer = askEngineer();
        return engineer;
      } else if (answer.addTeammate == "Intern") {
        console.log("intern select");
        const intern = askIntern();
        return intern;
      } else {
        console.log("NAH");
        return "nah";
      }
    })
    .then((data) => {
      if (data == "nah") {
        buildMyHTML();
        return;
      } else {
        myTeam.push(data);
        askEmployeeLoop();
      }
    })
    .catch((err) => console.log(err));
}

async function askQuestions() {
 // ask manager
  const manager = await askMannager();
  myTeam.push(manager);
  // looping asking employee type
  await askEmployeeLoop();

    return myTeam;
}

function buildMyHTML(){
    generateHTML(myTeam);
}

function init() {
 askQuestions();
}

init();
