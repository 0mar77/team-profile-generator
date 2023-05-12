// Imports Employee class
const Employee = require('../lib/Employee');

// Tests that the inputs matches the outputs
describe('New employee', () => {
    test('Should return employee name', () => {
        // Creates a new employee with the following inputs
        const newEmployee = new Employee('John', 1, '123@123.com');
        // Shows expected results
        expect(newEmployee.getName()).toEqual('John');
        expect(newEmployee.getId()).toEqual(1);
        expect(newEmployee.getEmail()).toEqual('123@123.com');
        expect(newEmployee.getRole()).toEqual('Employee');
    })
})