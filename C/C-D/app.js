const express= require('express')
const app=express()
const axios=require("axios")


app.get('/',async(req,res)=>{
    const data =await axios.get(" https://api.thecatapi.com/v1/images/search")
    console.log(data.data[0].url)
})


app.listen(3000,()=>{
    console.log("the server is up and running at port 3000")
})