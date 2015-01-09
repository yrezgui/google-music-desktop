var request       = require('superagent');
var AppConstants  = require('../constants/AppConstants');
var ServerActions = require('../actions/ServerActions');

module.exports = {

  fetchLocalSongs: function() {
    request
      .get('data.json')
      .end(function(response){
        if (!response.body.data && !response.body.data.items) {
          return;
        }

        ServerActions.receiveLocalSongs(response.body.data.items);
      });
  }
};