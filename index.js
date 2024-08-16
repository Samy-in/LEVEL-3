const express = require("express")
const app = express()
const port = 3000
 // here '/' means Routes.
app.get('/', function (req, res)  {
  res.send('Hello World!')
})
app.get('/conversion', function (req, res)  {
  res.send('Crazy World!')
})

app.listen(port, function()  {
  console.log(`Example app listening on port ${port}`)
})
// or app.listen(port)



