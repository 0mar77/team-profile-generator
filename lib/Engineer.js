// Imports Employee class
const Employee = require('./Employee');

// Creates Engineer class
class Engineer extends Employee {
    constructor(name, id, email, github) {
        // Gets name, id and email from Employee class
        super(name, id, email);
        // Only Engineer will have a github username
        this.github = github;
    }

    // Function that gets the engineer's github account
    getGithub() {
        return this.github;
    }

    // Gets employee role
    getRole() {
        return 'Engineer';
    }

    // Will render an engineer based off of user inputs
    render() {
        return `<div class="cards">
        <h2 id="manager-name">${this.name}</h2>
        <h3>👓 Engineer</span>
        <section>
            <div id="id" class="employee-info">ID: ${this.id}</div>
            <div id="email" class="employee-info">Email:
                <a href=mailto:${this.email}>${this.email}</a>
            </div>
            <div class="employee-info">Github: 
                <a href=https://github.com/${this.github}>${this.github}</a>
            </div>
        </section>
        </div>`
    }
}

module.exports = Engineer;