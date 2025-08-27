const express=require("express")
const app=express()
const axios=require("axios")

app.use(express.json())
app.get('/:id',async(req,res)=>{
    const country=req.params.id
    try{
        const news=await axios.get("https://newsapi.org/v2/top-headlines?country="+country+"&apiKey=////////////")
    res.send(news.data.articles[0].description)
    }catch (err){
    res.json({message:"server error"})}
 })


app.listen(3000,()=>{
    console.log("server is running in port 3000")
})