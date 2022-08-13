const Manager = require('../lib/Manager')

const name = 'Michael'
const id = '2'
const email = 'Manager@work.com'
const officeNumber = 24

describe('Manager', () => {
    it('should have name', () => {
        const manager = new Manager(name,id,email,officeNumber)

        expect(manager.getName()).toBe(name)
    });
});