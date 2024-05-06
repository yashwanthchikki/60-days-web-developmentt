const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,  'index.html'));
});

app.get('/fibonacci/:terms', (req, res) => {
    const terms = parseInt(req.params.terms);
    if (isNaN(terms) || terms <= 0) {
        return res.status(400).json({ error: 'Invalid number of terms' });
    }

    const fibonacciSequence = generateFibonacci(terms);
    res.json({ sequence: fibonacciSequence });
});

function generateFibonacci(terms) {
    const sequence = [];
    let prev = 0;
    let curr = 1;

    for (let i = 0; i < terms; i++) {
        sequence.push(prev);
        const next = prev + curr;
        prev = curr;
        curr = next;
    }

    return sequence;
}

app.listen(port, () => {
    console.log(`Fibonacci Sequence Generator app listening at http://localhost:${port}`);
});
