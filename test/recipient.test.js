"use strict";

var should = require('should');
var helper = require('./helper');
var Recipient = helper.pagarMe.recipient;
var _ = require('lodash');
var info = {};

describe('#Recipient', function() {
  it('should be able to create a recipient', function(done) {
    Recipient.create(helper.recipient)
      .then(function(response) {
        response.should.be.ok;
        done();
      });
  });

  it('should update a recipient', function(done) {
    console.log('   TODO');
    done();
  });

  it('should return all recipients', function(done) {
    console.log('   TODO');
    done();
  });

  it('should return a recipient balance', function(done) {
    console.log('    TODO');
    done();
  });

  it('should return a list of recipient operations', function(done) {
    console.log('    TODO');
    done();
  });

  it('should return a especififc recipient operation by id', function(done) {
    console.log('    TODO');
    done();
  });
});