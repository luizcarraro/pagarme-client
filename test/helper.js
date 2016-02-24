var chance = require('chance')();

module.exports = {
    pagarMe: require('../index')('ak_test_7Sjhb2FHqSy2nDOmVxPEQRVg0eYpc2'),

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
    }
};