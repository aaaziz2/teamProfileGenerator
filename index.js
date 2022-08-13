const inquirer = require('inquirer')
const fs = require('fs')

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
            name: 'firstAdd',
            choices:['Add an engineer','Add an intern','Finish building the team'],
            message:'What do you want to do:'
        },
    ])
    .then((data) => {

    })
}