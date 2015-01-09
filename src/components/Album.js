var React = require('react/addons');
var Status = require('../constants/AppConstants').AlbumStatus;

var Album = React.createClass({
  getInitialState: function() {
    return {
      status: Status.NOT_DOWNLOADED
    }
  },
  download: function(event) {
    if(!confirm('Do you want to download this album')) {
      return;
    }

    this.setState({status: Status.DOWNLOADING});

    setTimeout(function() {
      this.setState({status: Status.DOWNLOADED});
    }.bind(this), 2500);
  },
  render: function() {
    var cx = React.addons.classSet;

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

    var iconClasses = cx({
      'fa': true,
      'fa-cloud-download': (this.state.status === Status.NOT_DOWNLOADED || Status.DOWNLOADED),
      'fa-circle-o-notch fa-spin': (this.state.status === Status.DOWNLOADING)
    });

    var iconStyle = {
      position: 'relative',
      float: 'right',
      fontSize: '16px',
      color: this.state.status === Status.DOWNLOADED ? '#0077c0' :'#ddd',
      cursor: 'pointer'
    };

    return (
      <div style={containerStyle}>
        <img src={albumCover} style={imageStyle} />
        <div style={{padding: '0 10px'}}>
          <p style={nameStyle}>{this.props.model.album || 'Unknown Album'}</p>
          <p style={artistStyle}>
            {this.props.model.albumArtist || 'Unknown Artist'}
            <i className={iconClasses} style={iconStyle} onClick={this.download}></i>
          </p>
        </div>
      </div>
    );
  }
});

module.exports = Album;