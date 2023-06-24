const express = require("express");
var bodyParser = require('body-parser');
const app = express();
const port = 3000

// function middleware1(req, res, next){
//     console.log("from inside middleware " + req.headers.counter);
//     // res.send("Error from inside middleware");
//     next();
// }
// app.use(middleware1);

app.use(bodyParser.json());

function sum(counter){
    var sum=0;
    for(var i=0; i<=counter; i++){
        sum = sum + i;
    }
    return sum;
}

function calculateMul(counter){
    var ans=1;
    for(var i=1; i<=counter; i++){
        ans = ans*i;
    }
    return ans;
}

// send request through header
/* 
function handleFirstRequest(req, res){
    var counter = req.headers.counter;
    var calculatedSum = sum(counter);

    var ans = "the sum is " + calculatedSum;
    res.send(ans);
} 
*/

// send request through body
/* 
function handleFirstRequest(req, res){
    var counter = req.body.counter;
    if(counter < 100000){
        var calculatedSum = sum(counter);

        var ansObject = {
            sum: calculatedSum
        }

        var ans = "the sum is " + calculatedSum;
        res.send(ans);
    }
    else{
        res.status(411).send("You have sent very big number");
    }
} 
*/

function handleFirstRequest(req, res){
    var counter = req.body.counter;
    var calculatedSum = sum(counter);
    var calculatedMul = calculateMul(counter);

    var ansObject = {
        sum: calculatedSum,
        mul : calculatedMul
    }

    res.status(200).send(ansObject);
}

function createUser(req, res){
    res.send("Hello world");
}

function givePage(req, res){
    res.send(`
        <head>
        <title>
            Hello from page
        </title>
        </head>
        <body>
            <i>hi there</i>
        </body>
    `)
}

app.post('/handleSum', handleFirstRequest)
app.get('/', givePage);

// callback function that logs when the http server starts
function started(){
    console.log(`Example app listening on port ${port}`)
} 
app.listen(port, started)
