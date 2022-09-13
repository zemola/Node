const express = require('express');
const Router = express.Router();
const path = require("path");

const rootDir = require('../util/path')


Router.get('/add-product',(req, res, next)=>{
    res.sendFile(path.join(rootDir,"views","add-product.html"))
})

Router.post('/add-product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
})


module.exports = Router