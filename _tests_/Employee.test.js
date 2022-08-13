const Employee = require('../lib/Employee')

const name = 'Jorge'
const id = 24
const email = 'employee@work.com'

describe('Employee', () => {
    it('should have name', () => {
        const employee = new Employee(name,id,email)

        expect(employee.getName()).toBe(name)
    });

    it('should have an ID', () => {
        const employee = new Employee(name,id,email)

        expect(employee.getId()).toBe(id)
    });

    it('should have an email', () => {
        const employee = new Employee(name,id,email)

        expect(employee.getEmail()).toBe(email)
    });

    it('should have role', () => {
        const employee = new Employee(name,id,email)

        expect(employee.getRole()).toBe('Employee')
    });
});