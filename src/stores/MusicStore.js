var AppDispatcher = require('../dispatchers/AppDispatcher');
var AppConstants  = require('../constants/AppConstants');
var EventEmitter  = require('events').EventEmitter;
var assign        = require('object-assign');

var ActionTypes   = AppConstants.ActionTypes;
var CHANGE_EVENT  = 'change';

var _library = {};

var MusicStore = assign({}, EventEmitter.prototype, {

  init: function(rawSongs) {
    var library = {};

    rawSongs.forEach(function(song) {
      if(song.deleted) {
        return;
      }

      var albumId = song.albumArtist + song.album;

      if(!albumId) {
        albumId = AppConstants.Library.UNKNOWN;
      }

      if(!library[albumId]) {
        library[albumId] = {
          albumArtist: song.albumArtist,
          album: song.album,
          cover: song.albumArtRef && song.albumArtRef.length ? song.albumArtRef[0].url : null,
          songs: []
        };
      }

      library[albumId].songs.push({
        id: song.id,
        title: song.title,
        size: song.estimatedSize,
        lastModified: song.lastModifiedTimestamp,
        playCount: song.playCount
      });
    });

    _library = library;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getLibrary: function() {
    return _library;
  }

});

MusicStore.dispatchToken = AppDispatcher.register(function(payload) {
  var action = payload.action;

  switch(action.type) {

    case ActionTypes.RECEIVE_LOCAL_SONGS:
      MusicStore.init(action.rawSongs);
      MusicStore.emitChange();
      break;

    default:
      // do nothing
  }

});

module.exports = MusicStore;