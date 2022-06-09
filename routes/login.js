const express = require('express');
const router = express.Router();
const lib = require('../database/db');
const bcrypt = require('bcrypt')

router.get('/login',(req,res)=>{
    res.render('login')
})

//login post request
router.post('/login/authentication', (req,res)=>{
    var email = req.body.email;
    var password = req.body.password;
        lib.query('SELECT * FROM users WHERE email = ?', [email], async(err, rows, fields)=> {
            if(err) throw err
            const comparison =  await bcrypt.compare(password, rows[0].password)
            const name = rows[0].first_name

            if(comparison && rows.length > 0){
                req.session.loggedin = true;
                req.session.name = name;
                req.session.email = email
                res.redirect('/auth/welcome')
            }

            else{
                req.flash('error', 'Please enter correct credentials!')
                res.redirect('/login')
            }
        })

})


module.exports = router