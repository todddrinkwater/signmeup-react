var environment = process.env.NODE_ENV || 'development'
var config = require('../../knexfile')[environment]
var connection = require('knex')(config)

module.exports = {
  getStudentProfile
}

function getStudentProfile(id) {
  var db = connection
  var studentData =  db('students')
      .join('memberships', 'memberships.student_ID', '=', 'students.id')
      .join('activity', 'memberships.activity_ID', '=', 'activity.id')
      .where('students.id', id)
      .select('students.id', 'first_name', 'last_name', 'activity_name')
  return studentData
}


getStudentProfile(1).then(function(res) {
  console.log(res);
})
//Retrieve Student Data from Knex DB
  // 1. require knex package -
    //   var config = require('./knexfile')[environment]
    // var connection = require('knex')(config)
    // will be required in db.js
  // 2. Create a function to retrive knex database file
  // 2a. Function will grab a students ID to display through a param
  // 2b. Function will link tables using a using where and use join to join tables.
  // 2c. Function will use select to target the fields I want to display.
  // 3.
