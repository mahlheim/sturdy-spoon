// function that returns the specified license badge
function renderLicenseBadge(license) {
  let badge = '';
  if(license != 'none') {
    badge = '![Static Badge](https://img.shields.io/badge/license-' + license + '-pink)';
  } 
  return badge;
};

// function that returns the license link
function renderLicenseLink(license) {
  let licenseLink; 
  switch (license) {
    case 'MIT':
      licenseLink = 'https://opensource.org/license/mit/ ';
      break;
    case 'Apache': 
      licenseLink = 'https://www.apache.org/licenses/LICENSE-2.0 ';
      break;
    case 'IBM': 
      licenseLink = 'https://www.ibm.com/about/software-licensing/us-en/licensing/license_information_documents ';
      break;
    default:
      licenseLink = '';
      break;
  }
  return licenseLink;
};

// function that returns the license section in the generated README
function renderLicenseSection(license) {
  let licenseSection = '';
  if (license != 'none') {
    licenseSection += '## License\n'
    licenseSection += license + '\n'
    licenseSection += 'Please refer to ' + renderLicenseLink(license) + 'for more details.\n'
  } else if (license = 'none') {
    licenseSection += '## License\n'
    licenseSection += 'None\n'
  }
  return licenseSection;
};

// function that generates markdown for generate README
function generateMarkdown(response) {
  const sections = ['Description', 'Installation', 'Usage', 'Contributions', 'License', 'Tests', 'Questions'];

  // project name
  let markdown = '# ' + response.name + '\n';

  // license badge
  markdown += renderLicenseBadge(response.license) + '\n';
  markdown += '\n';

  // table of contents
  markdown += '## Table of Contents\n';
  markdown += '## [Description](#Description)\n';
  markdown += '## [Installation](#Installation)\n';
  markdown += '## [Usage](#Usage)\n';
  markdown += '## [Contributions](#Contributions)\n';
  markdown += '## [License](#License)\n';
  markdown += '## [Tests](#Tests)\n';
  markdown += '## [Questions](#Questions)\n';
  markdown += '\n';

  // description
  markdown += '## ' + sections[0] + '\n';
  markdown += response.description + '\n';
  markdown += '\n';

  // installation
  markdown += '## ' + sections[1] + '\n';
  markdown += response.installation + '\n';
  markdown += '\n';

  // usage
  markdown += '## ' + sections[2] + '\n';
  markdown += response.usage + '\n';
  markdown += '\n';

  // contributions
  markdown += '## ' + sections[3] + '\n';
  markdown += response.contributions + '\n';
  markdown += '\n';

  // license 
  markdown += renderLicenseSection(response.license) + '\n';

  // tests
  markdown += '## ' + sections[5] + '\n';
  markdown += response.tests + '\n';
  markdown += '\n';

  // questions
  markdown += '## ' + sections[6] + '\n';
  markdown += 'Contact me on [GitHub](https://github.com/' + response.github +')!\n';
  markdown += 'Otherwise, email me at ' + response.email + '! Thanks!\n'

  return markdown;
};

module.exports = generateMarkdown;
