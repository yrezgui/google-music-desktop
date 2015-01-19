var React       = window.React = require('react/addons');
var ApiUtils    = require('./utils/ApiUtils');
var LoginUtils  = require('./utils/LoginUtils');
var App         = require('./components/App');
var Loading     = require('./components/Loading');

React.render(
  <App />,
  document.body
);

LoginUtils.getGoogleLogin()
  .then(ApiUtils.executeSignIn)
  .catch(ApiUtils.onEmptyLogin);