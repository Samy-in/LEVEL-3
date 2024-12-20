const express = reqiure("express");
const app = express();
let errorCount = 0;
// Your tasks is :
// 1) Ensure that there is an exception, and te end user sees the status code 404
// 2) Maintain the errorCount everything an exception happens and it go's up by one value.
                              // ### REMEMBER ###
//  Todo this task we use error middleware which is always defined at the end of the all middlewares 
app.get("/User", function(req , res){
   throw new error ("User Not found")
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
app.use(function (req, res, err, next){
    res.status(400).send({})
    errorCount = errorCount + 1;
}) // BY using this expree will never send that 500 status code error msg with contain all the routes and our
//  personal data to be shown so we use error handling middlewares.

app.listen(3005);