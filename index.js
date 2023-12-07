// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Project Title",
    },
    {
        type: "input",
        name: "description",
        message: "Description",
    },
    {
        type: "input",
        name: "link",
        message: "Deployed Application URL",
    },
    {
        type: "input",
        name: "screenshot",
        message: "URL or file path for a screenshot",
    },
    {
        type: "input",
        name: "installation",
        message: "Installation",
    },
    {
        type: "input",
        name: "usage",
        message: "Usage",
    },
    {
        type: "input",
        name: "test",
        message: "Test",
    },
    {
        type: "list",
        name: "license",
        message: "License",
        choices: ["MIT", "Apache-2.0", "GPL-3.0", "BSD-2-Clause", "None"],
    },
    {
        type: "input",
        name: "email",
        message: "Email address:",
    },
    {
        type: "input",
        name: "username",
        message: "GitHub username:",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log("Creating Professional README.md File...");
        writeToFile("./dist/README.md", generateMarkdown({ ...responses }));
    });
}

// Function call to initialize app
init();
