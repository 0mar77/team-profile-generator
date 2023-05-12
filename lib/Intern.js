// Imports Employee class
const Employee = require('./Employee');

//  Creates an Intern class
class Intern extends Employee {
    constructor(name, id, email, school) {
        // Gets name, id, email from Employee class
        super(name, id, email)
        // Only interns will have a school section
        this.school = school;
    }

    // Gets intern's school
    getSchool() {
        return this.school;
    }

    // Gets role
    getRole() {
        return 'Intern'
    }

    // Will render an intern based off of user inputs
    render() {
        return `<div class="cards">
        <h2>${this.name}</h2>
        <h3>👨‍🎓 Intern</span>
        <section>
        <div id="id" class="employee-info">ID: ${this.id}</div>
        <div id="email" class="employee-info">Email: 
            <a href=mailto:${this.email}>${this.email}</a>
        </div>
        <div id="office-number" class="employee-info">School: ${this.school}</div>
        </section>
        </div>`
    }
}

module.exports = Intern;