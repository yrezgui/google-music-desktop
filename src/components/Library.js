var React       = require('react/addons');
var MusicStore  = require('../stores/MusicStore');
var Album       = require('./Album');

var Library = React.createClass({
  getInitialState: function() {
    return { albums: MusicStore.getLibrary() };
  },
  componentDidMount: function() {
    MusicStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function() {
    MusicStore.removeChangeListener(this._onChange);
  },
  _onChange: function() {
    this.setState({ albums: MusicStore.getLibrary() });
  },
  generateAlbumItem: function(albumId, index) {
    return <Album model={this.state.albums[albumId]} key={index} />
  },
  render: function() {

    var containerStyle = {
      display: 'flex',
      
      WebkitFlexFlow: 'row wrap',
      justifyContent: 'space-around'
    };

    return (
      <div style={containerStyle}>
        {Object.keys(this.state.albums).map(this.generateAlbumItem)}
      </div>
    );
  }
});

module.exports = Library;