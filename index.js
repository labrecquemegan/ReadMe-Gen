// TODO: Include packages needed for this application
const fs = require("fs")
const path = require("path")
const inquirer = require('inquirer');
const generateMarkdown = require("./generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your app?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is a description for your app?',
    },
    {
        type: 'list',
        message: 'What is the license for your app?',
        name: 'license',
        choices: ["Apache","Academic","GNU","ISC","MIT","Mozilla","Open","None"],
    },
    {
        type: 'input',
        name: 'gitUserName',
        message: 'What is your GitHub user name?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
    },

];


// TODO: Create a function to write README file
function writeToFile(answers) {
    return fs.writeFileSync(path.join(process.cwd(), "NewReadMe.md"), answers)
}

// TODO: Create a function to initialize app
async function init() {
    const answers = await inquirer.prompt(questions)
    // console.log(answers)
    writeToFile(generateMarkdown(answers))
}

// Function call to initialize app
init();

