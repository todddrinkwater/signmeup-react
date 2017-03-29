var environment = process.env.NODE_ENV || 'development'
var config = require('../../knexfile')[environment]
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
      .select('students.id', 'first_name', 'last_name', 'activity_name', 'students.email', 'students.phone')
      .first()
  return studentData
}

function getTeacherProfile(id) {
  var db = connection
  var teacherData = db('teachers')
    .join('coordinator', 'coordinator.teacher_ID', '=', 'teachers.id')
    .join('activity', 'coordinator.activity_ID', '=', 'activity.id')
    .select('first_name', 'last_name', 'email', 'phone', 'activity_name')
    .where('teachers.id', id)
    .first()
  return teacherData
}

function getActivityDetails(id){
  var db = connection
  var activityData = db('teachers')
  .join('coordinator', 'coordinator.teacher_ID', '=', 'teachers.id')
  .join('activity', 'coordinator.activity_ID', '=', 'activity.id')
  .join('memberships', 'activity.id', '=', 'activity_ID')
  .join('students', 'student.id', '=', 'student_ID')
  .select('students.first_name', 'students.last_name')
  .where('student.id', id)
  return activityData
}
