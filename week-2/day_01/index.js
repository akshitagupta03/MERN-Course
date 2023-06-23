const express = require("express");
const app = express();
const port = 3000

function sum(counter){
    var sum=0;
    for(var i=0; i<counter; i++){
        sum += i;
    }
    return sum;
}

function handleFirstRequest(req, res){
    var counter = req.query.counter;
    var calculatedSum = sum(counter);
    var ans = "the sum is " + calculatedSum;
    res.send(ans);
}

function createUser(req, res){
    res.send("Hello world");
}

app.get('/', handleFirstRequest)
app.get('/handleSum', handleFirstRequest) // route
app.post('/createUser', createUser); // post method

// callback function that logs when the http server starts
function started(){
    console.log(`Example app listening on port ${port}`)
} 
app.listen(port, started)
