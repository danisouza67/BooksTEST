//the server js was was modificated to adapt to my project 
//    The original code source is: https://github.com/mikhail-cct/iwa2-test
// the env settings is set into to variables environment in both frameworks, Gitpod and Heroku

const express = require("express"),
bodyParser = require("body-parser"),
mongoose = require('mongoose'),
dotenv = require('dotenv'),
methodOverride = require('method-override');


var app = express();
var port = process.env.PORT || 8000;
dotenv.config();

app.set('view engine', 'ejs')

app.use(methodOverride('_method'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(require('./routes'));



const dbURI = process.env.DB_URL;


mongoose.connect(dbURI, {userNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true, useFindAndModify: false})
.then((result) => console.log('connected to db'))
.catch((err) => console.log(err));
//-------------



app.listen(port, (err) => {
    console.log("Listening on port: " + port);
});

