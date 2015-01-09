var AppDispatcher = require('../dispatchers/AppDispatcher');
var AppConstants  = require('../constants/AppConstants');

var ActionTypes = AppConstants.ActionTypes;

module.exports = {

  receiveLocalSongs: function(rawSongs) {
    AppDispatcher.handleServerAction({
      type: ActionTypes.RECEIVE_LOCAL_SONGS,
      rawSongs: rawSongs
    });
  }
};