// import connection
const connection = require('../connection.js');

// async func to get data based on which table 
async function GetData(table) {
    try { // try connection 
        const db = await connection();
        let sql = "";
        let response = {};

        // switch case for diff tables 
        switch (table) {
            case 'department':

                // sql code 
                sql = "SELECT * FROM department"

                // select everything from departments table 
                db.query(sql, (err, results) => {
                    if (err) {
                        console.log(err);
                    }
                    console.log(results);
                })

                // make repsonse obj
                response = {
                    status: "Successfully listed departments"
                }

                // break
                break;

            case 'role':

                // sql code 
                sql = "SELECT * FROM role"

                // select everything from departments table 
                db.query(sql, (err, results) => {
                    if (err) {
                        console.log(err);
                    }
                    console.log(results);
                })

                // make repsonse obj
                response = {
                    status: "Successfully listed roles"
                }

                // break 
                break;

            case 'employee':

                // sql code 
                sql = "SELECT * FROM employee"

                // select everything from departments table 
                db.query(sql, (err, results) => {
                    if (err) {
                        console.log(err);
                    }
                    console.log(results);
                })

                // make repsonse obj
                response = {
                    status: "Successfully listed employees"
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
module.exports = GetData;