var Promise = require('bluebird');

module.exports = {
	error: {
		missingParameter: function (errorMethod) {
			return {
				name: 'MissingParameters',
				message: 'Parâmetros insuficientes para o método ' + errorMethod
			}
		}
	},
	processErrors: function(response) {
    var PagarMeError = function(errors) {
      var messages = [];
      var errorObject = new Error();

      errors.forEach(function (error) {
      	messages.push(error.message);
      });

      errorObject.name = 'PagarmeError';
      errorObject.message = messages.join(" | ");
      return errorObject;
    };
    return new PagarMeError(response.errors);
  }	
}