// Task 1) 
// JWTs
// Write a function that takes in a username and password and returns a JWT token with the username encoded inside object
// parenthesis {}. 
// It should return null if:

// The username is not a valid email.
// The password is less than 6 characters.
// Use the zod library for validation.
// Write a function that takes a JWT as input and returns true if the JWT can be decoded (not verified). 
// Return false otherwise.
// Write a function that takes a JWT as input and returns true if the JWT can be verified. Return false otherwise.
// ###################################################################################################3#############33333#

const express = require("express");
const {z} = require("z");
const app = express();
const jwt = require("jsonwedtoken");
const jwtPassword = "secret";

// to implement schemas for zod
const emailschema = z.string().email();
const passwrdschema = z.string().min(6);  // this min(6) mean minimum 6 letter as mentioned in tasks.

function SignJwt(Username, Password){
    const usernamesresponse = emailschema.safeParse(Username);
    const passwordresponse = passwrdschema.safeParse(Password); // these will check if token is same or not
    // If not then this below is executed
    if(!usernameresponse.success || !passwordresponse.success){
        return null;
    } 
    // if both nothing above cases occur then controller will proceed for this below code
    const signature = jwt.sign({
        Username
    },jwtPassword)
    return signature;
}   
// now to test this we use
// const ans = SignJwt('samyak24928' , '21492')
// console.log(ans); ANSWER : NULL. becoz email is not in email format and same for passwtd
// PART 1 is done

// part 3
function VerifyJwt(token){
    let ans = true;
    try{
        jwt.verify(token, jwtPassword); //this checks the token and the secret if yes then return true if not verified then 
        // reutrn false.
        
    } catch(err){
        ans = false;
    }
    return ans;
}
// Part 2 is done below
function decodeJwt(token){ //  here are just decoding without passwrd needed
    const decoded = jwt.decode(token);
    if(dedoded){
        return true
    }
    else{
        return false
    }
}