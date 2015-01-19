var keyMirror = require('keymirror');

module.exports = {

  ActionTypes: keyMirror({
    SAVE_LOGIN: null,
    FETCH_SONGS: null,
    RECEIVE_SONGS_SUCCESS: null,
    RECEIVE_SONGS_FAIL: null,
    DOWNLOAD_ALBUM: null,
    START_DOWNLOADING_SONG: null,
    FINISH_DOWNLOADING_SONG: null,
    EXECUTE_SIGNIN: null,
    EXECUTE_SIGNIN_SUCCESS: null,
    EXECUTE_SIGNIN_FAIL: null,
    EXECUTE_SIGNIN_LOGIN_EMPTY: null
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
  }),

  LoginStatus: keyMirror({
    LOADING: null,
    SIGNED_IN: null,
    SIGNED_OUT: null
  }),

  Login: {
    EMAIL_KEY: 'googleEmail',
    PASSWORD_KEY: 'googlePassword',
  },

  Folders: {
    HOME: process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE,
    DOWNLOADS: '/Downloads'
  },

  Errors: keyMirror({
    EMPTY_LOGIN: null,
    WRONG_LOGIN: null
  }),

  Channels: keyMirror({
    MAIN: null
  })

};