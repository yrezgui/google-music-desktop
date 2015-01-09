var keyMirror = require('keymirror');

module.exports = {

  ActionTypes: keyMirror({
    RECEIVE_LOCAL_SONGS: null,
    RECEIVE_REMOTE_SONGS: null
  }),

  PayloadSources: keyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null
  }),

  Library: keyMirror({
    UNKNOWN: null
  }),

  AlbumStatus: keyMirror({
    NOT_DOWNLOADED: null,
    DOWNLOADING: null,
    DOWNLOADED: null
  })

};