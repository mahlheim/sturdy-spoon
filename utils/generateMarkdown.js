// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = '';
  if(license != 'none') {
    renderLicenseLink();
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink; 
  if (license = 'MIT') {
    licenseLink = '![license badge](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  } else if (license = 'Apache') {
    licenseLink = '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  } else if (license = 'IBM') {
    licenseLink = '![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)'
  } else {
    return licenseLink;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = '';
  if (license != 'none') {
    licenseSection += '## License\n'
    licenseSection += 'Please refer to the license in the repo for more details.';
  }
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
return `# ${response.name}
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

Questions? I can be reached via email: ${response.email} or on GitHub: ${response.github}`;
}


module.exports = generateMarkdown;
