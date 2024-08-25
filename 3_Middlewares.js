// We are learning autheriazation in very small manner where we creating a server 
// which will take only two kidneys as inputs which belongs to certain users
// So to match who has 1 kidney or 2 we need to autherize it by its username and password 
// if it matches then well and good if it doesn't then it shows some msg.

const express = require("express");
const app = express();

app.get("/health-checkup" , (req,res) => {
    const username = req.headers.username;
    const Password = req.headers.Password;
    const kidneyId = req.headers.kidneyId;
    // if( username == "David" && Password == "Ginola"){
    //     if(kidneyId == 1 || kidneyId == 2) {

    //         res.json({
    //             msg: "Your kidney check is negative"
    //         })
    //     } else{
    //         res.json({
    //             msg: "Input is not valid"
    //         })
    //     }// this whole condition is for true value but for error case is below.

    if( username != "David" || Password != "Ginola"){
        res.status(400).json({msg : "Something is wrong with the input"})
        return;                           // +++++++++++++++ this is User validation check up
    }
    if(kidneyId != 1 || kidneyId != 2){
        res.status(400).json({msg : "Something is wrong with the input"})
        return;                             // +++++++++++++ this is Kidney validation checkups
    }
    res.json({
                    msg: "Your kidney check is negative"
                })
})     

// Middlewares are used when there is too many precheck ups on users and any routes.
// So we make functions of that prechecks somewhere in the global environment.


app.listen(3000);
