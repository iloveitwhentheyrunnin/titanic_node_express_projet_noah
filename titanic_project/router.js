import express from 'express';
import { Router } from 'express';
import {PostLoginController, LoginController } from './controllers/login.js';
import { PostResearchController, ResearchController } from './controllers/research.js';
const router = Router()
import { authGuard, setTemplateVars } from './middlewares/session.js';
import { SignController, SignUpController } from './controllers/signup.js';

router.use(setTemplateVars);

router.get('/login', LoginController);

router.get('/signup', SignController);

router.post('/signup', SignUpController);

router.post('/login', PostLoginController);

router.get('/research', authGuard, ResearchController);

// route for dashboard 

//to do dashboard controller
router.get('/dashboard', authGuard, (req,res) => {
    if(req.session.user){
        res.render('dashboard.twig',{user: req.session.user.name})
    } else {
        res.redirect('/');
    }
})


//to do logoutcontroller
router.get("/logout", authGuard,function(req,res){   
	req.session.user = null;
	req.session.error = null;
	res.redirect("/");
});

router.post('/research', authGuard, PostResearchController);


export default router;