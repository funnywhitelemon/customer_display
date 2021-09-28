const express = require('express')
const app = express()
const port = 3000

let state = {
  goods: [
    {
      name: 'колбаса',
      count: 10,
      price: 560,
      total: 5600

    },
    {
      name: 'сыр',
      count: 1,
      price: 560,
      total: 560,

    },
    {
      name: 'масло',
      count: 0.5,
      price: 600,
      total: 300

    },
  ],
  total: 1420
}

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