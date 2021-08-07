const express= require('express');
const app= express();
const developRoute=require('./api/routes/developer');
const mongoose =require('mongoose');
const bodyParser= require('body-parser');

mongoose.connect('mongodb+srv://restapi:rahat@cluster0.qxods.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
mongoose.connection.on('error',err=>{
    console.log('failed');
});
mongoose.connection.on('connected',connected=>{
    console.log('connected');
});
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/developer',developRoute);

module.exports= app;