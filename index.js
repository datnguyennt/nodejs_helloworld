const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/game', (req, res) => {
    var a = 1;
    var b =2;
    var c = a+b;
    res.send('Hello Dat Nguyen')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})