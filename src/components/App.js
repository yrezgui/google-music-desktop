var React         = require('react/addons');
var Loading       = require('./Loading');
var Login         = require('./Login');
var Header        = require('./Header');
var Library       = require('./Library');
var LoginStore    = require('../stores/LoginStore');
var AppConstants  = require('../constants/AppConstants');

var App = React.createClass({
  getInitialState: function() {
    return {
      status: LoginStore.getStatus()
    };
  },
  componentDidMount: function() {
    LoginStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function() {
    LoginStore.removeChangeListener(this._onChange);
  },
  _onChange: function() {
    this.setState({
      status: LoginStore.getStatus()
    });
  },
  render: function() {
    var page;

    if(this.state.status === AppConstants.LoginStatus.SIGNED_IN) {
      return (
        <div>
          <Header />
          <Library />
        </div>
      );
    }

    if(this.state.status === AppConstants.LoginStatus.SIGNED_OUT) {
      return (
        <div>
          <Login />
        </div>
      );
    }

    return <Loading />;
  }
});

module.exports = App;