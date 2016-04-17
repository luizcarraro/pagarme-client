var models = {
  bankAccount   : require('./lib/models/bank_account.js'),
  customer      : require('./lib/models/customer.js'),
  transaction   : require('./lib/models/transaction.js'),
  recipient     : require('./lib/models/recipient.js')
}

function PagarmeClient (key) {
  if(!key) throw { name: 'MissingKey', message: 'A chave do pagarme está faltando'};
  if (!(this instanceof PagarmeClient)) return new PagarmeClient(key);

  this.api = {
      key: key,
      url: 'https://api.pagar.me/1/'
  };

  // Load models methods, if it didnt already
  for (var m in models) 
      this[m] = new models[m](this);
}; 

module.exports = PagarmeClient;
