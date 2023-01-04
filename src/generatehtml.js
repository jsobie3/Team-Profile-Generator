const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const Manager = require("../lib/Manager");



function generatehtml() {
   return `<div class = "container">
        <div class = "card">
            <div class = "card-title"><h1> Name: ${manager.getName()} </h1>
            <br>
            <h2> Role: Manager</h2>
            </div>
            <br>
            <p>ID:${manager.getid()}</p>
            <br>
            <p>Email:${manager.getEmail()}</p>
            <br>
            <p>Office${manager.officeNumber} </p>
        </div>
        <div class = "card">
            <div class = "card-title"><h1> Name:${engineer.getName()} </h1>
            <br>
            <h2> Role: Engineer </h2>
            </div>
            <br>
            <p>ID: ${engineer.getid()}</p>
            <br>
            <p>Email: ${engineer.getEmail()}</p>
            <br>
            <p>Github: ${engineer.github()}</p>
        </div>
        <div class = "card">
            <div class = "card-title"><h1> Name: ${intern.getName()} </h1>
            <br>
            <h2> Role: Intern</h2>
            </div>  
            <br>
            <p>ID:${intern.getid()}</p>
            <br>
            <p>Email:${intern.getEmail()}</p>
            <br>
            <p>School${intern.school}</p>
        </div>
    </div>`
}

module.exports = generatehtml;