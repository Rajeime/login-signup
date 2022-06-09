const express = require('express');
const router = express.Router();
const lib = require('../database/db');

router.get('/welcome', (req, res, next)=> {
    let email = req.session.email
    lib.query('SELECT * FROM users WHERE email = ?',[email],(error, results)=>{
        if(error) throw error

        if(results.length > 0){
        
            if (req.session.loggedin) { 
                res.render('welcome', {
                //   result: results,
                  first_name: results[0].first_name,
                  last_name: results[0].last_name,
                  email: results[0].email
                });
        
            } else {
                req.flash('success', 'Please login first!');
                res.redirect('/login');
            }

        }
    
    })



   
    
});

router.get('/logout', (req, res)=>{
    req.session.destroy();
    // req.flash('success', 'Login Again Here');
    res.redirect('/login');
  });

module.exports = router