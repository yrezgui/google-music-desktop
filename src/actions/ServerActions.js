var AppDispatcher = require('../dispatchers/AppDispatcher');
var AppConstants  = require('../constants/AppConstants');

var ActionTypes = AppConstants.ActionTypes;

module.exports = {
  signIn: function(email, password) {
    AppDispatcher.handleServerAction({
      type: ActionTypes.SIGN_IN,
      email: email
    });
  },
  signInSuccess: function(error) {
    AppDispatcher.handleServerAction({
      type: ActionTypes.SIGN_IN_SUCCESS,
      error: error
    });
  },
  signInFail: function(email, password) {
    AppDispatcher.handleServerAction({
      type: ActionTypes.SIGN_IN_FAIL,
      error: error
    });
  },
  onEmptyLogin: function(error) {
    AppDispatcher.handleServerAction({
      type: ActionTypes.SIGN_IN_LOGIN_EMPTY,
      error: error
    });
  },
  fetchLibrary: function() {
    AppDispatcher.handleServerAction({
      type: ActionTypes.FETCH_LIBRARY
    });
  },
  fetchLibrarySuccess: function(rawSongs) {
    AppDispatcher.handleServerAction({
      type: ActionTypes.FETCH_LIBRARY_SUCCESS,
      rawSongs: rawSongs
    });
  },
  downloadAlbum: function(album) {
    AppDispatcher.handleViewAction({
      type: ActionTypes.DOWNLOAD_ALBUM,
      album: album
    });
  },
  downloadAlbumSuccess: function(albumId) {
    AppDispatcher.handleServerAction({
      type: ActionTypes.DOWNLOAD_ALBUM_SUCCESS,
      albumId: albumId
    });
  }
};