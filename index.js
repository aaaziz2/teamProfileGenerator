const inquirer = require('inquirer')
const fs = require('fs')
const internal = require('stream')

const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

let template = require('./src/template')
let card = require('./src/card')

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
      err ? console.log(err) : console.log('Congrats on your completed Team Profile!'))
}

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
        let manager = new Manager(data.managerName,data.managerID,data.managerEmail,data.managerOfficeNum)
        template = template.replace('name-here',manager.getName())
        template = template.replace('title-here',manager.getRole())
        template = template.replace('id-here',manager.getId())
        template = template.replace('email-here',manager.getEmail())
        template = template.replace('detail-here',`Office number: ${manager.officeNumber}`)

        // console.log(template)

        switch(data.firstChoice){
            case 'Add an Engineer':
                addEngineer()
                break
            case 'Add an Intern':
                addIntern()
                break
            default:
                console.log(template)
                // writeToFile('index.html',data)
        }
    })
}

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
        let engineer = new Engineer(data.engineerName,data.engineerID,data.engineerEmail,data.engineerGithub)
        
    })
}

function addIntern(){
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'internName',
            message: 'What is the Team Manager name?',
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
            type: 'list',
            name: 'firstChoice',
            choices:['Add an intern','Add an Intern','Finish building the team'],
            message:'What do you want to do:'
        },
    ])
    .then((data) => {
        
    })
}

init()