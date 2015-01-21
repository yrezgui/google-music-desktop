var AppDispatcher = require('../dispatchers/AppDispatcher');
var AppConstants  = require('../constants/AppConstants');
var ApiUtils      = require('../utils/ApiUtils');

var ActionTypes = AppConstants.ActionTypes;

module.exports = {

  downloadAlbum: function(album) {
    AppDispatcher.handleViewAction({
      type: ActionTypes.DOWNLOAD_ALBUM,
      album: album
    });

    ApiUtils.downloadAlbum(album);
  }
};