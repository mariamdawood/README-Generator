// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    return `[![License](https://img.shields.io/badge/license-${license}-blue.svg)](https://opensource.org/licenses/${license})`
  } else {
    return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    return `https://opensource.org/licenses/${license}`
  } else {
    return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    const licenseLink = renderLicenseLink(license)
    return `This project is licensed under the [${license}](${licenseLink}) license.`
  } else {
    return ''
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  const licenseBadge = renderLicenseBadge(data.license)
  const licenseSection = renderLicenseSection(data.license)

  return `# ${data.title} ${licenseBadge}

  ${data.description}

## Deployed Application URL

${data.link}

## Screenshot

![alt-text](${data.screenshot})

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribution Guidelines](##contribution-guidelines)
- [Test](#test)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## Contribution Guidelines

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)

## Test

${data.test}

## License

${licenseSection}

## Questions

For any questions or additional information, please contact me:
  - [Email](mailto:${data.email}?subject=[GitHub]%20Dev%20Connect)
  - [GitHub](https://github.com/${data.username})

`;
}

module.exports = generateMarkdown;
