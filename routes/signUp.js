const express = require('express')
const router = express.Router();
const db = require('../database/db');
const byrcypt = require('bcrypt');

router.get('/',(req,res)=>{
    res.render('signUp',{message:''})
})


//signup post request
router.post('/signUp' ,(req,res)=>{
    let {firstName , lastName , email , password , confirmPassword} = req.body;
    db.query('SELECT email FROM users WHERE email = ?',[email], async (error, results)=>{
        if(error){
            console.log('error')
        }

        //if email already exist
        if(results.length > 0){
            req.flash('emailError', 'Email already exist!')
            return res.render('signUp' )
                // message:'That email is already in use'
        }

        //if passwords do not match
        else if(password != confirmPassword){
            req.flash('notMatch', 'Passwords do not match')
            return res.render('signUp')
                // message:'Passwords do not match'
        }
        let hashedPassword = await byrcypt.hash(password, 8)

        db.query('INSERT INTO users SET ?',{first_name: firstName, last_name: lastName, email: email, password: hashedPassword},(error,result)=>{
            if(error){
                console.log('error')
            }

            else{req.flash('success', 'successfully registered!!')
                 return res.render('signUp') 
            }
        })
    })
    
})

    
    
module.exports = router