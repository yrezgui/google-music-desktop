var React     = window.React = require('react/addons');
var ApiUtils  = require('./utils/ApiUtils');
var App       = require('./components/App');
var Loading   = require('./components/Loading');

ApiUtils.fetchLocalSongs();

React.render(
  <App />,
  document.body
);