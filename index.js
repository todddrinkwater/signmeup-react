
var ReactDOM = require('react-dom')
var App = require('./components/App')

var target = document.getElementById('main')

var state = {name: "todd"}

function render(){
  var view = App(state)
  ReactDOM.render(view, target)
}

render()
