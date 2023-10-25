import dotenv from 'dotenv';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import router from './router.js';
import mongoose from 'mongoose';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import flash from "express-flash";
import bodyparser from 'body-parser';
import {v4 as uuidv4} from 'uuid';

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
const __dirname = path.dirname(fileURLToPath(import.meta.url));

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
    await mongoose.connect(`${MONGO_STRING}${MONGO_DB_NAME}`)
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


  