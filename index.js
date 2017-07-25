const express = require('express')
const app = express()

if (app.get('/hello/*', (req, res) => {
  res.send('Hello there! Rawr')
}))

app.get('/hello', (req, res) => {
  res.send('Hello there!')
})

app.get('/goodbye', (req, res) => {
  res.send('See you later!')
})

app.listen(3000, () => {
  console.log('listening');
})
