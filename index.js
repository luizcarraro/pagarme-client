var modelFunctions = {
  card          = require('./lib/card.js'),
  customer      = require('./lib/customer.js'),
  plan          = require('./lib/plan.js'),
  subscription  = require('./lib/subscription.js'),
  payable       = require('./lib/payable.js'),
  balance       = require('./lib/balance.js'),
  bank_account  = require('./lib/bank_account.js'),
  recipient     = require('./lib/recipient.js'),
  transfer      = require('./lib/transfer.js'),
  transaction   = require('./lib/transaction.js'),
  zipcode       = require('./lib/zipcode.js'),
  fingerprint   = require('./lib/fingerprint.js')
}

function pagarMe (key) {
  if (!(this instanceof PagarMe)) {
    return new PagarMe(key);
  }

  this._api = {
      key: key,
      endpoint: 'https://api.pagar.me',
      version: '1'
  };

  this._loadModelFuntions();
};


PagarMe.prototype = {
  _loadModelFuntions: function() {
    for (var model in modelFunctions) this[model] = new models[model](this);
  }
};

module.exports = pagarMe;
