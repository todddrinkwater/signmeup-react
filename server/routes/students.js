var express = require('express')
var router = express.Router()

var db = require('../database/db')

router.get('/', function (req, res){
  res.send("hello!")
})

module.exports = router
