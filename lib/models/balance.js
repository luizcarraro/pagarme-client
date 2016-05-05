var Rest = require('../rest.js');

module.exports = Rest.extend({
  model: 'balance',

  findAllOperations: Rest.request({
    method : 'get',
    path: '/operations'
  }),
  findOperationsById: Rest.request({
    method : 'get',
    path: '/operations/{operation_id}'
  }),  
});