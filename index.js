// import inquirer package
const inq = require("inquirer");

// global var
const actionList = ["View All Employees", "Add Employee", "Update Employee Role", "View All Roles", "Add Role", "View All Departments", "Add Department", "Quit"];

// init func 
let init = () => {
    // inquirer prompt
    inq
        .prompt([
            {
                type: 'list',
                message: 'What would your like to do?',
                choices: actionList,
                name: 'action'
            }
        ])
        // then response
        .then((response) => {
            
        });
}

// call init 
init();