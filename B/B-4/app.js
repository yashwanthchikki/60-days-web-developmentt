const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the public directory
app.use(express.static('public'));

// Endpoint to check if a number is prime
app.get('/isprime/:number', (req, res) => {
    const number = parseInt(req.params.number);
    if (isNaN(number) || number <= 1) {
        return res.json({ number, isPrime: false });
    }

    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }

    res.json({ number, isPrime });
});

// Serve the index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'index.html'));
});

// Start the server
app.listen(3000, function() {
    console.log(`Prime Number Checker app listening at http://localhost:3000`);
});
