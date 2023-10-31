// import inquirer package
const inq = require("inquirer");
const db = require("./connection.js");

// global var
const actionList = ["View All Employees", "Add Employee", "Update Employee Role", "View All Roles", "Add Role", "View All Departments", "Add Department", "Quit"];

// async init func 
async function init(){
    await inqChoices();
}

// async 
async function inqChoices() {
    // inquirer prompt
    const { action } =  await inq.prompt([
            {
                type: 'list',
                message: 'What would your like to do?',
                choices: actionList,
                name: 'action'
            }
        ])
        // then response
        // will need to return init if action is not QUIT
        .then(() => {
            console.log(action);
        });
}

// call init 
init();
