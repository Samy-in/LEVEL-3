

const express = reqiure("express");
const app = express();
let requestCount = 0;
// You need create a counter for request to be putted on website.
// Your tasks is to create global middlewares (app.use()) which will maintain count the requests made on the server

// To create Global middleware app.use()
app.use(function(req, res ,next){
    requestCount = requestCount + 1;
    next();
})

app.get("/User", function(req , res){
    res.status(200).json({
        name: "John"
    })
});

app.post("/User", function(req, res){
    res.status(200).json({
       msg: "Created Dummy User"
    })
});

app.get("/requestCount", function(req, res){
    res.status(200).json({
        requestCount
    })
})

app.listen(3005);