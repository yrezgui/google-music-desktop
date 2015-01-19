var AppConstants  = require('../constants/AppConstants');
var LoginStore    = require('../stores/LoginStore');

module.exports = {

  getGoogleLogin: function() {
    var prom = new Promise(function(resolve, reject) {
      var email     = window.localStorage.getItem(AppConstants.Login.EMAIL_KEY);
      var password  = window.localStorage.getItem(AppConstants.Login.PASSWORD_KEY);

      if(!email || !password) {
        reject(AppConstants.Errors.EMPTY_LOGIN);
      }

      resolve({email: email, password: password});
    });

    return prom;
  },
  saveGoogleLogin: function(email, password) {
    if(!email || !password) {
      return Promise.reject(AppConstants.Errors.EMPTY_LOGIN);
    }

    try {
      window.localStorage.setItem(AppConstants.Login.EMAIL_KEY, email);
      window.localStorage.setItem(AppConstants.Login.PASSWORD_KEY, password);
    } catch(e) {
      return Promise.reject(e);
    }

    return Promise.resolve({email: email, password: password});
  }
};