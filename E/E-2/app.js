const express = require("express");
const app = express();
const db = require("./db.js");

app.use(express.json());

app.post('/', async (req, res, next) => {
    const { title, description, status, due_date } = req.body;

    try {
        const [info] = await db.query(
            "INSERT INTO tasks (title, description, status, due_date) VALUES (?,?,?,?)",
            [title, description, status, due_date]
        );

        return res.status(200).json({ message: "Task added successfully" });
    } catch (err) {
        next(err);
    }
});

app.get('/',async(req,res,next)=>{
    try{
    const [rows]=await db.query("SELECT * FROM tasks;")
    res.status(200).json({rows})
}catch(err){
        next(err)
    }
})

// Global error handler
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: 'Something went wrong' });
});

app.listen(3000, () => {
    console.log("App is running on port 3000");
});
