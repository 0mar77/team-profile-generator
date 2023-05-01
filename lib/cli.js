const inquirer = require('inquirer');
const fs = require('fs');
const { renderDocument } = require('./document');

const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the manager\'s name?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the manager\'s ID?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the manager\'s email?'
    },
    {
        type: 'input',
        name: 'office_number',
        message: 'What is the manager\'s office number?'
    }
]

const engineerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the engineer\'s name?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the engineer\'s ID?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the engineer\'s email?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is the engineer\'s github username?'
    }
]

const internQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the intern\'s name?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the intern\'s ID?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the intern\'s email?'
    }, 
    {
        type: 'input',
        name: 'school',
        message: 'What school does the intern attend?'
    }
]

class CLI {
    start() {
        inquirer.prompt(managerQuestions)
        .then((userAnswers) => {
            console.log(userAnswers)
        })
    }
}

module.exports = CLI;
