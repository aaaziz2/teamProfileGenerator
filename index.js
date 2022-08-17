const inquirer = require('inquirer')
const fs = require('fs')
// import classes
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
// import templates
let template = require('./src/template')
let card = require('./src/card')
// function to create html file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
      err ? console.log(err) : console.log('Congrats on your completed Team Profile!'))
}
// ask user for info to generate page
function init(){
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'What is the Team Manager name?',
        },
        {
            type: 'input',
            name: 'managerID',
            message: 'What is their employee ID?'
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'What is their email address?'
        },
        {
            type: 'input',
            name: 'managerOfficeNum',
            message: 'What is their office number?'
        },
        {
            type: 'list',
            name: 'firstChoice',
            choices:['Add an Engineer','Add an Intern','Finish building the team'],
            message:'What do you want to do:'
        },
    ])
    .then((data) => {
        // create an Object from the Manager class
        let manager = new Manager(data.managerName,data.managerID,data.managerEmail,data.managerOfficeNum)
        // Fill out the page with necessary info
        template = template.replace('name-here',manager.getName())
        template = template.replace('icon-here',`<i class="fa-solid fa-user-tie"></i>`)
        template = template.replace('title-here',manager.getRole())
        template = template.replace('id-here',manager.getId())
        template = template.replace('email-here',manager.getEmail())
        template = template.replace('detail-here',`Office number: ${manager.officeNumber}`)
        // depending on user input add team members or stop
        switch(data.firstChoice){
            case 'Add an Engineer':
                addEngineer()
                break
            case 'Add an Intern':
                addIntern()
                break
            default:
                // console.log(template)
                writeToFile('./dist/Index.html',template)
        }
    })
}
// add an Engineer to the team
function addEngineer(){
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: 'What is their name?',
        },
        {
            type: 'input',
            name: 'engineerID',
            message: 'What is their employee ID?'
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: 'What is their email address?'
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: 'What is their github?'
        },
        {
            type: 'list',
            name: 'firstChoice',
            choices:['Add an Engineer','Add an Intern','Finish building the team'],
            message:'What do you want to do:'
        },
    ])
    .then((data) => {
        // create a new object from the Engineer class
        let engineer = new Engineer(data.engineerName,data.engineerID,data.engineerEmail,data.engineerGithub)
        // make a copy of the card so that you can add multiple people if necessary
        let engCard = card.slice()
        // add in the user inputted info
        engCard = engCard.replace('name-here',engineer.getName())
        engCard = engCard.replace('icon-here',`<i class="fa-solid fa-laptop-code"></i>`)
        engCard = engCard.replace('title-here',engineer.getRole())
        engCard = engCard.replace('id-here',engineer.getId())
        engCard = engCard.replace('email-here',engineer.getEmail())
        engCard = engCard.replace('detail-here',`Github: ${engineer.getGithub()}`)
        // add card to the page
        template = template.replace('<!-- add-here -->',engCard)
        // depending on user input add team members or stop
        switch(data.firstChoice){
            case 'Add an Engineer':
                addEngineer()
                break
            case 'Add an Intern':
                addIntern()
                break
            default:
                // console.log(template)
                writeToFile('./dist/Index.html',template)
        }
    })
}
// add an Intern to the team
function addIntern(){
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'internName',
            message: 'What is their name?',
        },
        {
            type: 'input',
            name: 'internID',
            message: 'What is their employee ID?'
        },
        {
            type: 'input',
            name: 'internEmail',
            message: 'What is their email address?'
        },
        {
            type: 'input',
            name: 'internSchool',
            message: 'What school are they in?'
        },
        {
            type: 'list',
            name: 'firstChoice',
            choices:['Add an Engineer','Add an Intern','Finish building the team'],
            message:'What do you want to do:'
        },
    ])
    .then((data) => {
        // create a new object from the Intern class
        let intern = new Intern(data.internName,data.internID,data.internEmail,data.internSchool)
        // make a copy of the card so that you can add multiple people if necessary
        let internCard = card.slice()
        // add in the user inputted info
        internCard = internCard.replace('name-here',intern.getName())
        internCard = internCard.replace('icon-here',`<i class="fa-solid fa-user-graduate"></i>`)
        internCard = internCard.replace('title-here',intern.getRole())
        internCard = internCard.replace('id-here',intern.getId())
        internCard = internCard.replace('email-here',intern.getEmail())
        internCard = internCard.replace('detail-here',`School: ${intern.getSchool()}`)
        // add card to the page
        template = template.replace('<!-- add-here -->',internCard)
        // depending on user input add team members or stop
        switch(data.firstChoice){
            case 'Add an Engineer':
                addEngineer()
                break
            case 'Add an Intern':
                addIntern()
                break
            default:
                // console.log(template)
                writeToFile('./dist/Index.html',template)
        }
    })
}

init()