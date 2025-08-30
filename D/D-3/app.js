const express = require("express");
const app = express();
const connect = require("./db");

app.use(express.json());

app.post('/', async (req, res, next) => {
    const { title, content, author } = req.body;
    let db;

    // Connect to DB
    try {
        db = await connect();
    } catch (err) {
        return next(new Error("Database connection error: " + err.message));
    }

    // Run the query
    try {
        await db.run(
            "INSERT INTO BlogPosts (title, content, author) VALUES (?,?,?)",
            [title, content, author]
        );
        return res.status(201).json({ message: "Created successfully" });
    } catch (err) {
        return next(new Error("Error inserting post: " + err.message));
    }
});
app.get('/',async(req,res,next)=>{
    let db
    try{
        db=await connect()
        const result=await db.all("SELECT * FROM  BlogPosts")
        return res.json(result)


    }catch(err){
        next(err)
    }
})

// Error middleware
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
