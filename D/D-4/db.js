const sqlite3=require("sqlite3")
const {open}=require("sqlite")

let db;

async function conect(){
    try{
        if(!db){
            db=await open({
                filename:"./db.db",
                driver:sqlite3.Database
            })

            db.exec("")



        }return db
    }catch(err){
        throw new Error("this is connection errror")
    }
}
module.exports=connect 