var Rest = require('../rest.js');

module.exports = Rest.extend({
  model: 'subscriptions',

  cancel: Rest.request({
    method : 'get',
    path: '/{subscription_id}/cancel'
  }) 
});