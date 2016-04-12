# pagarme-client [![Build Status](https://travis-ci.org/luizcarraro/pagarme-client.svg?branch=master)](https://travis-ci.org/luizcarraro/pagarme-client)
A complete-to-be NodeJs client for [pagar.me](http://www.pagar.me) api requests.

## Installation

To install, simply run

	npm install pagarme-client

or add the following line to your package.json
	
	"pagarme-client": "git+https://git@github.com/luizcarraro/pagarme-client.git#master",

## Usage

	var pagarMe = require('pagarme-client'); 
	
	var data = {
		amount: 15000,
		card_hash: hash,
		postback_url: 'http://mypostback.com/postback'
	};
	
	pagarme.transaction.create(data).then(function(response) {
		console.log('Created pagar.me transaction: ', response.id);
	}

## Examples
	TODO

## Running tests
Just run:

	PAGARME_KEY=ak_test_key npm test

where *ak_test_key* is your pagarme test key (get it from the dashboard profile)

# TODO

- [X] Start usage description
- [X] Describe how to run tests
- [] Create tests for all models and validations
- [] Add Balance model
- [] Add Bank account model
- [] Add Card model
- [X] Add Payable model
- [] Add Plans model
- [] Add Subscription model
- [] Add Transfers model
- [] Add Fingerprint validations
- [] Provide npmjs listing

# License
	
	Copyright (c) 2016 Luiz Carraro <contato at luizcarraro.com>

	Permission is hereby granted, free of charge, to any person obtaining
	a copy of this software and associated documentation files (the
	'Software'), to deal in the Software without restriction, including
	without limitation the rights to use, copy, modify, merge, publish,
	distribute, sublicense, and/or sell copies of the Software, and to
	permit persons to whom the Software is furnished to do so, subject to
	the following conditions:

	The above copyright notice and this permission notice shall be
	included in all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
	EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
	IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
	CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
	TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
	SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
