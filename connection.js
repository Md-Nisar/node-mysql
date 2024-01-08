const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'school'
});

connection.connect((error) => {
    if (error) {
        console.error('Error connecting to MySQL database: ', error);
    }
    console.log('Connected to MySQL database successfully!');
})

module.exports = connection;

