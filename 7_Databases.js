// In real world, User hits requests to the backend then backend hits to database , User doesnot have access to this database.

// Types of databases 
    // GrapghDB = used for specific niche purposes.
    // VectorDB = Its popular for machine learning algorithms
    // SQL-DB = Popular for more structured data operations where we store data in structured manner
    // Ususally it more used in full stack applications and used in open sources code
    // Non-SQL-DB = it doesn't required structured pattern.

    //  Most famous is MongoDB, Properties are 1) it lets you create multiple databases and tables in each databases.
    // 2) in each databases json type is stored.
    // 3) Its schemaless (VVVERY IMP) = means no structure is required to store this json data in database.

// How to start ? = 1) Download mongodb
    //2) Get your mongodb connections
    // 3) Download mongoDB compass and go explore.

// Now that we have connected mongodb compass with making database by making the link or json format.
// Then now we understand how backend is connected to database.

// 1) Express lets us create https server.
// 2) Jsonwebtokens lets you create JWT tokens
// 3) Mongoose lets you connect backend to database

// ########################################################################################################################
// Now, with the help of mongoose 
// TASK 1: Create a backend which connect to the database and allow user to put 3 options to put data inside database.
// TASK 2: User can select 3 routes which is /sign-up where user will submit his username,passwrd,first name and /sign-in
// From which user's data ,name and passwrd is checked by backend system.(Provided user from same name should not exist in
//  database) and return the user its JWT token.
// TASK 3: /Users where user sends the jwt token from which sll the data from the database is shown to that user.
// ########################################################################################################################

// Before this tasks we will see a basic mogoose connection with database.
const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use = express(json());
mongoose.connect(
    "mongodb+srv://samyakdandge56:o6U2LR1OhPFZ9c8a@cluster0.vtryb.mongodb.net/userappnew"
);

const User = mongoose.model ("Users" , { name: String , Username: String , password: String});

app.post("/Sign-up" , async function (req , res){
    const Username = req.body.Username;
    const password = req.body.password;
    const name = req.body.name;

    const ExistingUser = await User.findone({email: Username});
    // checking if there is a user with same username or not in the database
    if(ExistingUser) {
        return res.status(400).send("Username is already exists");
    }

    await User.create({name , email: Username, password});
    res.json({
        "msg" : "User is created successfully"
    })
})

app.listen(3000);


// const express = require("express");
// const jwt = require("jsonwedtoken");
// const mongoose = require("mongoose");
// const jwtPassword = "1123456";

// mongoose.connect(
//     ""
// );

// const user = mongoose.model("Users", {
//     name: String,
//     Username:String,
//     password: String,
// });

// const app = express();
// app.use(express.json());
// const All_Users = [
//     {
//         Username: "AlfansoDavid@gmail.com",
//         Password: "123",
//         Name: "Alfanso David"
//     },
//     {
//         Username: "RobertoCarlos@gmail.com",
//         Password: "123443",
//         Name: "Roberto Carlos"
//     },
//     {
//         Username: "PeterCrouch@gmail.com",
//         Password: "3452",
//         Name: "Peter Crouch"
//     },
// ];

// function UserExists(username, password) {
//     // should checks in databases
// }

// app.post("/sign-in", function(req , res){
//     const username = req.body.username;
//     const password = req.body.password;

//     if(!UserExists(username , password)){
//         return res.status(403).json({
//             msg: "User doesn't exist in our db"
//         });
//     }
//     var token = jwt.sign({username : "username"}, jwtPassword);
//     return res.json({
//         token,
//     });
//     // on above there is a token made which takes json as input with some password which is practically wrong becoz original
//     // password is jwtPassword , so it takes input as json and converts into a long string and return it to the user.
// });

// app.get("/users", function (req, res) {
//     const token = req.headers.authorization;

//     try {
//         const decoded = jwt.verify(token, jwtPassword);
//         const username = decoded.username;
//         // return a list of users other than this username
//     } catch (err) {
//         return res.status(403).json({
//             msg: "Invalid token",
//         });
//     }
    
//     res.json({
//         users: All_Users.filter(function(values){
//             if(values.username == username){
//                 return false;
//             } else{  // this code returns all other user's data rather than his own data.
//                 return true;
//             }
//         })
//     })
// });

// app.listen(3000);
