// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Provide a short description of your project. What was your motivation? What problem does it solve?',
        name: 'description',
    },
    {
        type: 'input',
        message:'What steps should be taken to install your project?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Provide instructions for use of your project.',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'List any contribution guidelines for your project.',
        name: 'contributing',
    },
    {
        type: 'list',
        message: 'Select the license type used in your project.',
        name: 'license',
        choices: ['MIT', 'Apache', 'GPL'],
    },
    {
        type: 'input',
        message: 'Provide test instructions for your project.',
        name: 'test',
    },
    {
        type:'input',
        message: 'What is your GitHub username?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const fileData = ``
    
    fs.writeFile('README.md', fileData, (err) =>
    err ? console.error(err) : console.log('Success!')
    );
}

// REMEMBER TO INCLUDE TABLE OF CONTENTS IN README************* and add github/email to questions section 

// TODO: Create a function to initialize app
function init() {
    
    writeToFile();
}

// Function call to initialize app
init();
