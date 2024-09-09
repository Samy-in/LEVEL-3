// this is input validation examples in express

const express = require("express");
const app = express();

app.use(express.json());

app.post("/health-checkup" , function (req,res){
// here we are taking kidneyId as array [1,3,4,5]
    const kidneys = req.body.kidneys;
    const kidneylength = kidneys.length;

    res.send("You have " + kidneylength + " kidneys");
});
// now we use global catches which is used for giving a user better error message where it has four parameters
app.use((err, req, res, next) => {
    res.status(500).send('An internal server error occured')
});


app.listen(3003);