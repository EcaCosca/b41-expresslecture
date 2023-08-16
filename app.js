// https://www.npmjs.com/package/dotenv
require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 8080
const users = require('./users')

// app.use()
// https://expressjs.com/en/guide/using-template-engines.html
app.set('view engine', 'pug')

// ALL REQUESTS TO ENDPOINT "/"
app.route('/')
.all((req, res, next) => {
    console.log("METHOD: "+req.method)
    next()
})
.get((req, res) => {res.send('GET REQUEST')})
.post((req, res) => {res.send('POST REQUEST')})
.put((req, res) => {res.send('PUT REQUEST')})
.delete((req, res) => {res.send('DELETE REQUEST')})

// GET - ALL USERS
app.get('/users', (req, res) => {
    res.json(users)
})

// GET - SINGLE USER BY ID
app.get('/users/:id', (req, res) => {
    // HERE ARE THE REQ PARAMETERS BEING STORED
    console.log(req.params.id);
    // HERE ARE THE REQ QUERYS BEING STORED
    console.log(req.query.name);
    const result = users.filter(ele => ele.id == req.params.id)
    res.json(result)
})

// GET - PUG
// WORKS AS A VIEW ENGINE FOR HTML FORMAT
app.get('/pug', (req, res) => {
    res.render('index', { title: 'Tamer', message: 'Hello there!' })
})

app.listen(port, () => {
  console.log(`http://localhost:${port}/`)
})