var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var path = require('path')

var students = require('./routes/students')
var teachers = require('./routes/teachers')

var app = express()

app.use(bodyParser.json())
app.use(cors({origin: 'http://localhost:8080'}))
app.use(express.static(path.join(__dirname, './public')))

app.use('/students', students)
app.use('/teachers', teachers)

module.exports = app
