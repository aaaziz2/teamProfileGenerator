const Intern = require('../lib/Intern')

const name = 'Simba'
const id = '239'
const email = 'Intern@work.com'
const school = 'Hard Knocks'

describe('Intern', () => {
    it('should have name', () => {
        const intern = new Intern(name,id,email,school)

        expect(intern.getName()).toBe(name)
    });
});