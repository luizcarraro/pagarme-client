"use strict";

var should = require('should');
var helper = require('./helper');
var Recipient = helper.pagarMe.recipient;
var _ = require('lodash');
var info = {};

describe('#Recipient', function() {
  var recipient = {}
  it('should be able to create a recipient', function(done) {
    Recipient.create(helper.recipient)
      .then(function(response) {
        response.should.be.ok;
        recipient.id = response.id;
        done();
      });
  });

  it('should update a recipient', function(done) {
    Recipient
      .update(recipient.id, {transfer_day: 5})
      .then(function(response) {
        response.transfer_day.should.be.ok;
        response.transfer_day.should.be.equal(5);
        done();
      });
  });

  it('should return all recipients', function(done) {
    Recipient
      .findAll()
      .then(function (response) {
        response.should.be.instanceof(Array);
        done();
      });
  });

  it('should return a recipient balance', function(done) {
    Recipient
      .findBalance(recipient.id)
      .then(function (response) {
        response.should.have.property('available');
        response.should.have.property('transferred');
        response.should.have.property('waiting_funds');
        done();
      });
  });

  it('should return a list of recipient operations', function(done) {
    Recipient
      .findAllOperations(recipient.id)
      .then(function (response) {
        response.should.be.instanceof(Array);
        done();
      });
  });

  it('should return a especififc recipient operation by id', function(done) {
    console.log('         TODO: it needs an operation to test it');
    done();
  });
});