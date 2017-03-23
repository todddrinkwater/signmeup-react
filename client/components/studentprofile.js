var React = require('react')


//View
module.exports = function studentProfile(props){
  return (
  <div>
    <h1>Hello {props.firstName} {props.lastName} !</h1>
    <ul>
      <li>Date of Birth:{props.birthDate}</li>
      <li>Activity: {props.activity}</li>
    </ul>
  </div>
  )
}
