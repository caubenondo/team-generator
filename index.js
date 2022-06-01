const inquirer = require("inquirer");
const generateHTML = require("./src/generateHTML");
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
    5. create instances of Employee type classes and push them to team array
    6. use fs to write html file with collected data
*/
// place holder for the Team Array
const myTeam = [];

// asking info about the manaager,
// then use that info to create instance of Manager, then return instance of Manager
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
            validate(input) {
                if (isNaN(input)) {
                    return "Please enter a number!";
                }
                return true;
            },
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
            validate(input) {
                if (isNaN(input)) {
                    return "Please enter a number!";
                }
                return true;
            },
        },
    ];
    return inquirer
        .prompt(questions)
        .then(
            (answers) =>
                new Manager(
                    answers.id,
                    answers.name,
                    answers.email,
                    answers.office
                )
        )
        .catch((err) => console.log(err));
}

// Asking info about the Engineer
// use that info to create an instance of Engineer
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
            validate(input) {
                if (isNaN(input)) {
                    return "Please enter a number!";
                }
                return true;
            },
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
                new Engineer(
                    answers.id,
                    answers.name,
                    answers.email,
                    answers.gitHub
                )
        )
        .catch((err) => console.log(err));

    return engineer;
}

// asking info about the Intern
// use that info to create an instance of Intern class
// return that intern object
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
            validate(input) {
                if (isNaN(input)) {
                    return "Please enter a number!";
                }
                return true;
            },
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
                new Intern(
                    answers.id,
                    answers.name,
                    answers.email,
                    answers.school
                )
        )
        .catch((err) => console.log(err));
    return intern;
}

// prompt user the option to add team members in a functional loop
// break the loop if they dont want to add member
// handle type of questions to ask accordingly to the user's teammate type
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
                // ask and collect info about the Engineer
                const engineer = askEngineer();
                return engineer;
            } else if (answer.addTeammate == "Intern") {
                // ask and collect info about the Intern
                const intern = askIntern();
                return intern;
            } else {
                // break the loop
                console.log(
                    "Hai Duong: 'Thank you for answering all the questions.'\n\n\n\n\n\n\n"
                );
                return "nah";
            }
        })
        .then((data) => {
            if (data == "nah") {
                // build the HTML only after all the info are collected and cancel the loop
                buildMyHTML();
                return;
            } else {
                // push the teammate to the team array
                myTeam.push(data);
                // recycle the questions
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
    return;
}

function buildMyHTML() {
    generateHTML(myTeam);
}

function init() {
    askQuestions();
}

init();
