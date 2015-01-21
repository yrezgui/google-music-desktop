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
          id: albumId,
          albumArtist: song.albumArtist,
          album: song.album,
          cover: song.albumArtRef && song.albumArtRef.length ? song.albumArtRef[0].url : null,
          songs: [],
          status: AppConstants.AlbumStatus.NOT_DOWNLOADED
        };
      }

      library[albumId].songs.push({
        id: song.id,
        title: song.title,
        artist: song.artist,
        size: song.estimatedSize,
        lastModified: song.lastModifiedTimestamp,
        playCount: song.playCount,
        status: AppConstants.AlbumStatus.NOT_DOWNLOADED
      });
    });

    _library = library;
  },

  startDownload: function(album) {
    if(!_library[album.id]){
      return;
    }

    _library[album.id].status = AppConstants.AlbumStatus.DOWNLOADING;
  },
  
  finishDownload: function(albumId) {
    if(!_library[albumId]){
      return;
    }

    _library[albumId].status = AppConstants.AlbumStatus.DOWNLOADED;
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

    case ActionTypes.FETCH_LIBRARY_SUCCESS:
      MusicStore.init(action.rawSongs);
      MusicStore.emitChange();
      break;

    case ActionTypes.DOWNLOAD_ALBUM:
      MusicStore.startDownload(action.album);
      MusicStore.emitChange();
      break;

    case ActionTypes.DOWNLOAD_ALBUM_SUCCESS:
      MusicStore.finishDownload(action.albumId);
      MusicStore.emitChange();
      break;

    default:
      // do nothing
  }

});

module.exports = MusicStore;