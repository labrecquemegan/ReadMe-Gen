// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == "None") {
    return""
  } else {
    return `![badge](https://img.shields.io/badge/license-${license}-brightgreen)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == "None") {
    return ""
  } else {
    return `- [license](#license)`
  }
}

// TODO: Create a function that returns the license section of README

// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == "None") {
    return ""
  } else {
    return `  
    ## License
    This application is covered by the ${license} license.
    `
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
  # <h1 align="center">${answers.title}</h1>

  ${renderLicenseBadge(answers.license)}

  ## Table of Contents
  - [Description](#description)
  - [gitUserName](#gitUserName)
  ${renderLicenseLink(answers.license)}
  - [Email](#email)

  ${renderLicenseSection(answers.license)}

  ## Description
    ${answers.description}

  <br />

  ## Questions
  Find me on GitHub: ${answers.gitUserName}
  Email me at: ${answers.email}

`
}

module.exports = generateMarkdown;
