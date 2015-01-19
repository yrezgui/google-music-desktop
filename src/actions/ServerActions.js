var AppDispatcher = require('../dispatchers/AppDispatcher');
var AppConstants  = require('../constants/AppConstants');

var ActionTypes = AppConstants.ActionTypes;

module.exports = {
  executeSignIn: function(email, password) {
    AppDispatcher.handleServerAction({
      type: ActionTypes.EXECUTE_SIGNIN,
      email: email
    });
  },
  onSignInSuccess: function(error) {
    AppDispatcher.handleServerAction({
      type: ActionTypes.EXECUTE_SIGNIN_SUCCESS,
      error: error
    });
  },
  onSignInFail: function(email, password) {
    AppDispatcher.handleServerAction({
      type: ActionTypes.EXECUTE_SIGNIN_FAIL,
      error: error
    });
  },
  onEmptyLogin: function(error) {
    AppDispatcher.handleServerAction({
      type: ActionTypes.EXECUTE_SIGNIN_LOGIN_EMPTY,
      error: error
    });
  },
  fetchSongs: function() {
    AppDispatcher.handleServerAction({
      type: ActionTypes.FETCH_SONGS
    });
  },
  receiveSongs: function(rawSongs) {
    AppDispatcher.handleServerAction({
      type: ActionTypes.RECEIVE_SONGS,
      rawSongs: rawSongs
    });
  },
  downloadAlbum: function(album) {
    AppDispatcher.handleViewAction({
      type: ActionTypes.DOWNLOAD_ALBUM,
      album: album
    });
  },
  downloadSong: function(path, song) {
    AppDispatcher.handleServerAction({
      type: ActionTypes.RECEIVE_LOCAL_SONGS,
      rawSongs: rawSongs
    });
  }
};