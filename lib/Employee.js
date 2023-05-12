// Creates the Employee class
class Employee {
    // All employees will have the following data
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // Function that gets employee name 
    getName() {
        return this.name;
    };

    // Function that gets employee id
    getId() {
        return this.id;
    };

    // Function that gets employee email
    getEmail() {
        return this.email;
    };

    // Function that gets the employee role
    getRole() {
        return 'Employee'
    };
}

module.exports = Employee;