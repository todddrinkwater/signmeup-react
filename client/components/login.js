var React = require('react')

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
              ID:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" name="id" />
            </li>
            <li>
            Password: <input type="text" name="password" />
            </li>
          </ul>
        <a href="/StudentProfile"><input type="submit" value="Log In" /></a>
        </form>
    </div>
  )
}
