// import inquirer package
const inq = require("inquirer");
const addData = require('./queries/addData.js');
const getData = require('./queries/getData.js');
const updateData = require('./queries/updateData.js');

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

            getData('employee');

            break;
        case "Add Employee":
            console.log(action);

            let employee_response = miniPrompt(action);
            addData('employee', employee_response);

            break;
        case "Update Employee Role":
            console.log(action);

            let employee_data = editEmployee();
            updateData(employee_data);
            
            break;
        case "View All Roles":
            console.log(action);

            getData('role');

            break;
        case "Add Role":
            console.log(action);

            let role_response = miniPrompt(action);
            addData('role', role_response);
        
            break;
        case "View All Departments":
            console.log(action);

            getData('department');

            break;
        case "Add Department":
            console.log(action);

            let department_response = miniPrompt(action);
            addData('department', department_response);

            break;
        default:
            process.exit();
    }
    return init();
}

// mini promt for adding data
async function miniPrompt(action) {
    // prompt for adding department
    if (action == "Add Department") {
        inq
            .prompt([{
                type: 'input',
                message: 'What is the name of the department you would like to add?',
                name: 'name'
            }
            ]).then((response) => {
                return response;
            });
    }
    // prompt for adding role
    else if (action == "Add Role") {
        inq
            .prompt([{
                type: 'input',
                message: 'What is the title of the role you would like to add?',
                name: 'title'
            },
            {
                type: 'input',
                message: 'What is the salary of the role you would like to add?',
                name: 'salary'
            },
            {
                type: 'input',
                message: 'What is the department for the role you would like to add?',
                name: 'department_id'
            }
            ]).then((response) => {
                return response;
            });
    }
    // prompt for adding employee
    else {
        inq
            .prompt([{
                type: 'input',
                message: 'What is the first name of the employee you would like to add?',
                name: 'first_name'
            },
            {
                type: 'input',
                message: 'What is the last name of the employee you would like to add?',
                name: 'last_name'
            },
            {
                type: 'input',
                message: 'What is the role id for the employee you would like to add?',
                name: 'role_id'
            },
            {
                type: 'input',
                message: 'What is the manager id for the employee you would like to add?',
                name: 'manager_id'
            }
            ]).then((response) => {
                return response;
            });
    }
}

// fucn for editing employee
async function editEmployee() {
    // prompt for editing employee
    inq
        .prompt([
            {
                type: 'list',
                message: 'Please select an employee to edit : ',
                choices: await GetData("employee"),
                name: 'employee'
            }, 
            {
                type: 'list',
                message: 'Please select a new role for this employee : ',
                choices: await GetData("role"),
                name: 'employee_role'
            }
        ]).then((response) => {
            return response;
        });
}

// call init 
init();
