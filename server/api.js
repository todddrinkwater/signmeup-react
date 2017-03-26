import request from 'superagent'

var studentsUrl = 'http://localhost:3000/students'

export default {
  getStudents: getStudents,
}

function getStudents (callback) {
  request
    .get(studentsUrl)
    .end(function (err, res) {
      if (err) {
        callback(err)
      } else {
        callback(null, res.body)
      }
    })
}

// var bodyParser = require('body-parser')
// var database = require('./database/db')
//
// //get student profile from db.js
// database.getStudentProfile(2)
//   .then(function(res) {
//     console.log(res);
//   })
//
// module.exports = database.getStudentProfile
