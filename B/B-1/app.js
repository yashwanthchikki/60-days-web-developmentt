const express=require('express');
const superhero = require('superhero-name-library')
const path = require('path');
const app=express();
app.get('/',function(req,res){
    
    res.sendFile(path.join(__dirname,'index.html'));
})
app.post('/',function(req,res){
    const rand=superhero.random()
    res.send(rand)
})


app.listen(3000,function(){
    console.log("the server is running in port 3000")
})