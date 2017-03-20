var React = require('react')
const sheetRouter = require('sheet-router')
var Login = require('./login')
var Home = require('./home')

const router = sheetRouter({ default: '/' }, [
  ['/', () => Home],
  ['/login', () => Login]
])

module.exports = function App(props) {
    var currentPath = props.path
    var MainComponent = router(currentPath)
    console.log(MainComponent);
  return (
    <div>
      <div className='navbar'>
        <a href='/'>Home</a> |
        <a href='/login'> Login</a> |
        <a href='/about'> About</a>
      </div>
      <div>{MainComponent(props)}</div>
    </div>
  )
}
