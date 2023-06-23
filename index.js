// packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js'); 
const fs = require('fs');

inquirer
    .prompt([
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
])
    .then((response) => {
const fileData = 
`# ${response.name}

## Description

${response.description}
        
## Table of Contents

Description
Installation
Usage
Contributions
License
Tests
Questions
        
## Installation

${response.installation}
        
## Usage

${response.usage}
        
## Contributions

${response.contributions}
        
## License

${response.license}
        
## Tests

${response.tests}
        
## Questions

Questions? I can be reached via email: ${response.email} or on GitHub: ${response.github}`

        fs.writeFile('README.md', fileData, (err) =>
        err ? console.error(err) : console.log('Success!')
        );
    }
    );

// REFERENCES TO ADD TO README WHEN DONE
// https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
// https://github.com/lstillwe/readme-generator/blob/main/utils/generateMarkdown.js 