var rest = require('rest-js'),
	_ = require('lodash'),
	utils = require('./utils.js'),
	error = utils.error;
apiUrl = 'https://api.pagar.me/1/';

var options = {
	crossDomain: true,
	defaultFormat: '',
	defaultParams: {}
};

function Rest(Pagarme) {
	options.defaultParams.api_key = Pagarme.api.key;
	this.restapi = new rest(apiUrl, options);
	this.restapi.request = require('./request');
};

Rest.extend = function(properties) {
	var that = this;
	var constructor = function() {
		that.apply(this, arguments);
	};

	constructor.prototype = Object.create(that.prototype);

	for (var i in properties) {
		constructor.prototype[i] = properties[i];
	}

	return constructor;
};

Rest.request = function(obj) {

	var buildPath = obj.path ? obj.path : '';
	var params = buildPath.match(/\{(\w+)\}/g) || [];
	var that = this;

	return function() {
		var args = Array.prototype.slice.call(arguments);
		var body = args.length > params.length && args.pop() || {};

		if (args.length < params.length) throw error.missingParameter(this.model + buildPath);

		params.forEach(function(param) {
			buildPath = buildPath.replace(param, args[0]);
			args = args.slice(1);
		});

		var pathUrl = this.model + buildPath;

		// console.log('Method: ', obj.method, ' ', pathUrl);

		return this.restapi
			.request(obj.method, pathUrl, {
				data: body
			})
			.then(function(response) {
				return response;
			})
	}
};

// Basic methods for all models
Rest.prototype = {
	findAll: Rest.request({
		method: 'get',
	}),

	findById: Rest.request({
		method: 'get',
		path: '/{id}'
	}),

	create: Rest.request({
		method: 'post'
	}),

	update: Rest.request({
		method: 'put',
		path: '/{id}'
	}),

	cancel: Rest.request({
		method: 'post',
		path: '/{id}/cancel'
	})
};

module.exports = Rest;