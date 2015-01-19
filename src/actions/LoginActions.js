var AppDispatcher = require('../dispatchers/AppDispatcher');
var AppConstants  = require('../constants/AppConstants');

var ActionTypes = AppConstants.ActionTypes;

module.exports = {

  executeSign: function(email, password) {
    AppDispatcher.handleServerAction({
      type: ActionTypes.EXECUTE_SIGNIN,
      email: email
    });
  },
  executeSignInSuccess: function(error) {
    AppDispatcher.handleServerAction({
      type: ActionTypes.EXECUTE_SIGNIN_SUCCESS,
      error: error
    });
  },
  executeSignInFail: function(email, password) {
    AppDispatcher.handleServerAction({
      type: ActionTypes.EXECUTE_SIGNIN_FAIL,
      error: error
    });
  }
};