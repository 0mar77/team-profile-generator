const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const { renderDocument } = require('../src/templates.js');
const Manager = require('./Manager.js');
const Engineer = require('./Engineer.js');
const Intern = require('./Intern.js');


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

    constructor() {
        this.manager;
        this.engineers = [];
        this.interns = []
    }
    start() {
        inquirer
        .prompt(managerQuestions)
        .then((data) => {
            this.manager = new Manager(data.name, data.id, data.email, data.office_number);
        })
        .then(() => {
            return this.pickTeam();
        })
        .catch((error) => {
            console.log(error);
            console.log('error with start()')
        })
    }

    pickTeam() {
        inquirer
        .prompt([
            {
                type: 'list',
                name: 'addTeamMember',
                message: 'Would you like to add a team member?',
                choices: ['Engineer', 'Intern', 'Finnish Building Team']
            }
        ])
        .then((data) => {
            if(data.addTeamMember === 'Engineer') {
                inquirer
                .prompt(engineerQuestions)
                .then((data) => {
                    this.engineers.push(new Engineer(data.name, data.id, data.email, data.github));
                })
                .then(() => {
                    return this.pickTeam();
                })
            } else if (data.addTeamMember === 'Intern') {
                inquirer
                .prompt(internQuestions)
                .then((data) => {
                    this.interns.push(new Intern(data.name, data.id, data.email, data.school));
                })
                .then(() => {
                    return this.pickTeam();
                })
            } else {
                console.log('Team created!') 
                
                return fs.writeFile(path.join(__dirname, '..', 'dist', 'index.html'),
                renderDocument(this.manager, this.engineers, this.interns),
                (error) => {
                    if(error) throw error;
                })
            
            }
        })
    }


}

module.exports = CLI;
