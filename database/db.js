const dotenv = require('dotenv');
const path = require('path');
dotenv.config({path: './.env'})
const mysql = require('mysql');

var conn = mysql.createConnection({
    host: process.env.DATABASE_HOST,   
    user: process.env.DATABASE_USER,    
    password: process.env.DATABASE_PASSWORD,    
    database: process.env.DATABASE_DATABASE, 
  });

  conn.connect((err)=> {
    if(!err)
        console.log('Connected to database Successfully');
    else
        console.log('Connection Failed!'+ JSON.stringify(err,undefined,2));
    });
    
module.exports = conn; 