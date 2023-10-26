import express from 'express';
import { Router } from 'express';
import {PostLoginController, LoginController } from './controllers/login.js';
const router = Router()


router.get('/login', LoginController);
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