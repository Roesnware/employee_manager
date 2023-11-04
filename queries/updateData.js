// import connection
const connection = require('../connection.js');

// async func to update data
async function update(data) {
    try { // try connection 
        const db = await connection();
        let sql = "UPDATE employees SET role_id = ? WHERE employee_id = ?";
        let response = {}

        // destruc data
        let {employee, employee_role} = data;

        // split data to get what we need 
        let employee_id = employee.split(":")[0].trim();
        let employee_role_id = employee_role.split(":")[0].trim();

        // query to employee
        db.query(sql, [employee_role_id, employee_id], (err, results) => {
            if (err) {
                console.log(err);
            }
            console.log(results);
        })

        // make repsonse obj
        response = {
            status: "Successfully updated employee"
        }
        return response;
    }
    catch (err) { // catch errors 
        console.error(err);
        throw err;
    }
}

//export module
module.exports = update;