const express=require('express');
const app=express();
const axios=require("axios");


app.use(express.json());
app.post('/',async (req,res)=>{
    const {currancy,value,to}=req.body
    const newcur=await axios.get("https://v6.exchangerate-api.com/v6/apiid/latest/"+currancy)
    const rate = newcur.data.conversion_rates[to]

    const tovalue=rate*value
    res.json({currency:"the value is "+tovalue})
  
})

app.listen(3000,(req,res)=>{
console.log("app is up and running in port 3000")})
