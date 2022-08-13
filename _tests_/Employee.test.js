const Employee = require('../lib/Employee')

const name = 'Jorge'
const id = '19'
const email = 'employee@work.com'

describe('Employee', () => {
    it('should have name', () => {
        const employee = new Employee(name,id,email)

        expect(employee.getName()).toBe(name)
    });
});