var modelFunctions = {
  // card          : require('./lib/card.js'),
  customer      : require('./lib/customer.js')
  // plan          : require('./lib/plan.js'),
  // subscription  : require('./lib/subscription.js'),
  // payable       : require('./lib/payable.js'),
  // balance       : require('./lib/balance.js'),
  // bank_account  : require('./lib/bank_account.js'),
  // recipient     : require('./lib/recipient.js'),
  // transfer      : require('./lib/transfer.js'),
  // transaction   : require('./lib/transaction.js'),
  // zipcode       : require('./lib/zipcode.js'),
  // fingerprint   : require('./lib/fingerprint.js')
}

function PagarmeClient (key) {
  if(!key) throw { name: 'MissingKey', message: 'A chave do pagarme está faltando'};
  if (!(this instanceof PagarmeClient)) return new PagarmeClient(key);

  this.api = {
      key: key,
      url: 'https://api.pagar.me/1/'
  };

  // Load models functions, if it didnd already
  for (var model in modelFunctions) 
      this[model] = new modelFunctions[model](this);
}; 

module.exports = PagarmeClient;
