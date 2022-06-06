const express = require('express');
const router = express.Router();
// const lib = require('../database/db');

router.get('/welcome', (req, res, next)=> {
    if (req.session.loggedin) { 
        res.render('welcome', {
            title:"Dashboard",
            name: req.session.name,   
        });

    } else {
        req.flash('success', 'Please login first!');
        res.redirect('/login');
    }
});

router.get('/logout', (req, res)=>{
    req.session.destroy();
    // req.flash('success', 'Login Again Here');
    res.redirect('/login');
  });

module.exports = router