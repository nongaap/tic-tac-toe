"use strict";

const chai = require('chai');
const expect = chai.expect;
const move = require('./move');

describe('move function test', function() {

  it("move function exists", function() {
    expect(move).to.not.be.undefined;
  });

  it('Returns corner position 0 when empty board is passed in', function() {
    expect(move(['','','','','','','','',''])).to.equal(0);
  });

  it('Returns center position 4 when corner position 0 is passed in', function() {
    expect(move(['X','','','','','','','',''])).to.equal(4);
  });

  it('Returns center position 4 when side position 1 is passed in', function() {
    expect(move(['','X','','','','','','',''])).to.equal(4);
  });

  it('Returns center position 4 when corner position 2 is passed in', function() {
    expect(move(['','','X','','','','','',''])).to.equal(4);
  });

  it('Returns center position 4 when side position 3 is passed in', function() {
    expect(move(['','','','X','','','','',''])).to.equal(4);
  });

  it('Returns corner position 0 when center position 4 is passed in', function() {
    expect(move(['','','','','X','','','',''])).to.equal(0);
  });

  it('Returns center position 4 when side position 5 is passed in', function() {
    expect(move(['','','','','','X','','',''])).to.equal(4);
  });

  it('Returns center position 4 when corner position 6 is passed in', function() {
    expect(move(['','','','','','','X','',''])).to.equal(4);
  });

  it('Returns center position 4 when side position 7 is passed in', function() {
    expect(move(['','','','','','','','X',''])).to.equal(4);
  });

  it('Returns center position 4 when corner position 8 is passed in', function() {
    expect(move(['','','','','','','','','X'])).to.equal(4);
  });

});


