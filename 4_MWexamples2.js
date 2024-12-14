// this is input validation examples in express

// Why do we need input validation becoz if ann user get your websites with any inputs then it not show some functional
// errors in which the name of librarys are showing soinstead of that use show them an error msg.
const express = require("express");
const app = express();

app.use(express.json());

app.post("/health-checkup" , function (req,res){
// here we are taking kidneyId as array [1,3,4,5]
    const kidneys = req.body.kidneys;
    const kidneylength = kidneys.length;

    res.send("You have " + kidneylength + " kidneys");
});
// Here, this will tell us how many no.of.kidneys are there but if user instead of writting no.of.array it has
// given a gibbreish or characters or any other than inputs then we use global catches for errors. 

// ##### Global catch is another type of middleware which takes 4 parameters/inputs which is written 
// After All the routings are mentioned.######

// now we use global catches which is used for giving a user better error message where it has four parameters
app.use((err, req, res, next) => {
    res.status(500).send('An internal server error occured')
});

app.listen(3003);

