const connection = require('./connection');

const sql = 'SELECT * FROM Students';
connection.query(sql, (error, result) => {
    if (error) {
        console.error('Error executing query: ', error);
    } else {
        console.table(result);
    }
});