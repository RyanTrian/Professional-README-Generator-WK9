// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const isEmpty = answer => answer ? true : console.log("Please enter a valid answer");
const questions = [
    {
        type: 'input',
        name: 'githubUsername',
        message: 'What is your GitHub\'s username?',
        validate: isEmpty(answer),
    },
    {
        type: 'input',
        name: 'githubURL',
        message: 'What is the link to your GitHub\'s profile',
        validate: isEmpty(answer),
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your direct email?',
        validate: isEmpty(answer),
    },
    {
        type: 'input',
        name: 'projectName',
        message: 'What\'s your projects name?',
        validate: isEmpty(answer),
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project?',
        validate: isEmpty(answer),
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['Apache 2', 'MIT', 'GNU 3', 'BSD 3', 'None'],
        default: 0,
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What command should be run to install dependencies?',
        default: 'npm i',
        validate: isEmpty(answer),
    },
    {
        type: 'input',
        name: 'test',
        message: 'What command should be run to run test?',
        default: 'npm test',
        validate: isEmpty(answer),
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using the repo?',
        validate: isEmpty(answer),
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What does the user need to know about contributing to the repo?',
        validate: isEmpty(answer),
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, answers) {
    const encodedLicense = answers.license.split(' ').join('%20');
    const writeReadme = 
    `# ${answers.projectName} 
    <br>
    <img width=160, height=40 src="https://img.shields.io/badge/license-${encodedLicense}-important">
    <br>
    <br>
    ## Description
    
    ${answers.description}
    
    ## Table of Contents 
    
    - [${answers.projectName}](#${answers.projectName})
      - [Description](#description)
      - [Table of Contents](#table-of-contents)
      - [Installation](#installation)
      - [Usage](#usage)
      - [License](#license)
      - [Tests](#tests)
      - [Questions](#questions)
    
    ## Installation 
    \`\`\`
    ${answers.installation}
    \`\`\`
    ## Usage 
    
    ${answers.usage}
    
    ## License 
    
    This project is licensed under the [${answers.license}](LICENSE) license

    ## Contributing

    ${answers.contributing}
    
    ## Tests 
    To run test, run the following command:
    \`\`\`
    ${answers.test}
    \`\`\`
    
    ## Questions 
    
    If you have any questions about the repo, open an issue or contact me directly at ${answers.email}. 
    You can find more of my work at [${answers.githubUsername}](${answers.githubURL}).
    `
    fs.writeFile(fileName, writeReadme, (err) =>
    err ? console.log(err) : console.log('Successfully created README.md!'))
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(writeToFile("sampleREADME.md", answers));
}

// Function call to initialize app
init();
