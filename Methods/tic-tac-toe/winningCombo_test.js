"use strict";

const chai = require('chai');
const expect = chai.expect;
const winningCombo = require('./winningCombo');

describe('winningCombo function test', function() {

  it("winningCombo function exists", function() {
    expect(winningCombo).to.not.be.undefined;
  });

  it('Returns undefined when no argument is passed in', function() {
    expect(winningCombo()).to.equal(undefined);
  });

  it('Returns undefined when the board is empty', function() {
    expect(winningCombo(['','','','','','','','',''])).to.equal(undefined);
  });

  it('Returns undefined when the board is tied', function() {
    expect(winningCombo(['X','O','X','X','O','O','O','X','X'])).to.equal(undefined);
  });

  it('Returns winning combo when a winning array is submitted', function() {
    expect(winningCombo(['X','O','X','O','O','X','','','X'])).to.eql([2,5,8]);
  });

});
