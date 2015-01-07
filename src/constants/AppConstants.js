var keyMirror = require('keymirror');

module.exports = {

  ActionTypes: keyMirror({
    RECEIVE_REMOTE_ARTISTS: null,
    RECEIVE_REMOTE_ALBUMS: null,
    RECEIVE_REMOTE_SONGS: null
  }),

  PayloadSources: keyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null
  })

};