const Engineer = require('../lib/Engineer')

const name = 'Monica'
const id = '19'
const email = 'engineer@work.com'
const github = 'fakegit'

describe('Engineer', () => {
    it('should have name', () => {
        const engineer = new Engineer(name,id,email,github)

        expect(engineer.getName()).toBe(name)
    });
});