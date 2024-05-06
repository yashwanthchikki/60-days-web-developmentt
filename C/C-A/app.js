const express = require('express');
const bodyParser = require('body-parser');
const https = require('https');
const path = require('path'); 

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname,'index.html'));
});

app.post('/submit', function(req, res) {
    const cityname = req.body.cname;
    const apikey = "4680c8a0f0584eef4ebab972a00a6c1d";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apikey}`;

    https.get(url, function(response) {
        let data = '';
        response.on('data', function(chunk) {
            data += chunk;
        });
        response.on('end', function() {
            const weatherdata = JSON.parse(data);
            const temp = weatherdata.main.temp-273.5;
            res.write(`<h1>The temperature in ${cityname} is ${temp}</h1>`);
            res.send();
        });
    });
});

app.listen(3000, function() {
    console.log("The server is running on port 3000");
});
