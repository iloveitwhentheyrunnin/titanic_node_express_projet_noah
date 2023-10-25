const express = require('express');
const path = require('path');
const bodyparser = require("body-parser");
const session = require('express-session');
const { v4: uuidv4 } = require("uuid");

const router = require("./router")

const app = express();

const port = process.env.PORT||3000;

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))

app.set('view engine','twig');

//load assets
app.use('/static',express.static(path.join(__dirname,"public")))
app.use('/assets',express.static(path.join(__dirname,"public/assets")))

app.use(session({
    //unique session id with uuid
    secret: uuidv4(),
    resave: false,
    saveUninitialized: true
}))

app.use('/', router); 


//home route
app.get('/',(req,res) =>{
    res.render('index.twig',{title: "The Titanic Tool"});
})

app.listen(port,()=>{console.log("Listening to the server on http://localhost:3000")})