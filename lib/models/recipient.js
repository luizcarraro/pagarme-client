var Rest = require('../rest.js');


module.exports = Rest.extend({
  model: 'recipients',
  
  findBalance: Rest.request({
    method : 'get',
    path: '/{recipient_id}/balance'
  }),
  findAllOperations: Rest.request({
    method: 'get',
    path: '/{recipient_id}/balance/operations'
  }),
  findOperationById: Rest.request({
  	method: 'get',
  	path: '/{recipient_id}/balance/operations/{operation_id}'
  })
});
