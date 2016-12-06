"use strict";

const chai = require('chai');
const expect = chai.expect;
const gameCounter = require('./gameCounter');

describe('gameCounter function test', function() {

  it("gameCounter function exists", function() {
    expect(gameCounter).to.not.be.undefined;
  });

  it('Empty board returns 0', function() {
    expect(gameCounter(['','','','','','','','',''])).to.equal(0);
  });

  it('Board with 2 moves returns 2', function() {
    expect(gameCounter(['X','','','','O','','','',''])).to.equal(2);
  });

  it('Board with 1 move returns 1', function() {
    expect(gameCounter(['X','','','','','','','',''])).to.equal(1);
  });

  it('Board with 8 moves returns', function() {
    expect(gameCounter(['X','X','O','O','O','X','X','O',''])).to.equal(8);
  });  

});


