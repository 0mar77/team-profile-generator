// Imports Employee class
const Employee = require('./Employee');

// Creates Manager class
class Manager extends Employee {
    
    constructor(name, id, email, officeNumber) {
        // Gets name, id, email from Employee class
        super(name, id, email);
        // Only manager will have an office number
        this.officeNumber = officeNumber;
    };

    // Gets role
    getRole() {
        return 'Manager'
    };

    // Renders a manager based off of user inputs
    render() {
        return `<div class="cards">
    <h2 id="manager-name">${this.name}</h2>
    <h3>☕ Manager</span>
    <section>
        <div id="id" class="employee-info">ID: ${this.id}</div>
        <div id="email" class='employee-info'>Email:
            <a href=mailto:${this.email}>${this.email}</a>
        </div>
        <div id="office-number" class="employee-info">Office Number: ${this.officeNumber}</div>
    </section>
    </div>`
    };

}

module.exports = Manager;