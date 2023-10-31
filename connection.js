// require packages 
const mysql = require('mysql2');
require('dotenv').config();

// connect to database funct
async function connect() {
    // try connecting 
    try {
        // connect to db
        const db = await mysql.createConnection(
            {
                host: 'localhost',
                user: process.env.DB_USER,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_NAME
            });
            // log success
            console.log(`Connected to the employee_db database.`);
        // return connection 
        return db;
    } catch (err) { // catch err from try connection 
        console.error(err);
        throw err;
    }
}

// export module 
module.exports = connect;