var AppDispatcher = require('../dispatchers/AppDispatcher');
var AppConstants  = require('../constants/AppConstants');
var LoginUtils    = require('../utils/LoginUtils');
var ApiUtils      = require('../utils/ApiUtils');

var ActionTypes = AppConstants.ActionTypes;

module.exports = {

  saveLogin: function(email, password) {
    AppDispatcher.handleServerAction({
      type: ActionTypes.SAVE_LOGIN,
      email: email
    });

    LoginUtils.saveGoogleLogin(email, password)
      .then(ApiUtils.executeSignIn)
      .catch(ApiUtils.onEmptyLogin);
  }
};