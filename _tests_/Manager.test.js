const Manager = require('../lib/Manager')

const name = 'Michael'
const id = 2
const email = 'Manager@work.com'
const officeNumber = 24

describe('Manager', () => {
    it('should have name', () => {
        const manager = new Manager(name,id,email,officeNumber)

        expect(manager.getName()).toBe(name)
    });

    it('should have an id', () => {
        const manager = new Manager(name,id,email,officeNumber)

        expect(manager.getId()).toBe(id)
    });

    it('should have an email', () => {
        const manager = new Manager(name,id,email,officeNumber)

        expect(manager.getEmail()).toBe(email)
    });

    it('should have an office number', () => {
        const manager = new Manager(name,id,email,officeNumber)

        expect(manager.officeNumber).toBe(officeNumber)
    });

    it('should have role of Manager', () => {
        const manager = new Manager(name,id,email,officeNumber)

        expect(manager.getRole()).toBe('Manager')
    });
});