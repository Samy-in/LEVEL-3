
// The complier part of the node.js is V8 function/complier so its said the js is compliers
// What is an fs = its an library which gives us high level constructs to do filesystem stuff like (read from a file, write to a file...)
// An express = its an library that create http servers.

// Ecma Script is a scripting language specialization of javascript standardized by ecma international
// basically they sets how javascript should be written.

// Javascript is scripting language which has the specailisation from ecma but it can work beyond this specialization
// such as setTimeout function etc. These are web API which used apart from ecma.

// What is NODE js is an runtime environment for javascript it mainly used for reading the file : runtime means something
// that can run js.
// Compare to bun, node.js is slow for multiple cases. 
// Bun is used to perform multiple tasks faster and it is written in "Zig" 

// So we are writing the backend code in node.js
// 1) create CLIS (Command Line Interface)
// 2) create a video game
// 3) Create an HTTP servers. (Hyper text transfer protocol)
// +++++++++++++++ "HTTP is protocol to machine to talk to each other." +++++++++++++++++++++++++++++++
// Http is the most commons way to frontend of a website talks to its backend.

// Http protocol is somthing that takes data from user in online and do somethind with it hen returns it back to the server.
// Now On client sided HTTP Protocol has Protocol(Wttps,Attps) , Address(URL,IP,Port), Routes , Handlers body query
// and Methods.
// Now on server side HTTP Protocol has Response headers, Respones body , status code.
// Ex = For how request from your browser goes to the server's backend.
// https://chat.openai.com/backend-api/conversation.
// [https://] [chat.openai.com] [backend-api/conversation]
//      |           |                       |
//      |           |                       |
//  Protocol        Url                  Routes
//  then Header is used which has cookie for authorization.
//  Body = has the main question asked to the ai.
//  Method is called which is "POST";
// 
// Things that happens after you fire a request from your browser is that:
// 1) browser praise the URL
// 2) Does a DNS lookup (which converts chat.openai.com into IP address.)
// 3) Establishes a connection to the IP.

// IP is just like a phone number which points to the server which is requested.
// Then first things that happens is DNS resolution (Domain name service resolution.) this DNS remembers/map the ip address of chat.openai.com and after fire a request it takes us there

// Most Common Http backend server methods are [GET , POST ,PUT, Delete ]
// Put means to updated. post is for adding something.

// Ost common http status code:
// 200(Everything is ok)
// 404 ( page not found)
// 403 (authentication issue)
// 500 (Internal server issue)

// There are many libraries that create https server and most famous is express.
// Postman Used to create http based requests like get , post , put , Delete.
// +++++ So in EXPRESS can get , post or anything like this but it ignores the data that is written in ths body 
// of the request which is important.++++

// So, to solve this problem we use library called "body-parser"; To install we use npm install body-parser.
// we use code = const bodyParser = require("body-praser")
//               app.use(bodyParser.json());

// Bset Explaination for bodyparser: We can use bodyParser library modules enables us to parse incoming request bodies in 
// middleware. Express.js server needs to know what type of data you're sending over the network, so it knows how to parse
// it.

// Advance Command = for running the server immediately when any changes are made in the code.
// use +++++++++++ npx nodemon "File name." +++++++++

// Now we know IP number is different for everyone but if we directly write IP number in the task bar then server
// can't comprehence/ figure out where it comes from so it won't show anything reason because the server checks
// the domain name that you had added and if you don't have or not given he domain name then it will give blank or error.

// ################### Adding Environment Variable in the node ##############################
// write const port = process.env.PORT || 3000 = This sets the environment variables
// What this does is now we can shift 3000 to 3005 or any port and the same data will get presented.
// we have to write "export PORT=3006 " then running the server by "node index.js"
// All this you have to write in the terminal only.

// app.get('/conversion', function (req, res)  {
//     const message = req.query.message;
//       res.send(message)
//  })     this code is for to pass any type of message after "?" written in the search bar.
//

// Now to connect Frontend with Backend we use const backendURL = "http://localhost:3000"
