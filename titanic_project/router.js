import express from 'express';
import { Router } from 'express';
import {PostLoginController, LoginController } from './controllers/login.js';
import { PostResearchController, ResearchController } from './controllers/research.js';
const router = Router()


router.get('/login', LoginController);

router.get('/research', ResearchController);

// route for dashboard
router.get('/dashboard', (req,res) => {
    if(req.session.user){
        res.render('dashboard.twig',{user: req.session.user.name})
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
router.post('/research', PostResearchController);

export default router;