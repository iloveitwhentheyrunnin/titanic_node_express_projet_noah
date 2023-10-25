const express = require('express');
const path = require('path');
const bodyparser = require("body-parser");
const session = require('express-session');
const { v4: uuidv4 } = require("uuid");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const flash = require("express-flash");
const MongoStore = require("connect-mongo");
const router = require("./router")

// ==========
// App initialization
// ==========

dotenv.config();
const {
  APP_HOSTNAME,
  APP_PORT,
  NODE_ENV,
  MONGO_STRING,
  MONGO_DB_NAME
} = process.env;

const app = express();

app.set('view engine','twig');
app.locals.pretty = NODE_ENV !== 'production';

app.use(session({
    //unique session id with uuid
    secret: uuidv4(),
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: `${MONGO_STRING}${MONGO_DB_NAME}` })
}))

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))

app.use(flash());

// ==========
// App middlewares
// ==========

//load assets
app.use('/static',express.static(path.join(__dirname,"public")))
app.use('/assets',express.static(path.join(__dirname,"public/assets")))


// ==========
// App routers
// ==========

app.use('/', router); 


//home route
app.get('/',(req,res) =>{
    res.render('index.twig',{title: "The Titanic Tool"});
})

try {
    mongoose.connect(`${MONGO_STRING}${MONGO_DB_NAME}`)
    console.log('✅ Connecté à la base MongoDB');

    // ==========
    // App start
    // ==========

    app.listen(APP_PORT, () => {
        console.log(`App listening at http://${APP_HOSTNAME}:${APP_PORT}`);
    });
  }
  catch (err) {
    console.error('Erreur de connexion', err.message)
}


  