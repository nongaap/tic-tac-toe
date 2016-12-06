"use strict";

const chai = require('chai');
const expect = chai.expect;
const firstMove = require('./firstMove');

describe('firstMove function test', function() {

  it("firstMove function exists", function() {
    expect(firstMove).to.not.be.undefined;
  });

  it('Returns corner position 0 when empty board is passed in', function() {
    expect(firstMove(['','','','','','','','',''])).to.equal(0);
  });

  it('Returns center position 4 when corner position 0 is passed in', function() {
    expect(firstMove(['X','','','','','','','',''])).to.equal(4);
  });

  it('Returns center position 4 when side position 1 is passed in', function() {
    expect(firstMove(['','X','','','','','','',''])).to.equal(4);
  });

  it('Returns center position 4 when corner position 2 is passed in', function() {
    expect(firstMove(['','','X','','','','','',''])).to.equal(4);
  });

  it('Returns center position 4 when side position 3 is passed in', function() {
    expect(firstMove(['','','','X','','','','',''])).to.equal(4);
  });

  it('Returns corner position 0 when center position 4 is passed in', function() {
    expect(firstMove(['','','','','X','','','',''])).to.equal(0);
  });

  it('Returns center position 4 when side position 5 is passed in', function() {
    expect(firstMove(['','','','','','X','','',''])).to.equal(4);
  });

  it('Returns center position 4 when corner position 6 is passed in', function() {
    expect(firstMove(['','','','','','','X','',''])).to.equal(4);
  });

  it('Returns center position 4 when side position 7 is passed in', function() {
    expect(firstMove(['','','','','','','','X',''])).to.equal(4);
  });

  it('Returns center position 4 when corner position 8 is passed in', function() {
    expect(firstMove(['','','','','','','','','X'])).to.equal(4);
  });

});


