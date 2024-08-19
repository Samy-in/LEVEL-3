const express = require("express")
const app = express()

function CalculateSum(n){
    let ans = 0;
    for(let i = 1; i<= n; i++){
        ans = ans + i;
    }
    return ans;
}

app.get('/', function (req, res)  {
    const n = req.query.n;
    // here we use Query parameter i.e. when acessing this server we write "localhost:3000/?n=6"
    // this tells us we are passing a query n= 6 and we can also pass more variables values or querys.
    const ans = CalculateSum(15);
    res.send('Hello World!')
  })

app.listen(3008);