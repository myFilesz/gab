const mysql = require('mysql');

const banco = 'progressao' 

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    port : 3306,
    database: banco,
    multipleStatements: true
});

db.connect( (erro) => {
    if(erro){
        throw erro;
    }
    console.log(`Connected to database [${banco}]`);
});

global.db = db;

module.exports = db;


