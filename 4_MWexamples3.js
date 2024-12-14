const express = require("express");
const app = express();

// Now we will two middlewares functions that checks certain conditions and them get called to 
// return tha respond from the checks.
function UserMiddlewares (req, res, next) {
    if(username != "David" || password != "Ginola"){
        res.status(403).json({
            msg: "Incorrect inputs",
        });
    } else {
        next();
    }
};

function KidneyMiddlewares (req, res, next) {
    if(KidneyId != 1 && KidneyId != 2){
        res.status(403).json({
            msg: "Incorrect inputs",
        });
    } else {
        next();
    }
};

app.get("/health-checkup", UserMiddlewares , KidneyMiddlewares ,function (res,req){
// Do something with the kidney values
    res.send(" Your Health is safe and healthy ")

});

app.get("/kidney-checkup", UserMiddlewares , KidneyMiddlewares ,function (res,req){
// Do something with the kidney values
    res.send(" Your Kidney is safe and healthy ")

});

app.get("/heart-checkup", UserMiddlewares ,function (res,req){
// Do something with the kidney values
    res.send(" Your Heart is safe and healthy ")

});
app.listen(3000);

// ++++++++++++++++++++++++++++++++++++++++++++++++ App.use() ++++++++++++++++++++++++++++++++++++++++
// app.use() = this is used for body parsering or body of a msg without this we won't be able to send
// msg as a body.
// what it does? = it allows you to use certain functions or body parameters in post request.
// Or if some middlewares are used multiple times then we put that in app.use(repeated Middleware);
// then after that all post requests will automatically have this middlewares value or checks init.

// app.use(KidneyMiddlewares);
// Now after this ths values of this middleware will be posted without mentioning in the parameters.
// this is the use of app.use() = It allows you to use something after its written without mentioning it in parameters.

// app.get("/health-checkup", UserMiddlewares ,function (res,req){
//     // Do something with the kidney values
//         res.send(" Your Health is safe and healthy ")
    
//     });
    
//     app.get("/kidney-checkup", UserMiddlewares ,function (res,req){
//     // Do something with the kidney values
//         res.send(" Your Kidney is safe and healthy ")
    
//     });

// ---------------- Why do we use "app.use(express.json());" for body parsering mostly? ----------------------------
// Because we dont know body msg could be in form of text, html, json etc so we have to specify that I'm
// taking only json as input.