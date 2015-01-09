var React = require('react/addons');

var SearchInput = React.createClass({
  onChange: function(event) {
    // event.preventDefault();
  },
  render: function() {

    var containerStyle = {
      width: 'calc(100% - 135px)',
      display: 'inline-block'
    };

    var inputStyle = {
      border: 'none',
      fontSize: '20px',
      height: '50px',
      padding: '5px 10px',
      borderRadius: '3px',
      background: 'rgba(170, 170, 180, 1)',
      color: '#ffffff',
      width: '100%'
    };

    return (
      <div style={containerStyle}>
        <input type="text" placeholder="Search music" style={inputStyle} onChange={this.onChange} />
      </div>
    );
  }
});

module.exports = SearchInput;