const Employee = require('./Employee');

class Manager extends Employee {
    
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    };

    getRole() {
        return 'Manager'
    };

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