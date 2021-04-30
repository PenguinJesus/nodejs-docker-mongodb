'use strict';

const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');

//constants
const PORT = 8080;
const HOST = '0.0.0.0';


//routes
const dataRouter = require('./routes/dataRouter');

app.use(cors());

app.use('/data', dataRouter);


app.get('/*', function(req,res){
  res.send('Hello world 1');
});


// error handler
app.use(function(err, req, res, next) {
  res.send(err.message);
});



app.listen(PORT,HOST);
console.log(`Running on http://${HOST}:${PORT}`)