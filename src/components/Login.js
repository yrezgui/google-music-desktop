var React   = require('react/addons');
var assign  = require('object-assign');

var Login = React.createClass({
  onSubmit: function() {
    // body...
  },
  render: function() {

    var containerStyle = {
      textAlign: 'center',
      position: 'relative',
      top: '100px'
    };

    var formStyle = {
      display: 'inline-block',
      background: 'rgba(170, 170, 180, 1)',
      borderRadius: '3px',
      color: '#ffffff'
    };

    var inputStyle = {
      border: 'none',
      fontSize: '15px',
      height: '25px',
      padding: '10px',
      background: 'inherit',
      color: 'inherit',
      borderRadius: 'inherit'
    };

    var iconStyle = {
      padding: '10px 10px 9px',
      cursor: 'pointer'
    };

    return (
      <div style={containerStyle}>
        <h1>
          <img src="logo.svg" style={{verticalAlign: 'middle'}} /> 
          Vivoi
        </h1>
        <form style={formStyle}>
          <input type="text" style={inputStyle} placeholder="Email" />
          <input type="password" style={inputStyle} placeholder="Password" />
          <i className="fa fa-check" style={iconStyle} onClick={this.onSubmit}></i>
        </form>
      </div>
    );
  }
});

module.exports = Login;