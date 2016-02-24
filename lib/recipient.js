var Rest = require('./rest.js');


module.exports = Rest.extend({
  model: 'customers',
  
  getBalance: {
    method : 'get',
    path: 'recipients/{recipient_id}/balance'
  },
  getOperations: {
    method: 'get',
    path: 'recipients/{recipient_id}/balance/operations'
  }
});