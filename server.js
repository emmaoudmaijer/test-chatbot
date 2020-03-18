const express = require('express')
const bodyParser = require('body-parser')

const app = require('./app')
const myApp = express().use(bodyParser.json());

myApp.get('/', (req,res) => {
  res.send('the connection was succesful')
})

myApp.post('/', app)

myApp.listen(process.env.PORT || 8000);
