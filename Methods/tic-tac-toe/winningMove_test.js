"use strict";

const chai = require('chai');
const expect = chai.expect;
const winningMove = require('./winningMove');

describe('winningMove function test', function() {

  it("winningMove function exists", function() {
    expect(winningMove).to.not.be.undefined;
  });

  it('Returns false when the board is empty', function() {
    expect(winningMove(['','','','','','','','',''])).to.equal(false);
  });

  it('Returns false when no winning move is available', function() {
    expect(winningMove(['X','','','','O','','','',''])).to.equal(false);
  });

  it('Returns winning move when when available', function() {
    expect(winningMove(['X','O','','','X','','','',''])).to.eql(8);
  });

});
