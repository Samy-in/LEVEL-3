// ******************* How to write Better Input Validation with ZOD *********************
// zod is a schema that has all the neccessary libraries needed for a input validations you just have to specify what is the 
// type of this checks that is appliedin this input validations.

// IN SHORT ZOD = IT'S A LIBRARY, WHEN GIVEN A BLUEPRINT IT LET'S US KNOW THAT THE GIVEN INPUT VALIDATES OR FOLLOWS THAT 
// BLUEPRINT OR NOT.

const express = require("express");
const {z} = require("z");
const app = express();

const schema = z.array(z.number()); 
// this ensures that user should only allowed to put numbers and others are not allowed.

// suppose email = string => for name@gmail.com
// password = z.string is used
// country = should be "IN" or "US"
// 
const schemas = z.object ({
    email: z.string().email(),
    password: z.string().min(8),
    country : z.literal("IN").or(z.literal("US")),
    kidney: z.array(z.number())

});
app.use(express.json());

app.post("/health-checkup" , function(req , res){
    const kidney = req.body.kidney;
    const response = schema.safeParse(kidney);
    if(!response.success){
        res.status(411).json({
            msg: "Input is invalid"
        })
     } else {

            res.send({
                response
            })
        }
} )

app.listen(3000);

// Primitive types of zod

//  z. string() z.number() z.boolean() z.bigint() z.date() z.symbol()

// Catch all types --> it allow all values
// z.any or z.unknown()

//  2) Empty types

//  z.undefined() z.null() z.void()---> which accepts empty values

// 3)  Never tpyes = allow no values.

//  z.never()

//  4) all validation checks from mdn website
//  z.string().email() or .min() or .max() or .url() or .includes(string) or .Startswith(string) or .dateTime()

//  z.string().Touppercase() or Tolowercase() or .Ip()--->{Very Imp}

// 5.) Coercion for primitives--> To push someone to do something or take something.
//  const schema = z.coerce.string()
// schema.parse("Tuna")
// schema.parse(34) ----> Now it taking 34 as input


// ======================= Authentication ========================================================================
// Better ways is

// Give user back the token for signin or signups
// Ask the user to send  back the token for all future requests.
// When the user log out , ask user to forget the token or (retrive the token from the backend.)

// ******************************* IMP Questions **************************************
// Q) Why do we use this token system to store this email or password from user directly in the local storage of the browser?
// Answer to that is local storage is pretty public so any one can exploit user's password so we use non tangeble token to store it.