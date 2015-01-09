var React         = require('react/addons');
var AppConstants  = require('../constants/AppConstants');
var AppButton     = require('./AppButton');
var SearchInput   = require('./SearchInput');

var Header = React.createClass({
  render: function() {

    return (
      <header>
        <AppButton />
        <SearchInput />
      </header>
    );
  }
});

module.exports = Header;