var AppConstants  = require('../constants/AppConstants');
var ActionTypes   = AppConstants.ActionTypes;
var ServerActions = require('../actions/ServerActions');
var LoginStore    = require('../stores/LoginStore');
var ipc           = window.requireNode('ipc');

var ApiUtils = {
  fetchSongs: function() {
    ServerActions.fetchSongs();

    ipc.send(AppConstants.Channels.MAIN, {
      action: ActionTypes.FETCH_SONGS
    });
  },
  executeSignIn: function(config) {
    ServerActions.executeSignIn(config.email);

    ipc.send(AppConstants.Channels.MAIN, {
      action: ActionTypes.EXECUTE_SIGNIN,
      config: config
    });
  },
  onSignInSuccess: function(response) {
    ServerActions.onSignInSuccess(response.data);
    console.log('SUCCESS', response);

    ApiUtils.fetchSongs();
  },
  onSignInFail: function(response) {
    ServerActions.onSignInSuccess(response.error);
    console.log('ERROR', response);
  },
  onEmptyLogin: function(error) {
    ServerActions.onEmptyLogin(error);
    console.log('ERROR', error);
  },
  onReceiveSongs: function(response) {
    ServerActions.receiveSongs(response.library.data.items);
  }
};


ipc.on(AppConstants.Channels.MAIN, function(response) {

  switch(response.action) {

    case ActionTypes.EXECUTE_SIGNIN_SUCCESS:
      ApiUtils.onSignInSuccess(response);
      break;

    case ActionTypes.EXECUTE_SIGNIN_FAIL:
      ApiUtils.onSignInFail(response);
      break;

    case ActionTypes.RECEIVE_SONGS_SUCCESS:
      ApiUtils.onReceiveSongs(response);
      break;
  }
});


module.exports = ApiUtils;