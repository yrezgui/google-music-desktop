var AppDispatcher = require('../dispatchers/AppDispatcher');
var AppConstants  = require('../constants/AppConstants');
var EventEmitter  = require('events').EventEmitter;
var assign        = require('object-assign');

var ActionTypes   = AppConstants.ActionTypes;
var CHANGE_EVENT  = 'change';

var _albums = [];

var AlbumStore = assign({}, EventEmitter.prototype, {

  init: function(rawAlbums) {
    _albums = rawAlbums;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getAll: function() {
    return _albums;
  },

});

AlbumStore.dispatchToken = AppDispatcher.register(function(payload) {
  var action = payload.action;

  switch(action.type) {

    case ActionTypes.RECEIVE_REMOTE_ALBUMS:
      AlbumStore.init(action.rawAlbums);
      AlbumStore.emitChange();
      break;

    default:
      // do nothing
  }

});

module.exports = AlbumStore;