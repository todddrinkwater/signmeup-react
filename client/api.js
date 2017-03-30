import request from 'superagent'

var studentsUrl = 'http://localhost:3000/students/'
var teachersUrl = 'http://localhost:3000/teachers/'


export const getStudentProfile = (id, callback) => {
  request
    .get(studentsUrl + id)
    .end(function (err, res) {
      if (err) {
        callback(err)
      } else {
        callback(null, res.body)
      }
    })
}

export const getTeacherProfile = (id, callback) => {
  request
    .get(teachersUrl + id)
    .end(function (err, res) {
      if (err) {
        callback (err)
      }
      else {
        callback(null, res.body)
      }
    })
}
