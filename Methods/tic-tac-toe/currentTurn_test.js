"use strict";

const chai = require('chai');
const expect = chai.expect;
const currentTurn = require('./currentTurn');

describe('currentTurn function test', function() {

  it("currentTurn function exists", function() {
    expect(currentTurn).to.not.be.undefined;
  });

  it('Empty board returns X', function() {
    expect(currentTurn(['','','','','','','','',''])).to.equal('X');
  });

  it('Board returns X', function() {
    expect(currentTurn(['X','','','','O','','','',''])).to.equal('X');
  });

  it('Board returns O', function() {
    expect(currentTurn(['X','','','','','','','',''])).to.equal('O');
  });

  it('Last move on board returns X', function() {
    expect(currentTurn(['X','X','O','O','O','X','X','O',''])).to.equal('X');
  });  

});


