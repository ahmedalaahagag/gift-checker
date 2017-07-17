/**
 * Created by hagag-md on 17/07/17.
 */
var express = require('express');
var bodyparser = require('body-parser');
var path = require('path');
var app = new express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));


app.use(express.static(path.join(__dirname,'../public')));

app.get('/gifts',function (req,res) {

});

app.get('/gifts/add',function (req,res) {

});

app.get('/gifts/remove',function (req,res) {

});

app.get('/users/add',function (req,res) {

});

app.listen(3000,function () {
   console.log("Listening to port 3000....");
});