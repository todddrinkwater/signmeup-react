import request from 'superagent'

var studentsUrl = 'http://localhost:3000/students/'

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
