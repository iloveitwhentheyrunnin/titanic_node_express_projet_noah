import express from 'express';
import { Router } from 'express';
import {PostLoginController } from './controllers/login.js';
const router = Router()

// login user
router.route("/login").get(function(req,res){
    res.render("login.twig",{title:'User Login'});
})
/*.post(function(req,res){
    if(req.body.name == credential.name && req.body.password == credential.password){
        req.session.user = req.body.name;
        res.redirect('/dashboard');
    }else{
        res.end("Invalid Credentials")
        res.redirect('/login');
    }
}) */


// route for dashboard
router.get('/dashboard', (req,res) => {
    if(req.session.user){
        res.render('dashboard.twig',{user: req.session.user})
    } else {
        res.redirect('/');
    }
})

router.get("/logout",function(req,res){   
	req.session.user = null;
	req.session.error = null;
	res.redirect("/");
});

router.post('/login', PostLoginController);

export default router;