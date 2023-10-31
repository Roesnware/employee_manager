// import inquirer package
const inq = require("inquirer");
const connection = require("./connection.js");

// global var
const actionList = ["View All Employees", "Add Employee", "Update Employee Role", "View All Roles", "Add Role", "View All Departments", "Add Department", "Quit"];

// async init func 
async function init() {
    await inqChoices();
}

// async 
async function inqChoices() {
    // inquirer prompt
    const { action } = await inq.prompt([
        {
            type: 'list',
            message: 'What would your like to do?',
            choices: actionList,
            name: 'action'
        }
    ]);
    // switch case on input 
    // will need to return init if action is not QUIT
    switch (action) {
        case "View All Employees":
            console.log(action);
            //viewAllEmployees();
            return init();
        case "Add Employee":
            console.log(action);
            //addEmployee();
            return init();
        case "Update Employee Role":
            console.log(action);
            //updateEmployeeRole();
            return init();
        case "View All Roles":
            console.log(action);
            //viewAllRoles();
            return init();
        case "Add Role":
            console.log(action);
            //addRole();
            return init();
        case "View All Departments":
            console.log(action);
            //viewAllDepartments();
            return init();
        case "Add Department":
            console.log(action);
            //addDepartment();
            return init();
        default:
            break;
    }
}

// call init 
init();
