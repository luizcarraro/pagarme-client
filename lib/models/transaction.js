var Rest = require('../rest.js');

module.exports = Rest.extend({
	model: 'transactions',

	capture: Rest.request({
		method: 'post',
		path: '/{transaction_id}/capture'
	}),
	findAllSplitRules: Rest.request({
		method: 'get',
		path: '/{transaction_id}/split_rules'
	}),
	findSplitRulesById: Rest.request({
		method: 'get',
		path: '/{transaction_id}/split_rules/{split_id}'
	}),
	findAllPayables: Rest.request({
		method: 'get',
		path: '/{transaction_id}/payables'
	})
});