var Rest = require('./rest.js');


module.exports = Rest.extend({
  model: 'recipients',
  
  getBalance: {
    method : 'get',
    path: '/{recipient_id}/balance'
  },
  getOperations: {
    method: 'get',
    path: '/{recipient_id}/balance/operations'
  }
});