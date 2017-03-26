const ReactDOM = require('react-dom')
var hrefHandler = require('sheet-router/href')
var App = require('./components/App')


var target = document.getElementById('main')

var state = {
 name: "todd",
 path: '/'
}


hrefHandler((click) => {
  state.path = click.pathname
  render(state)
})

function render(){
  var view = App(state)
  ReactDOM.render(view, target)
}

render()
