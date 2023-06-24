function logResponseBody(jsonBody){
    console.log(jsonBody);
}

function callbackFn(result){
    // console.log(result.status);
    result.json().then(logResponseBody); // asynchronous function that returns a promise
}

var sendObj = {
    method: "GET"
};


// first argument is url, second is an object
// and it returns a promise
fetch("http://localhost:3000/handleSum?counter=10", sendObj).then(callbackFn)
