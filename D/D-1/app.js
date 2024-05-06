const express = require('express');
const app = express();
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

const dbpath = path.join(__dirname, 'sqlite.db');
const db = new sqlite3.Database(dbpath, function(err) {
    if (err) {
        console.error("Error opening SQLite database:", err);
    } else {
        console.log("Connected to SQLite database");
        db.run('CREATE TABLE IF NOT EXISTS todo (id INTEGER PRIMARY KEY AUTOINCREMENT, activity TEXT)', function(err) {
            if (err) {
                console.error("Error creating table:", err);
            } else {
                console.log("Table created successfully");
            }
        });
    }
});

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/submit', function(req, res) {
    const acti = req.body.acti;
    db.run('INSERT INTO todo (activity) VALUES (?)', [acti], function(err) {
        if (err) {
            console.error('Error while insertion of data:', err);
            res.status(500).send('Error while inserting data');
        } else {
            console.log("Successfully inserted into table");
            res.sendFile(path.join(__dirname, 'see.html'));;
        }
    });
});

app.get('/see', function(req, res) {
    db.all('SELECT * FROM todo', function(err, rows) {
        if (err) {
            console.error('Error retrieving data:', err);
            res.status(500).send('Error retrieving data');
        } else {
            // Construct HTML content
            let htmlContent = '<h1>To-Do List</h1>';
            rows.forEach(row => {
                htmlContent += `<h1>${row.activity}</h1>`;
            });
            // Send HTML response
            res.send(htmlContent);
        }
    });
});


app.listen(3000, function() {
    console.log("The server is running on port 3000");
});
