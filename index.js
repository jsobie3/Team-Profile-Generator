const inquirer = require('inquirer');
const fs = require('fs');
const makehtml = require('./dist/index.html')

const Engineer = require ('./lib/Engineer');
const Manager = require ('./lib/Manager');
const Intern = require ('./lib/Intern');

const distPath = path.join('./dist/index.html', 'htmltemplate.html');

const questions = []
const idArray = []

function addManager() {
   return inquirer.prompt([
        {
            type: 'input',
            name: 'managername',
            message: 'What is your name?',
        },
        {
            type: 'input',
            name: 'managerid',
            message: 'What is your ID',
        },
        {
            type: 'input',
            name: 'manageremail',
            message: 'What is your Email?'
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is your Office Number?'
        },
    ])

};


function addEngineer() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'engineername',
            message: 'What is your name?',
        },
        {
            type: 'input',
            name: 'engineerid',
            message: 'What is your ID',
        },
        {
            type: 'input',
            name: 'engineeremail',
            message: 'What is your Email?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub?'
        },
    ])
    .then((answers) => {
        const engineer = new Engineer(
          answers.engineerName,
          answers.engineerId,
          answers.engineerEmail,
          answers.engineerGithub
        );
        questions.push(engineer);
        idArray.push(answers.engineerId);
    
      });

};

function addIntern() {
   return inquirer.prompt([
        {
            type: 'input',
            name: 'internname',
            message: 'What is your name?',
        },
        {
            type: 'input',
            name: 'internid',
            message: 'What is your ID',
        },
        {
            type: 'input',
            name: 'internemail',
            message: 'What is your Email?'
        },
        {
            type: 'input',
            name: 'school',
            message: 'What school do you go to?'
        },
    ])

};

function createTeam (){
    inquirer.prompt([{
        type: 'list',
        name: 'newMember',
        message: 'would you like to add a new member?',
        choices: ['Engineer', 'Intern','None']
    }
    ])
    .then(userChoice => {
        switch(userChoice.newMember) {
            case "Engineer":
            addEngineer()
            break;
            
            case "Intern":
            addIntern()
            break;
            default:
    
        }
    })
}


// addManager()
// .then(addEngineer)
// .then(addIntern) 


// function addTeamMember(){
//     fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
// }

function init() {
    
        
        fs.writeFileSync(distPath, render(questions), 'utf-8')
        addManager()
    
}

// Function call to initialize app
init();