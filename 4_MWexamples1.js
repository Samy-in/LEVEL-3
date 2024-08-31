// Objective is to count number of requests on this routes.

const express = require("express");
const app = express();

let numberOfrequest = 0;
// then we write the middleware functions in which the logic is given
function CalculateRequests(req , res , next) {
    numberOfrequest++;
    console.log(numberOfrequest);
    next();
}
// And we know to give post requires app.use(here we write our middleware function) or
// then app.use(express.json{}) this itself calls the function both are same.

app.use(CalculateRequests);

app.post("/health-checkup" , function (req,res){
    res.json({ msg: "Hello there ITS PREMIRE LEAGUEEEE"})
})
app.get("/health-checkup" , function(req,res){
    res.json({msg: "you got the output"})
})

app.listen(3002)

// Q1) find the average it took to handle a request?
