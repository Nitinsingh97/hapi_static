var express =require('express');
var app=express();
var path =require('path');
var route= require("./api/routes/index.js");

app.use('/api',route);


app.listen(4000);