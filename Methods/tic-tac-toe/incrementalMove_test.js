"use strict";

const chai = require('chai');
const expect = chai.expect;
const incrementalMove = require('./incrementalMove');

describe('incrementalMove function test', function() {

  it("incrementalMove function exists", function() {
    expect(incrementalMove).to.not.be.undefined;
  });

  it('Returns 2 to block winning move', function() {
    expect(incrementalMove(['X','X','','','O','','','',''])).to.equal(2);
  });

  it('Returns 0 to block winning move', function() {
    expect(incrementalMove(['','X','X','','O','','','',''])).to.equal(0);
  });

  it('Returns 3 to block winning move', function() {
    expect(incrementalMove(['X','','','','O','','X','',''])).to.equal(3);
  });

  it('Returns 7 as optimal move', function() {
    expect(incrementalMove(['X','','','','O','X','','',''])).to.equal(7);
  });

  it('Returns 5 as optimal move', function() {
    expect(incrementalMove(['X','','','','O','','','X',''])).to.equal(5);
  });

  it('Returns 1 as optimal move', function() {
    expect(incrementalMove(['X','','','','O','','','','X'])).to.equal(1);
  });

  it('Returns 2 as optimal move', function() {
    expect(incrementalMove(['','X','','X','O','','','',''])).to.equal(2);
  });

  it('Returns 0 as optimal move', function() {
    expect(incrementalMove(['','X','','','O','X','','',''])).to.equal(0);
  });

  it('Returns 5 as optimal move', function() {
    expect(incrementalMove(['','X','','','O','','X','',''])).to.equal(5);
  });

  it('Returns 0 as optimal move', function() {
    expect(incrementalMove(['','X','','','O','','','X',''])).to.equal(0);
  });

  it('Returns 3 as optimal move', function() {
    expect(incrementalMove(['','X','','','O','','','','X'])).to.equal(3);
  });

  it('Returns 7 as optimal move', function() {
    expect(incrementalMove(['','','X','X','O','','','',''])).to.equal(7);
  });

  it('Returns 1 as optimal move', function() {
    expect(incrementalMove(['','','X','','O','','X','',''])).to.equal(1);
  });

  it('Returns 3 as optimal move', function() {
    expect(incrementalMove(['','','X','','O','','','X',''])).to.equal(3);
  });

  it('Returns 0 as optimal move', function() {
    expect(incrementalMove(['','','','X','O','X','','',''])).to.equal(0);
  });

  it('Returns 0 as optimal move', function() {
    expect(incrementalMove(['','','','X','O','','','X',''])).to.equal(0);
  });

  it('Returns 1 as optimal move', function() {
    expect(incrementalMove(['','','','X','O','','','','X'])).to.equal(1);
  });

  it('Returns 2 as optimal move', function() {
    expect(incrementalMove(['O','','','','X','','','','X'])).to.equal(2);
  });
  
  it('Returns 1 as optimal move', function() {
    expect(incrementalMove(['','','','','O','X','X','',''])).to.equal(1);
  });

  it('Returns 2 as optimal move', function() {
    expect(incrementalMove(['','','','','O','X','','X',''])).to.equal(2);
  });

  //
  it('Returns 4 Returns 4 as optimal move', function() {
    expect(incrementalMove(['X','O','','X','','','O','',''])).to.equal(4);
  });

  it('Returns 4 as optimal move', function() {
    expect(incrementalMove(['X','','O','X','','','O','',''])).to.equal(4);
  });

  it('Returns 4 as optimal move', function() {
    expect(incrementalMove(['X','X','O','O','','','','',''])).to.equal(4);
  });

  it('Returns 6 as optimal move', function() {
    expect(incrementalMove(['X','X','O','','O','','','',''])).to.equal(6);
  });

  it('Returns 2 as optimal move', function() {
    expect(incrementalMove(['X','','','','X','O','','','O'])).to.equal(2);
  });

  it('Returns 4 as optimal move', function() {
    expect(incrementalMove(['X','X','O','','','','O','',''])).to.equal(4);
  });

  it('Returns 4 as optimal move', function() {
    expect(incrementalMove(['X','O','X','','','','','O',''])).to.equal(4);
  });

  it('Returns 6 as optimal move', function() {
    expect(incrementalMove(['X','O','X','','','','','','O'])).to.equal(6);
  });

  it('Returns 3 as last move', function() {
    expect(incrementalMove(['X','O','X','','O','O','O','X','X'])).to.equal(3);
  });


});