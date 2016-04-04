var utils = require('./utils.js');
var RestRequest = require('rest-js').RestRequest;
var Promise = require('bluebird');

module.exports = function( /*method, path, [options], callback*/ ) {
	var self = this;
	var args = Array.prototype.slice.call(arguments, 0);
	var callback = function() {};
	var options = {};
	if (args.length > 2) {
		callback = args.pop() || function() {};

		if (typeof callback === 'object') {
			options = callback;
			callback = function() {};
		}
	}
	if (args.length === 3) {
		options = args.pop() || {};
	}
	var method = args.shift();
	var path = args.shift();
	var resolve, reject;
	var promise = new Promise(function(_resolve, _reject) {
		resolve = _resolve;
		reject = _reject;
	});

	// prepare request options
	var requestOpts = utils.deepCopy(this.defaultRequestOptions, {});

	// set baseUrl and path
	requestOpts.baseUrl = this.baseUrl;
	requestOpts.path = path;

	// mix in provided options
	// params need mixing on param level
	if (options.params) {
		if (!requestOpts.params) {
			requestOpts.params = {};
		}
		utils.mergeOptions(options.params, requestOpts.params);
		delete options.params; // delete params to prevent mixing them again
	}
	utils.mergeOptions(options, requestOpts);

	// construct full url
	var url = this.baseUrl + path;
	method = method.toUpperCase();

	var request = new RestRequest(method, url, requestOpts);

	request.setOptions(requestOpts);
	request.prepare();

	// attach format to url
	var urlParts = request.url.split('?');

	if (request.format) {
		urlParts[0] += '.' + request.format;
	}

	request.url = urlParts.join('?');

	// apply request middlewares
	this.executeFilters('request', null, request, null, onRequestFilters);

	function onRequestFilters(err) {
		var cachedResponse;
		if (!options.noCache && request.method === 'GET' && self.cacheLifetime > 0) {
			cachedResponse = self.getCached(request.url);
		}

		if (cachedResponse) {
			onResponse(cachedResponse);
		} else {
			request.send(onResponse);
		}

		function onResponse(response) {
			// apply response middlewares
			self.executeFilters('response', err, request, response, onResponseFilters);

			function onResponseFilters(err) {
				// apply error filters
				self.executeFilters('error', err, request, response, onErrorFilters);
			}

			function onErrorFilters(error) {
				response.error = error;
				finalize();
			}

			function finalize() {
				// cache response, but do not cache already cached response
				if (self.cacheLifetime > 0 && !cachedResponse) {
					self.setCached(request.url, response);
				}

				callback(response.error, response.data);

				if (response.error) {
					var processedErrors = utils.processErrors(response.data);
					// throw processedErrors;
					return reject(processedErrors);
				}

				return resolve(response.data);
			}
		}
	}

	return promise;
};