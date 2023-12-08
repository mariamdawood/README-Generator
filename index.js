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
        name: "viewtext",
        message: "Deployed Application URL / Walkthrough Video Alt-Text",
    },
    {
        type: "input",
        name: "viewlink",
        message: "Deployed Application URL / Walkthrough Video Link",
    },
    {
        type: "input",
        name: "screenshot",
        message: "Screenshot",
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
        type: "input",
        name: "contributorguidelines",
        message: "Contributor Guidelines"
    },
    {
        type: "input",
        name: "credits",
        message: "Credits",
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
        writeToFile("./dist/README.md", generateMarkdown({ ...responses }));
        console.log("Generated Professional README.md File...");
    });
}

// Function call to initialize app
init();
