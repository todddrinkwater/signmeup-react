var environment = process.env.NODE_ENV || 'development'
var config = require('../knexfile')[environment]
var connection = require('knex')(config)

module.exports = {
  getStudentProfile,
  getTeacherProfile
}

function getStudentProfile(id) {
  var db = connection
  var studentData =  db('students')
      .join('memberships', 'memberships.student_ID', '=', 'students.id')
      .join('activity', 'memberships.activity_ID', '=', 'activity.id')
      .where('students.id', id)
      .select('students.id', 'first_name', 'last_name', 'activity_name')
      .first()
  return studentData
}

function getTeacherProfile(id) {
  var db = connection
  var teacherData = db('teachers')
    .join('coordinator', 'coordinator.teacher_ID', '=', 'teacher.id')
    .join('activity', 'coordinator.activity_ID', '=', 'activity.id')
    .where('teacher.id', id)
    .select('teacher.id', 'first_name', 'last_name', 'email', 'phone', 'activity_name')
}

function getActivityDetails(){
  var db = connection
  var acitivityData = db('teachers')
  .join('coordinator', 'coordinator.teacher_ID', '=', 'teacher.id')
  .join('activity', 'coordinator.activity_ID', '=', 'activity.id')
  .join('memberships', 'activity.id', '=', 'activity_ID')
  .join('students', 'student.id', '=', 'student_ID')
}

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
