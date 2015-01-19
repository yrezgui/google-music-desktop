var React = require('react/addons');

var Loading = React.createClass({

  render: function() {

    var containerStyle = {
      textAlign: 'center',
      position: 'relative',
      top: '200px'
    };

    return (
      <div style={containerStyle}>
        <img src="logo.svg" />
      </div>
    );
  }
});

module.exports = Loading;