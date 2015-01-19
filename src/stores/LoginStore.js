var AppDispatcher = require('../dispatchers/AppDispatcher');
var AppConstants  = require('../constants/AppConstants');
var EventEmitter  = require('events').EventEmitter;
var assign        = require('object-assign');

var ActionTypes   = AppConstants.ActionTypes;
var CHANGE_EVENT  = 'change';

var _status = AppConstants.LoginStatus.LOADING;

var LoginStore = assign({}, EventEmitter.prototype, {

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getStatus: function() {
    return _status;
  }

});

LoginStore.dispatchToken = AppDispatcher.register(function(payload) {
  var action = payload.action;

  switch(action.type) {

    case ActionTypes.EXECUTE_SIGNIN_SUCCESS:
      _status = AppConstants.LoginStatus.SIGNED_IN;
      LoginStore.emitChange();
      break;

    case ActionTypes.EXECUTE_SIGNIN_LOGIN_EMPTY:
    case ActionTypes.EXECUTE_SIGNIN_FAIL:
      _status = AppConstants.LoginStatus.SIGNED_OUT;
      LoginStore.emitChange();
      break;

    default:
      // do nothing
  }

});

module.exports = LoginStore;