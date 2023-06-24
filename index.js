// packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js'); 
const fs = require('fs');

// array of questions that gather content of README that will be produced
const questions = [
    {
        type: 'input',
        message: 'What is the name of your project?',
        name: 'name',
    },
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
        choices: ['MIT', 'Apache', 'IBM', 'none'],
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

// function that writes README file
function writeToFile(response) {
    const fileName = 'README.md';

    fs.writeFile(fileName, response, (err) =>
        err ? console.error(err) : console.log('Success!')
    );
}

// function that initializes app
function init() {
    inquirer.prompt(questions)
    .then (response => writeToFile(generateMarkdown(response)));
}

// calls function that initializes app
init();


// REFERENCES TO ADD TO README WHEN DONE
// https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
// https://github.com/lstillwe/readme-generator/blob/main/utils/generateMarkdown.js 