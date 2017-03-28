var express = require('express')
var router = express.Router()

var db = require('../database/db')

router.get('/:id', function (req, res){
  db.getStudentProfile(Number(req.params.id))
  .then( profile => {
    res.json(profile)
  })
})

module.exports = router
