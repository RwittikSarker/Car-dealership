const mysql = require('mysql');
const config = require('../../config');

const db = mysql.createConnection(config.db);

// Function to handle the connection as a Promise
function initializeDB() {
    return new Promise((resolve, reject) => {
        db.connect(err => {
            if (err) {
                console.error('Error connecting to MySQL:', err);
                reject(err);
            } else {
                console.log('MySQL connected...');
                resolve();
            }
        });
    });
}

// async function that uses the connectDB function
async function connectDB() {
    try {
        await initializeDB();
        console.log('Database connection successfully established');
    } catch (err) {
        console.error('Failed to connect to the database:', err);
        process.exit(1);
    }
}

// Function to execute SQL query
function query(sql, params) {
    return new Promise((resolve, reject) => {
        db.query(sql, params, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
}

module.exports = { connectDB, query };