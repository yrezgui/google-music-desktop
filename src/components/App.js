var React   = require('react/addons');
var Loading = require('./Loading');
var Header  = require('./Header');
var Library = require('./Library');

var App = React.createClass({

  render: function() {
    return (
      <div>
        <Header />
        <Library />
      </div>
    );
  }
});

module.exports = App;