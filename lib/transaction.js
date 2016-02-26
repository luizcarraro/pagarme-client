var Rest = require('./rest.js');

module.exports = Rest.extend({
	model: 'transactions',

	caputre: {
		method: 'post',
		path: '{transaction_id}/capture'
	},
	findAllSplitRules: {
		method: 'get',
		path: '{transaction_id}/split_rules'
	},
	findSplitRulesById: {
		method: 'get',
		path: '{transaction_id}/split_rules/{split_id}'
	},
	findAllPayables: {
		method: 'get',
		path: '{transaction_id}/payables'
	}
});