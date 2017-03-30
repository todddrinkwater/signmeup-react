var React = require('react')
var Link = require('react-router-dom').Link

module.exports = function Login(props) {
  return (
    <div className="login">
      <h1>Welcome to Sign Me Up!</h1>
      <h4>Sign In to Sign Up</h4>
        <form action="#" method="post">
          <ul>
            <li>
            <select>
                <option value="organisation">Fraser High School</option>
            </select>
            </li>
            <li>
              ID / Email:<input type="text" name="id" />
            </li>
            <li>
            Password: <input type="text" name="password" />
            </li>
          </ul>
        <Link to="/student-profile/1"><input type="submit" value="Log In" /></Link>
        </form>
    </div>
  )
}
