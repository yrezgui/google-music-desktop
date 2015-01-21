var keyMirror = require('keymirror');

module.exports = {

  ActionTypes: keyMirror({
    SAVE_LOGIN: null,
    FETCH_LIBRARY: null,
    FETCH_LIBRARY_SUCCESS: null,
    FETCH_LIBRARY_FAIL: null,
    DOWNLOAD_ALBUM: null,
    DOWNLOAD_ALBUM_SUCCESS: null,
    DOWNLOAD_ALBUM_FAIL: null,
    SIGN_IN: null,
    SIGN_IN_SUCCESS: null,
    SIGN_IN_FAIL: null,
    SIGN_IN_LOGIN_EMPTY: null
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
    DOWNLOADS: '/Downloads/'
  },

  Errors: {
    EMPTY_LOGIN: 'EMPTY_LOGIN',
    WRONG_LOGIN: 'WRONG_LOGIN',
    EXISTING_FOLDER: 'EEXIST'
  },

  Channels: keyMirror({
    MAIN: null
  })

};