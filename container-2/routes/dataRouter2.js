const express = require('express');

const dataRouter2 = express.Router();

dataRouter2.route('/')
.get(function(req,res,next){
    res.status(200);
    res.json({body: 'data from route 2'})
})
.post(function(req,res,next){
    var err = new Error('This is unavailable')
    res.status(400);
    next(err);
})
.put(function(req,res,next){
    var err = new Error('This is unavailable')
    res.status(400);
    next(err);
})
.delete(function(req,res,next){
    var err = new Error('This is unavailable')
    res.status(400);
    next(err);
});

module.exports = dataRouter2;