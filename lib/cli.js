// Imports packages that will be used 
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
// Imprts classes and functions that will be used to create the team
const { renderDocument } = require('../src/templates.js');
const Manager = require('./Manager.js');
const Engineer = require('./Engineer.js');
const Intern = require('./Intern.js');

// Question to create a manager
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

// Question to create an engineer
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

// Question to create an intern
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

// Creates the command line interface
class CLI {

    // This is where the users inputs will be stored
    constructor() {
        this.manager;
        this.engineers = [];
        this.interns = []
    }

    // start function initates the application
    start() {
        // inquirer will ask the questions to create a manager
        inquirer
        .prompt(managerQuestions)
        .then((data) => {
            // User inputs are stored inside of this.manager for later use
            this.manager = new Manager(data.name, data.id, data.email, data.office_number);
        })
        // Once the manager is created, the pickTeam function is called
        .then(() => {
            return this.pickTeam();
        })
        // This will show error if something goes wrong
        .catch((error) => {
            console.log(error);
            console.log('error with start()')
        })
    }

    // pickTeam funtion will ask if you want to add an engineer or intern to your team
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
        // If you pick Engineer, then you will be asked questions to create an engineer
        .then((data) => {
            if(data.addTeamMember === 'Engineer') {
                inquirer
                .prompt(engineerQuestions)
                .then((data) => {
                    // User inputs will be stored in this.engineer for later use
                    this.engineers.push(new Engineer(data.name, data.id, data.email, data.github));
                })
                // Calls the pickTeam function again to see if you want to add another team member
                .then(() => {
                    return this.pickTeam();
                })
                // If you pick Intern, then you will be asked questions to create an intern
            } else if (data.addTeamMember === 'Intern') {
                inquirer
                .prompt(internQuestions)
                .then((data) => {
                    // User inputs are stored in this.intern for later use
                    this.interns.push(new Intern(data.name, data.id, data.email, data.school));
                })
                // Calls the pickTeam function again to see if you want to add another team member
                .then(() => {
                    return this.pickTeam();
                })
            // If you click on Finish Building Team, then an html file will be created with your team members
            } else {
                console.log('Team created!') 
                // Sends the HTML file to the dist folder
                return fs.writeFile(path.join(__dirname, '..', 'dist', 'index.html'),
                // Calls the renderDocument function, to render the user inputs
                renderDocument(this.manager, this.engineers, this.interns),
                (error) => {
                    if(error) throw error;
                })
            
            }
        })
    }


}

module.exports = CLI;
