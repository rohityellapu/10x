const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here


app.get('/', (req, res) => {
    res.send('Hello World!')
})

function isValidInput(n1, n2) {
    return typeof (n1) == 'number' && typeof (n2) == 'number';
}

function UnderFlowMessage(res) {
    res.writeHead(400, { 'content-type': "application/json" });
    res.end(JSON.stringify({
        "status": "error",
        "message": "UnderFlow"
    }))

}
function OverFlowMessage(res) {
    res.writeHead(400, { 'content-type': "application/json" });
    res.end(JSON.stringify({
        "status": "error",
        "message": "OverFlow"
    }))
}
function InvalidMessage(res) {
    res.writeHead(400, { 'content-type': "application/json" });
    res.end(JSON.stringify({
        "status": "error",
        "message": "Invalid data types"
    }))
}

app.post('/add', (req, res) => {
    let { num1, num2 } = req.body;


    if (isValidInput(num1, num2)) {

        let sum = num1 + num2;
        if (sum <= -1000000 || num1 <= -1000000 || num2 <= -1000000) {
            UnderFlowMessage(res);
        }
        else if (sum >= 1000000 || num1 >= 1000000 || num2 >= 1000000) {
            OverFlowMessage(res);
        }
        else {

            res.writeHead(200, { 'content-type': "application/json" });
            res.end(JSON.stringify({
                "status": "success",
                "message": "the sum of given two numbers",
                "sum": sum
            }))
        }
    }
    else {
        InvalidMessage(res);
    }

})

app.post('/sub', (req, res) => {
    let { num1, num2 } = req.body;

    if (isValidInput(num1, num2)) {

        let diff = num1 - num2;
        if (diff <= -1000000 || num1 <= -1000000 || num2 <= -1000000) {
            UnderFlowMessage(res)
        }
        else if (diff >= 1000000 || num1 >= 1000000 || num2 >= 1000000) {
            OverFlowMessage(res)
        }
        else {

            res.writeHead(200, { 'content-type': "application/json" });
            res.end(JSON.stringify({
                "status": "success",
                "message": "the difference of given two numbers",
                "difference": diff
            }))
        }
    }
    else {
        InvalidMessage(res)
    }

})

app.post('/multiply', (req, res) => {
    let { num1, num2 } = req.body;


    if (isValidInput(num1, num2)) {

        let product = num1 * num2;
        if (product <= -1000000 || num1 <= -1000000 || num2 <= -1000000) {
            UnderFlowMessage(res);
        }
        else if (product >= 1000000 || num1 >= 1000000 || num2 >= 1000000) {
            OverFlowMessage(res);
        }
        else {

            res.writeHead(200, { 'content-type': "application/json" });
            res.end(JSON.stringify({
                "status": "success",
                "message": "the product of given two numbers",
                "result": product
            }))
        }
    }
    else {
        InvalidMessage(res);
    }

})

app.post('/divide', (req, res) => {
    let { num1, num2 } = req.body;


    if (isValidInput(num1, num2)) {
        if (num2 == 0) {
            res.writeHead(400, { 'content-type': "application/json" });
            res.end(JSON.stringify({
                "status": "error",
                "message": "Cannot divide by zero"
            }))
        }
        let div = num1 / num2;
        if (div <= -1000000 || num1 <= -1000000 || num2 <= -1000000) {
            UnderFlowMessage(res);
        }
        else if (div >= 1000000 || num1 >= 1000000 || num2 >= 1000000) {
            OverFlowMessage(res);
        }
        else {

            res.writeHead(200, { 'content-type': "application/json" });
            res.end(JSON.stringify({
                "status": "success",
                "message": "the division of given two numbers",
                "result": div
            }))
        }
    }
    else {
        InvalidMessage(res);
    }

})

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;