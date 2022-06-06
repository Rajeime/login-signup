const mysql = require('mysql'); 
const express = require('express'); 
const bodyparser = require('body-parser'); 
const ejs = require('ejs');
const path = require('path');
const router = express.Router();
const app = express();
const port = process.env.PORT || 8080;
const publicDirectory = path.join(__dirname, '/public');
const session = require('express-session');
const flash = require('express-flash');
const dotenv = require('dotenv');
const expressValidator = require('express-validator')

// variables for routes
signUpPage = require('./routes/signUp');
loginPage = require('./routes/login');
welcomePage = require('./routes/welcome')

//setting body parser to recieve post request   
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//set up errors for sign up form validation
// app.use(expressValidator());

// setup session
app.use(session({
    secret: process.env.SECRET_KEY || 'roadmap',
    saveUninitialized:false,
    resave: false,
    cookie:{
        maxAge: 120000
    }
}));

//use flash messages
app.use(flash());

//set static files that are accessabble in public folder
app.use( express.static(publicDirectory));

//setting view engines for routes
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

//middleware to use routes  
app.use('/', signUpPage);
app.use('/', loginPage);
app.use('/auth', welcomePage);
    
//Specify the Port to listen on
app.listen(port, () => console.log(`Listening on port ${port}..`));
