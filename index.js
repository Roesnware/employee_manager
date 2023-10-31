// import inquirer package
const inq = require("inquirer");
const db = require("./connection.js");

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
    // then response
    // will need to return init if action is not QUIT
    console.log(action);
    switch (action) {
        case "View All Employees":
            viewAllEmployees();
            return init();
        case "Add Employee":
            addEmployee();
            return init();
        case "Update Employee Role":
            updateEmployeeRole();
            return init();
        case "View All Roles":
            viewAllRoles();
            return init();
        case "Add Role":
            addRole();
            return init();
        case "View All Departments":
            viewAllDepartments();
            return init();
        case "Add Department":
            addDepartment();
            return init();
        default:
            break;
    }
}

// call init 
init();
