const express=require("express")
const app =express()
const axios=require("axios")
app.use(express.urlencoded({extended:true}));


app.post('/',(req,res)=>{
    const link=req.body
    const data=axios.get("http://api.qrserver.com/v1/create-qr-code/?data="+link+"&size=100x100")
    console.log(data)
})
 app.listen(3000,()=>{console.log("app is up and runiing")})