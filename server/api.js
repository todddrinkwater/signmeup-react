var bodyParser = require('body-parser')
var database = require('./database/db')

//get student profile from db.js
database.getStudentProfile(2)
  .then(function(res) {
    console.log(res);
  })

module.exports = database.getStudentProfile
