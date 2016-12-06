"use strict";

const chai = require('chai');
const expect = chai.expect;
const secondMove = require('./secondMove');

describe('secondMove function test', function() {

  it("secondMove function exists", function() {
    expect(secondMove).to.not.be.undefined;
  });

  it('Returns 3 when O player is in position 1', function() {
    expect(secondMove(['X','O','','','','','','',''])).to.equal(3);
  });

  it('Returns 3 when O player is in position 2', function() {
    expect(secondMove(['X','','O','','','','','',''])).to.equal(3);
  });

  it('Returns 1 when O player is in position 3', function() {
    expect(secondMove(['X','','','O','','','','',''])).to.equal(1);
  });

  it('Returns 1 when O player is in position 4', function() {
    expect(secondMove(['X','','','','O','','','',''])).to.equal(1);
  });

  it('Returns 4 when O player is in position 5', function() {
    expect(secondMove(['X','','','','','O','','',''])).to.equal(4);
  });

  it('Returns 1 when O player is in position 6', function() {
    expect(secondMove(['X','','','','','','O','',''])).to.equal(1);
  });

  it('Returns 2 when O player is in position 7', function() {
    expect(secondMove(['X','','','','','','','O',''])).to.equal(2);
  });

  it('Returns 2 when O player is in position 8', function() {
    expect(secondMove(['X','','','','','','','','O'])).to.equal(2);
  });

});