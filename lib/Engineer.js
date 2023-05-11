const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return 'Engineer';
    }

    render() {
        return `<div class="cards">
        <h2 id="manager-name">${this.name}</h2>
        <h3>👓 Engineer</span>
        <section>
            <div id="id" class="employee-info">ID: ${this.id}</div>
            <div id="email" class="employee-info">Email:
                <a href=mailto:${this.email}>${this.email}</a>
            </div>
            <div class="employee-info">Github: ${this.github}</div>
        </section>
        </div>`
    }
}

module.exports = Engineer;