// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: "Project's name",
        message: "What's your project's name?",
        validate: (answer) => {
            if(answer == '') {
                return 'Please enter a valid name'
            }
            else {
                return true
            }
        }
    },
    {
        type: 'input',
        name: ''
    }
];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
