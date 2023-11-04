// import connection
const connection = require('../connection.js');

// async func to get data based on which table 
async function addData(table, data) {
    try { // try connection 
        const db = await connection();
        let sql = "";
        let response = {};

        // switch case for diff tables 
        switch (table, data) {
            case 'department':

                // sql code 
                sql = "INSERT INTO department(name) VALUES (?);"

                // inserting data to table  
                db.query(sql, data, (err, results) => {
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

            case 'role':

                // sql code 
                sql = "INSERT INTO role(title, salary, department_id) VALUES (?, ?, ?);"

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

            case 'employee':

                // sql code 
                sql = "INSERT INTO employee(id, first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?, ?);"

                // destruc data 
                const { id, first_name, last_name, role_id, manager_id } = data;

                // inserting data to table  
                db.query(sql, [id, first_name, last_name, role_id, manager_id], (err, results) => {
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