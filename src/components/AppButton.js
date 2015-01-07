var React = require('react/addons');

var AppButton = React.createClass({
  onClick: function(event) {
    event.preventDefault();
  },
  render: function() {

    var imageStyle = {
      verticalAlign: 'middle'
    };

    return (
      <img src="logo.svg" onClick={this.onClick} style={imageStyle} />
    );
  }
});

module.exports = AppButton;