const inquirer = require('inquirer');
const fs = require('fs');
const generateReadme = require('./generateReadme');

const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a short description explaining the what, why, and how of your project.',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide instructions and examples for use. Include screenshots as needed.',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license for your project.',
      choices: [
        'MIT',
        'GPLv2',
        'Apache',
        'GPLv3',
        'BSD 3-clause',
        'Unlicense',
        'BSD 2-clause',
        'LGPLv3',
        'AGPLv3'
      ],
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'How can others contribute to your project?',
    },
    {
      type: 'input',
      name: 'githubUsername',
      message: 'Enter your GitHub username:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address:',
    }
  ];
  

inquirer.prompt(questions).then((answers) => {
  const readmeContent = generateReadme(answers);
  fs.writeFileSync('README.md', readmeContent, 'utf-8');
});

