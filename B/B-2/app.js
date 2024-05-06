const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/generate-question', (req, res) => {
    const num1 = Math.floor(Math.random() * 10) + 1; // Random number between 1 and 10
    const num2 = Math.floor(Math.random() * 10) + 1; // Random number between 1 and 10
    const operator = ['+', '-', '*', '/'][Math.floor(Math.random() * 4)]; // Random operator
    let question;
    let answer;

    switch (operator) {
        case '+':
            question = `${num1} + ${num2}`;
            answer = num1 + num2;
            break;
        case '-':
            question = `${num1} - ${num2}`;
            answer = num1 - num2;
            break;
        case '*':
            question = `${num1} * ${num2}`;
            answer = num1 * num2;
            break;
        case '/':
            question = `${num1 * num2} / ${num2}`;
            answer = num1;
            break;
        default:
            break;
    }

    res.json({ question, answer });
});

app.listen(port, () => {
    console.log(`Math Quiz Generator app listening at http://localhost:${port}`);
});
