var React = require('react')
var Route = require('react-router-dom').Route
var Router = require('react-router-dom').HashRouter
var Login = require('./Login')
var StudentProfile = require('./StudentProfile')

module.exports = function App(props) {
  return (
    <Router>
      <div>
        <div className='navbar'>
          <a href='/login'> Login</a> |
          <a href='/about'> About</a>
        </div>
        <Route exact path='/' component={Login} />
        <Route path='/student-profile/:id' component={StudentProfile} />
      </div>
    </Router>
  )
}
