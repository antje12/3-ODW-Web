const express = require('express')
const fs = require('fs')
const app = express()
const https = require('https')

const html = fs.readFileSync('coupon-client.html');
const js = fs.readFileSync('coupon-client.js');

const winnerCodes = ["123", "secret", "abc321"];

app.get('/', (req, res) => {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(html);
})

app.get('/coupon-client.js', (req, res) => {
    res.writeHead(200, { "Content-Type": "application/javascript" });
    res.end(js);
})

app.post('/checkCouponCode', express.json(), (req, res) => {
    //use built-in JSON middle-ware
    //JSON already parsed: { "name": "my name" }
    let jsonObj = req.body

    if (winnerCodes.includes(jsonObj.couponCode)) {
        console.log("Congratulations to " + jsonObj.name + "!");
        console.log("We'll send you a diploma.");
        res.send(JSON.stringify({
            isWinner: true,
            message: "Congratulations - and thanks!"
        }));
    }
    else {
        res.send(JSON.stringify({
            isWinner: false,
            message: "Better luck next time!"
        }));
    }
})

app.listen(8080, () => console.log('Listening on http://localhost:8080/'))

let server = https.createServer({
    key: fs.readFileSync('localhost.key'),
    cert: fs.readFileSync('localhost.crt')
}, app);

server.listen(3000, () => console.log('Listening on https://localhost:3000/'))
