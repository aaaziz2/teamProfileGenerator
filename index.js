const inquirer = require('inquirer')
const fs = require('fs')
const internal = require('stream')

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
        switch(data.firstChoice){
            case 'Add an Engineer':
                addEngineer()
                break
            case 'Add an Intern':
                addIntern()
                break
            default:
                writeToFile('index.html',data)
        }
    })
}

function addEngineer(){
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: 'What is the Team Manager name?',
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
            type: 'list',
            name: 'firstChoice',
            choices:['Add an Engineer','Add an Intern','Finish building the team'],
            message:'What do you want to do:'
        },
    ])
    .then((data) => {
        
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