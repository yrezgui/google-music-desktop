var React = require('react/addons');

var Loading = React.createClass({

  render: function() {

    var containerStyle = {
      height: '100%',
      width: '100%',
      display: 'table'
    };

    var wrapperStyle = {
      display: 'table-cell',
      height: '100%',
      verticalAlign: 'middle',
      textAlign: 'center'
    };

    return (
      <div style={containerStyle}>
        <div style={wrapperStyle}>
          <img src="img/loading.gif" />
        </div>
      </div>
    );
  }
});

module.exports = Loading;