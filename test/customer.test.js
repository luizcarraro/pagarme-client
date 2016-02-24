"use strict";

var should  = require('should'),
    helper  = require('./helper'),
    Customer = helper.pagarMe.customer;

var info = {};

describe('Customer', function () {
  it('should be able to create a customer', function (done) {
    
    Customer
      .create(helper.customer)
      .then(function (response) {
        response.should.be.ok;
        info.customer = response;
        done();
      });
  });

  it('should be able to return a customer by id', function (done) {
    Customer
      .findById(info.customer.id)
      .then(function (response) {
        response.should.be.ok;
        response.id.should.be.equal(info.customer.id);
        done();;
      });
  });

  it('should be able to return all available customers', function (done) {
    Customer
      .findAll()
      .then(function (response) {
        response.should.be.ok;
        done();
      });
  });
});
