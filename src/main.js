// main.js
var React = require('react');
var ReactDOM = require('react-dom');
var components = require('./components.js');
var MainView = components["view.main"];

ReactDOM.render(
  <MainView name="World"></MainView>,
  document.querySelector("main")
);
