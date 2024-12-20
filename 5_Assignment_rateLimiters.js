const express = reqiure("express");
const app = express();
let rateLimiter = 0;
// We have to rate limit the user to only 5 requests per user. If users has more than 5 then server will block them witth 404
// User will be sending the their id's in the headers as "User-id"
// For tracking users Noofrequest we have given Noofrequestforuser function which clears every value to zero
let Noofrequestforuser = {}
setInterval (()=> {
    Noofrequestforuser = {}  // this object is empty initially
})

app.use(function (req, res, next){
    const userId = req.header["User-id"]
    if(Noofrequestforuser[userId]){
        Noofrequestforuser = Noofrequestforuser + 1;
    }
        if(Noofrequestforuser[userId] > 5){
        res.status(404).send("Not allowed to request further")
        } else{
        next();
    }
    next();
    
})