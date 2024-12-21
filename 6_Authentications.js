// Authentication has some cryptography jargons so let understand these jargons
// JWT process is just like opening a new account in bank.
// Hashing 
// Encryption
// Json web tokens (JWT) = its take json as input and gets converted in output which is a token and anyone with this token
// can see the input but only be verified by entering the password.
// Local storage

// Hashing = When user login with name and password then that password get's converted into some hash i.e. (aygef893hfwbix) this
// this gibberish form and get stored in the database for safety purpose but when user logout and then login again with
// some password then his password will get converted into hash and this hash is compared to the previous hash and if matches
// it allows user inside the website.

// Properties are 1.) hashing is one way i.e. you can convert any text into hash but can't reverse the hash into the text again.
//  2.) Change the input a little bit, changes the output alot.

// Encryption = same as hashing but when a user gives username and passwrd it gets stored in database with a random key during
// encryption time and then we can decrypt that passwrd with that same key.

// Properties are 1.) its two ways i.e. you can encrypt a data with some key and then decrypt data with same key
// generated during encryption time.

// JWT = it only takes json as input and converts it into a long string (which is called tokens) and get stored.
// but if you get that string you can verify what's inside it easily with the help of a certain password.
// verification and getting access to password is complete different REMEMBER THIS *******************

// There is "jwt.incode()" in which input goes and gets converted into tokens which can be accessed by anyone but cant
// be verified To verify that the password that i have by the token goes to "jwt.verify()" wich return true or false.

// Porperties are 1) Niether hashing nor encryption it's more like Signature , Anyone can see it but only bank can verify
// it with some password.

// Local storage = it uses JWT, like User login with name and password then gets converted into token which is stored in
// the local storage of the browser permenantely until you logout .And then whenever user visit that same website then 
// that token gets verified by that website to allow this user to access the features.

// -------------------------------------- Assignment -------------------------------------------------------------------
// The task is to create a website with 2 endpoints for user authentication:

// POST / signin: Accepts a JSON body with username and password as strings, and returns a JSON web token(JWT) with 
// the username encrypted if valid.
 // GET / users: Requires an Authorization header with the correct token.If the token is valid, 
 // it returns an array of all users; otherwise, it responds with a 403 status code(forbidden).

const express = require("express");
const jwt = require("jsonwedtoken");
const jwtPassword = "1123456";

const app = express();
app.use(express.json());
const All_Users = [
    {
        Username: "AlfansoDavid@gmail.com",
        Password: "123",
        Name: "Alfanso David"
    },
    {
        Username: "RobertoCarlos@gmail.com",
        Password: "123443",
        Name: "Roberto Carlos"
    },
    {
        Username: "PeterCrouch@gmail.com",
        Password: "3452",
        Name: "Peter Crouch"
    },
];

function UserExists(username, password) {
    // Write logic to return true or false if user exist in the array.
    let UserExists = false;
    for(let i = 0; i < All_Users.length; i++){
        if(All_Users[i].username == username && All_Users[i].password == password){
            username = true;
        }
    }
    return UserExists;
}

app.post("/sign-in", function(req , res){
    const username = req.body.username;
    const password = req.body.password;

    if(!UserExists(username , password)){
        return res.status(403).json({
            msg: "User doesn't exist in our db"
        });
    }
    var token = jwt.sign({username : "username"}, jwtPassword);
    return res.json({
        token,
    });
    // on above there is a token made which takes json as input with some password which is practically wrong becoz original
    // password is jwtPassword , so it takes input as json and converts into a long string and return it to the user.
});

app.get("/users", function (req, res) {
    const token = req.headers.authorization;

    try {
        const decoded = jwt.verify(token, jwtPassword);
        const username = decoded.username;
        // return a list of users other than this username
    } catch (err) {
        return res.status(403).json({
            msg: "Invalid token",
        });
    }
    // Now if you run this on postman it will give you a token which has long string then its functioning right.
    // If you take this token and use GET request for function user which is written above and go to headers in postman and make 
    // An autheraization header in which we paste that token then we will get all the json data form All_Users function 


    // Now TASK: 2 , where we wap in such a way that user when get request Users from All_Users then apart from his data he will
    // be able to see all data's of other user except for his data to be displayed from POSTMAN TO JWT.IO.
    res.json({
        users: All_Users.filter(function(values){
            if(values.username == username){
                return false;
            } else{  // this code returns all other user's data rather than his own data.
                return true;
            }
        })
    })
});

app.listen(3000);