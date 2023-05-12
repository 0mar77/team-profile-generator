const Employee = require('../lib/Employee');

describe('New employee', () => {
    test('Should return employee name', () => {
        const newEmployee = new Employee('John', 1, '123@123.com');
        expect(newEmployee.getName()).toEqual('John');
        expect(newEmployee.getId()).toEqual(1);
        expect(newEmployee.getEmail()).toEqual('123@123.com');
        expect(newEmployee.getRole()).toEqual('Employee');
    })
})