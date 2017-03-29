import React from 'react'

import { getStudentProfile } from '../api'

var StudentProfile = React.createClass({
  getInitialState () {
    return {
      profile: {
        firstName: '',
        lastName: '',
        activity: ''
      }
    }
  },

  componentDidMount () {
    var id = this.props.match.params.id
    getStudentProfile(id, (err, result) => {
      if (!err) {
        this.setState({
          profile: {
            firstName: result.first_name,
            lastName: result.last_name,
            activity: result.activity_name
          }
        })
      }
    })
  },

  render () {
    return (
      <div>
        <h1>Hello {this.state.profile.firstName} {this.state.profile.lastName} !</h1>
        <ul>
          <li>Activity: {this.state.profile.activity}</li>
        </ul>
      </div>
    )
  }
})

module.exports = StudentProfile
