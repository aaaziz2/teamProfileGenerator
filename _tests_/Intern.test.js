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

    it('should have an id', () => {
        const intern = new Intern(name,id,email,school)

        expect(intern.getId()).toBe(id)
    });

    it('should have an email', () => {
        const intern = new Intern(name,id,email,school)

        expect(intern.getEmail()).toBe(email)
    });

    it('should have a school', () => {
        const intern = new Intern(name,id,email,school)

        expect(intern.getSchool()).toBe(school)
    });

    it('should have role of Intern', () => {
        const intern = new Intern(name,id,email,school)

        expect(intern.getRole()).toBe('Intern')
    });
});