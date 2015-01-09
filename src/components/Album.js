var React = require('react/addons');

var Album = React.createClass({
  render: function() {

    var albumCover  = this.props.model.cover ? this.props.model.cover : 'img/defaultCover.png';

    var containerStyle = {
      height: '200px',
      width: '150px',
      background: '#fff',
      boxShadow: '0px 2px 4px rgba(0,0,0,.2)',
      margin: '0 0 10px'
    };

    var imageStyle = {
      width: '150px',
      height: '150px',
      marginBottom: '5px'
    };

    var nameStyle = {
      margin: 0,
      color: '#464646',
      fontSize: '16px',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      whiteSpace: 'nowrap'
    };

    var artistStyle = {
      margin: 0,
      color: '#B5B5B5',
      fontSize: '12px',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      whiteSpace: 'nowrap'
    };

    return (
      <div style={containerStyle}>
        <img src={albumCover} style={imageStyle} />
        <div style={{padding: '0 10px'}}>
          <p style={nameStyle}>{this.props.model.album || 'Unknown Album'}</p>
          <p style={artistStyle}>{this.props.model.albumArtist || 'Unknown Artist'}</p>
        </div>
      </div>
    );
  }
});

module.exports = Album;