var chance = require('chance')();
var rest = require('rest-js');
var ursa    = require('ursa');
var api_key = process.env.PAGARME_KEY || '';

module.exports = {
	pagarMe: require('../index')(api_key || ''),

	customer: {
		document_number: "61842181408",
		document_type: 'cpf',
		name: chance.name(),
		email: chance.email(),
		born_at: chance.birthday(),
		gender: "M",
		phones: [{
			ddi: "55",
			ddd: "11",
			number: "999887766",
		}],
		addresses: [{
			street: chance.word(),
			complementary: "1",
			street_number: "2",
			neighborhood: "none",
			city: chance.city(),
			state: "PR",
			zipcode: "8546000",
			country: "Brasil",
		}]
	},

	creditCard: {
		card_number: '5453010000066167',
		card_holder_name: 'Walter White',
		card_expiration_date: '0319',
		card_cvv: '123'
	},
	stringfiedCreditCard: 'card_number=5453010000066167&card_holder_name=Walter%20White=card_expiration_date=0319&card_cvv=123',
	transaction: {
		amount: 310000,
		postback_url: "http://postback.com/thispostback",
		payment_method: "credit_card",
	},

	generateCardHash: function(done) {
		var that = this;
		var restapi = new rest('https://api.pagar.me/1/', {
			crossDomain: true,
			defaultFormat: '',
			defaultParams: {}
		});
		return restapi.read('transactions/card_hash_key', {
				data: {
					api_key: api_key
				}
			})
			.then(function(response) {
				var key = ursa.createPublicKey(new Buffer(response.public_key));
				var encrypted_string_base64 = key.encrypt(new Buffer(that.stringfiedCreditCard, 'utf8'), 'utf8', 'base64', ursa.RSA_PKCS1_PADDING);
        var card_hash = response.id + '_' + encrypted_string_base64; 
				return card_hash;
			});
	}
};