"use strict";

var should = require('should');
var helper = require('./helper');
var Recipient = helper.pagarMe.recipient;
var _ = require('lodash');
var info = {};

describe.only('Recipient', function() {
  it('should be able to create a recipient', function(done) {
    Recipient.create(helper.recipient)
      .then(function (response) {
        response.should.be.ok;
        done();
      });
  });

});