const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

//mysql connection configuration
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '240623',
    database: 'mysql',
    port: '3306'
});

//connect to mysql database
connection.connect(function(err) {
    if (err) {
        console.error("error in connecting to mysql:", err);
    } else {
        console.log("connection is successful");
    }
});

//routing
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.post('/submit', function(req, res) {
    const { title, Description, ingredients, instructions } = req.body;

    //insertion
    const insertQuery = "INSERT INTO users (fooddisc, ingri, inst) VALUES (?, ?, ?)";
    connection.query(insertQuery, [title, Description, ingredients, instructions], function(err) {
        if (err) {
            console.error('error inserting:', err);
            res.status(500).send('internal server error');
            return;
        }
        console.log('data inserted');
        res.send('form submitted successfully');
    });
});

//start server
app.listen(3000, function() {
    console.log('server running successfully');
});
