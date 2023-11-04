// import connection
const connection = require('../connection.js');

// async func to get data based on which table 
async function addData(table, data) {
    try { // try connection 
        const db = await connection();
        let sql = "";
        let response = {};

        // switch case for diff tables 
        switch (table) {
            // add department
            case 'department':

                // sql code 
                sql = "INSERT INTO department(name) VALUES (?)"
                let { department_name } = data;
                //console.log(department_name)
                // inserting data to table  
                db.query(sql, [department_name], (err, results) => {
                    if (err) {
                        console.log(err);
                    }
                    //console.log(results);
                })

                // make repsonse obj
                response = {
                    status: "Successfully added department"
                }

                // break
                break;
            // add role
            case 'role':

                // sql code 
                sql = "INSERT INTO role(title, salary, department_id) VALUES (?, ?, ?)"

                // destruc data 
                const { title, salary, department_id } = data;

                // inserting data to table  
                db.query(sql, [title, salary, department_id], (err, results) => {
                    if (err) {
                        console.log(err);
                    }
                    //console.log(results);
                })

                // make repsonse obj
                response = {
                    status: "Successfully added role"
                }

                // break
                break;
            // add employee
            case 'employee':

                // sql code 
                sql = "INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)"

                // destruc data 
                const { first_name, last_name, role_id, manager_id } = data;

                // inserting data to table  
                db.query(sql, [first_name, last_name, role_id, manager_id], (err, results) => {
                    if (err) {
                        console.log(err);
                    }
                    //console.log(results);
                })

                // make repsonse obj
                response = {
                    status: "Successfully added employee"
                }

                // break
                break;
        }
        return response;
    } catch (err) { // catch errors 
        console.error(err);
        throw err;
    }
}

// export module 
module.exports = addData;