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

    it('should have an id', () => {
        const engineer = new Engineer(name,id,email,github)

        expect(engineer.getId()).toBe(id)
    });

    it('should have an email', () => {
        const engineer = new Engineer(name,id,email,github)

        expect(engineer.getEmail()).toBe(email)
    });

    it('should have a github', () => {
        const engineer = new Engineer(name,id,email,github)

        expect(engineer.getGithub()).toBe(github)
    });

    it('should have role of Engineer', () => {
        const engineer = new Engineer(name,id,email,github)

        expect(engineer.getRole()).toBe('Engineer')
    });
});