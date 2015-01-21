var AppConstants  = require('../constants/AppConstants');
var ActionTypes   = AppConstants.ActionTypes;
var ServerActions = require('../actions/ServerActions');
var LoginStore    = require('../stores/LoginStore');
var ipc           = window.requireNode('ipc');

var ApiUtils = {
  fetchLibrary: function() {
    ServerActions.fetchLibrary();

    ipc.send(AppConstants.Channels.MAIN, {
      action: ActionTypes.FETCH_LIBRARY
    });
  },
  signIn: function(config) {
    ServerActions.signIn(config.email);

    ipc.send(AppConstants.Channels.MAIN, {
      action: ActionTypes.SIGN_IN,
      config: config
    });
  },
  downloadAlbum: function(album) {
    ipc.send(AppConstants.Channels.MAIN, {
      action: ActionTypes.DOWNLOAD_ALBUM,
      album: album
    });
  },
  signInSuccess: function(response) {
    ServerActions.signInSuccess(response.data);
    console.log('SUCCESS', response);

    ApiUtils.fetchLibrary();
  },
  signInFail: function(response) {
    ServerActions.signInSuccess(response.error);
    console.log('ERROR', response);
  },
  onEmptyLogin: function(error) {
    ServerActions.onEmptyLogin(error);
    console.log('ERROR', error);
  },
  fetchLibrarySuccess: function(response) {
    ServerActions.fetchLibrarySuccess(response.library.data.items);
  },
  downloadAlbumSuccess: function(response) {
    ServerActions.downloadAlbumSuccess(response.albumId);
  },
};


ipc.on(AppConstants.Channels.MAIN, function(response) {

  switch(response.action) {

    case ActionTypes.SIGN_IN_SUCCESS:
      ApiUtils.signInSuccess(response);
      break;

    case ActionTypes.SIGN_IN_FAIL:
      ApiUtils.signInFail(response);
      break;

    case ActionTypes.FETCH_LIBRARY_SUCCESS:
      ApiUtils.fetchLibrarySuccess(response);
      break;

    case ActionTypes.DOWNLOAD_ALBUM_SUCCESS:
      ApiUtils.downloadAlbumSuccess(response);
      break;
  }
});


module.exports = ApiUtils;