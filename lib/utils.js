var Promise = require('bluebird');

module.exports = {
  error: {
    missingParameter: function(errorMethod) {
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

      errors.forEach(function(error) {
        messages.push(error.message);
      });

      errorObject.name = 'PagarmeError';
      errorObject.message = messages.join(" | ");
      return errorObject;
    };
    return new PagarMeError(response.errors);
  },
  deepCopy: function(source, destination) {
    if (!destination) {
      destination = source;
      if (source) {
        if (this.isArray(source)) {
          destination = deepCopy(source, []);
        } else if (this.isDate(source)) {
          destination = new Date(source.getTime());
        } else if (this.isRegExp(source)) {
          destination = new RegExp(source.source);
        } else if (this.isError(source)) {
          destination = new Error(source.message, source.code || null);
          destination.stack = source.stack || null;
        } else if (this.isObject(source)) {
          destination = this.deepCopy(source, {});
        }
      }
    } else {
      if (source === destination) throw Error("Can't deep copy! Source and destination are identical.");
      if (this.isArray(source)) {
        destination.length = 0;
        for (var i = 0; i < source.length; i++) {
          destination.push(this.deepCopy(source[i]));
        }
      } else {
        for (var key in destination) {
          delete destination[key];
        }
        for (var key in source) {
          destination[key] = this.deepCopy(source[key]);
        }
      }
    }
    return destination;
  },
  mergeOptions: function(from, to) {
    for (var name in from) {
      if (typeof from[name] !== 'undefined' || from[name] !== null) {
        to[name] = from[name];
      }
    }
  },
  isArray: function(value) {
    return value != null && typeof value === 'object' && value.constructor.name === 'Array';
  },

  isString: function(value) {
    return value != null && typeof value === 'string';
  },

  isArray: function(value) {
    return value != null && typeof value === 'object' && value.constructor.name === 'Array';
  },

  isDate: function(value) {
    return value != null && typeof value === 'object' && value.constructor.name === 'Date';
  },

  isRegExp: function(value) {
    return value != null && typeof value === 'object' && value.constructor.name === 'RegExp';
  },

  isError: function(value) {
    return value != null && typeof value === 'object' && value.constructor.name === 'Error';
  },

  isObject: function(value) {
    return value != null && typeof value === 'object';
  }
}