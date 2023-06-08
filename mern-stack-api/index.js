require('./db')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

var postMessageRoutes = require('./controllers/postMessageController')


var app = express()
app.use(bodyParser.json())
app.use(cors({origin:'http://frontend:3000'}))
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.listen(4000,()=>console.log('Server started at : 4000'))


app.use('/postMessages',postMessageRoutes)
