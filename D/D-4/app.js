const express=require("express")
const app=express()
const  connect=require('./db.js')


app.get('/',async(req,res,next)=>{
    try{
        const db=await connect();
        await db.run("")

        db.run
    }catch(err){
        next(err)
    }
}
)

app.use((err,req,res,next)=>{
    res.status(err.status).json({message:err.message})
})






app.listen(2000,()=>{
    console.log("server is up and running and port 3000")
})