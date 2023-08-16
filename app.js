// https://www.npmjs.com/package/dotenv
require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 8080

app.get('/', (req, res) => {
    console.log(req.method);
  res.send('GET REQUEST')
})

app.post('/', (req, res) => {
    console.log(req.method);
  res.send('POST REQUEST')
})

app.put('/', (req, res) => {
    console.log(req.method);
  res.send('PUT REQUEST')
})

app.delete('/', (req, res) => {
    console.log(req.method);
  res.send('DELETE REQUEST')
})

app.get('/stephan', (req, res) => {
  res.send('Hello Stephan!')
})

app.get('/christoph', (req, res) => {
  res.send('Hello Christoph!')
})

app.listen(port, () => {
  console.log(`http://localhost:${port}/`)
})