"use strict";

var should = require('should');
var helper = require('./helper');
var Transaction = helper.pagarMe.transaction;
var _ = require('lodash');
var info = {};

describe.only('Transaction', function() {
  it('should be able to create a transaction', function(done) {
    helper.generateCardHash().then(function(cardhash) {
      var transaction = _.extend(helper.transaction, {
        card_hash: cardhash
      });
      Transaction
        .create(transaction)
        .then(function(response) {
          console.log(response);
          response.should.be.ok;
          info.transaction = response;
          done();
        });
    });
  });

  it('should not be able to update a transaction', function(done) {
    Transaction.update(info.transaction.id,{capture: true}).then(function (response) {
      done('should not be abe to update');
    })
    .catch(function (error) {
      should.exist.error;
      done();
    })
  });  

  // it('should be able to return a transaction by id', function(done) {
  //   console.log('TODO');
  //   done()
  // });

  // it('should be able to return all transactions', function(done) {
  //   console.log('TODO');
  //   done()
  // });

  // it('should find all spit rules', function(done) {
  //   console.log('TODO');
  //   done()
  // });

  // it('should find a split rule by id', function(done) {
  //   console.log('TODO');
  //   done()
  // });

  // it('should find all payables of a transaction', function(done) {
  //   console.log('TODO');
  //   done()
  // });
});