var Rest = require('./rest.js');

module.exports = Rest.extend({
	model: 'transactions',

	findAllSplitRules: {
		method: 'get',
		path: 'transactions/{transaction_id}/split_rules'
	},
	findSplitRulesById: {
		method: 'get',
		path: 'transactions/{transaction_id}/split_rules/{split_id}'
	},
	findAllPayables: {
		method: 'get',
		path: 'transactions/{transaction_id}/payables'
	}
});