var React = require('react')
const sheetRouter = require('sheet-router')
var Login = require('./Login')
var AllStudents = require('./StudentProfile')

const router = sheetRouter({ default: '/' }, [
  ['/', () => Login],
  ['/StudentProfile', () => AllStudents]
])

module.exports = function App(props) {
    var currentPath = props.path
    var MainComponent = router(currentPath)
  return (
    <div>
      <div className='navbar'>
        <a href='/login'> Login</a> |
        <a href='/about'> About</a>
      </div>
      <div>{MainComponent(props)}</div>
    </div>
  )
}
