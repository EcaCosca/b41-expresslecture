// https://www.npmjs.com/package/dotenv
require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 8080

// app.get('/', (req, res) => {
//     console.log(req.method);
//   res.send('GET REQUEST')
// })

// app.post('/', (req, res) => {
//     console.log(req.method);
//   res.send('POST REQUEST')
// })

// app.put('/', (req, res) => {
//     console.log(req.method);
//   res.send('PUT REQUEST')
// })

// app.delete('/', (req, res) => {
//     console.log(req.method);
//   res.send('DELETE REQUEST')
// })

// app.use()

app.route('/')
.get((req, res) => {res.send('GET REQUEST')})
.post((req, res) => {res.send('POST REQUEST')})
.put((req, res) => {res.send('PUT REQUEST')})
.delete((req, res) => {res.send('DELETE REQUEST')})

app.get('/users', (req, res) => {
  res.send('Here you get all the users')
})

app.get('/users/id', (req, res) => {
  res.send('A single user')
})

app.get('/christoph', (req, res) => {
  res.send('Hello Christoph!')
})

app.listen(port, () => {
  console.log(`http://localhost:${port}/`)
})