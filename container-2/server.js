'use strict';

const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');

//constants
const PORT = 8080;
const HOST = '0.0.0.0';


//routes
const dataRouter2 = require('./routes/dataRouter2');


app.use(cors());

app.use('/data2', dataRouter2);


app.get('/*', function(req,res){
  res.send('Hello world 2');
});


// error handler
app.use(function(err, req, res, next) {
  res.send(err.message);
});



app.listen(PORT,HOST);
console.log(`Running on http://${HOST}:${PORT}`)