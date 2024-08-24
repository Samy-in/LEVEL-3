const express = require("express")
const app = express()
const port = 3008
// function CalculateSum(n){
//     let ans = 0;
//     for(let i = 1; i<= n; i++){
//         ans = ans + i;
//     }
//     return ans;
// }

// app.get('/', function (req, res)  {
//     const n = req.query.n;
//     // here we use Query parameter i.e. when acessing this server we write "localhost:3000/?n=6"
//     // this tells us we are passing a query n= 6 and we can also pass more variables values or querys.
//     const ans = CalculateSum(15);
//     res.send('Hello World!')
//   })

//   app.listen(port, function()  {
//     console.log(`Example app listening on port ${port}`)
//   })

// Making a In memory Hospital Websites. in which healthy and Unhealthy kidneys.
var users = [{
  name: "Jason",
  Kidneys : [{
    healthy: false
  }, {
    healthy : true
  }]

}]
app.use(express.json());

app.get('/', function (req, res){
  const jasonKidneys = users[0].Kidneys;
  const noOfkidneys = jasonKidneys.length;
  let noOfHealthykidneys = 0;
  for (let i = 0; i< jasonKidneys.length; i++) {
    if (jasonKidneys[i].healthy) {
      noOfHealthykidneys = noOfHealthykidneys + 1;
    }
  }
  const noOfUnHealthykidneys = noOfkidneys - noOfHealthykidneys;
  res.json ({
    noOfkidneys,
    noOfHealthykidneys,
    noOfUnHealthykidneys
  })
})
// the above code is shows us how many type of kidneys are there.
// now with this post we will change the noof kidneys by passing through body .

// Now to post this request we have to download postman becoz we can't send post request from browser
app.post('/', function(req,res){
    const isHealthy = re.body.isHealthy;
    // this body will be undefined becoz node js cant access body easliy so we have to parse the body.
    // to use this we write app.use(express.json())
    users[0].Kidneys.push({
      healthy : isHealthy
    })
    res.json({
      msg: "addition is Done!"
    })
})

app.put('/', function(req,res){
  // here we are resetting the all the kidneys into healthy not matter its healthy or unhealthy.
  for(let i = 0; i < users[0].Kidneys.length; i++){
    users[0].Kidneys[0].healthy = true;
  }
  res.json({ })
})
// Now tasks in that we need to separate the healthy and Unhealthy kidneys.
// So we create a new variable to store this healthy kidneys and iterate over the user's data untill we found the healthy. 
/// We are removing all the unhealthy Kidneys
app.delete('/', function(req, res){
  const NewKidneys = 0;
  for(let i = 0; i < users[0].Kidneys.length; i++){
    if(users[0].Kidneys[i].healthy)
        NewKidneys.push({
          healthy : true
      })
  }
  users[0].Kidneys = NewKidneys;
  res.json({msg : "Mission is done"})
}) 

app.listen(3008);
