var React = require('react')
var api = require('../api')


//View
module.exports = function studentProfile(props){
  return (
    <div>
      <h1>Hello {props.first_name} {props.last_name} !</h1>
      <ul>
        <li>Activity: {props.activity_name}</li>
      </ul>
    </div>
  )
}
