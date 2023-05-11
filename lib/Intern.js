const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern'
    }

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