const express = require('express')
const app = express()
const port = 3000

let state = {}

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/getInfo', (req, res) => {
    res.set('Content-Type', 'application/json');
    res.set('Access-Control-Allow-Origin', '*')
    res.send(JSON.stringify(state))    
  })

app.post('/api', (req, res) => {
    state = req.body
    res.send('Оно живое')

  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})