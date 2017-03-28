var express = require('express')
var router = express.Router()

var db = require('../database/db')

router.get('/', function (req, res){
  db.getStudentProfile()
  .then( profile => {
    res.json(profile)
  })
})

module.exports = router
