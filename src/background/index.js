var fs            = require('fs');
var ipc           = require('ipc');
var AppConstants  = require('../constants/AppConstants');
var PlayMusic     = require('playmusic');
var PlayClient    = new PlayMusic();
var ActionTypes   = AppConstants.ActionTypes;

ipc.on(AppConstants.Channels.MAIN, function(event, request) {

  switch(request.action) {

    case ActionTypes.EXECUTE_SIGNIN:
      signIn(event, request);
      break;

    case ActionTypes.FETCH_SONGS:
      fetchSongs(event, request);
      break;
  }
});


function createAlbumFolder(name, callback) {
  fs.mkdir(AppConstants.Folders.HOME + AppConstants.Folders.DOWNLOADS, function() {
    if(!e || (e && e.code === 'EEXIST')) {
      callback(null);
    } else {
      callback(e);
    }
  });
}

function signIn(event, request) {
  PlayClient.init(
    request.config,
    function success(data) {
      event.sender.send(AppConstants.Channels.MAIN, {
        action: ActionTypes.EXECUTE_SIGNIN_SUCCESS,
        data: data
      });
    },
    function fail(error) {
      event.sender.send(AppConstants.Channels.MAIN, {
        action: ActionTypes.EXECUTE_SIGNIN_FAIL,
        error: error
      });
    }
  );
}

function fetchSongs(event, request) {
  PlayClient.getAllTracks(
    function success(library) {
      event.sender.send(AppConstants.Channels.MAIN, {
        action: ActionTypes.RECEIVE_SONGS_SUCCESS,
        library: library
      });
    },
    function fail(error) {
      event.sender.send(AppConstants.Channels.MAIN, {
        action: ActionTypes.RECEIVE_SONGS_FAIL,
        error: error
      });
    }
  );
}