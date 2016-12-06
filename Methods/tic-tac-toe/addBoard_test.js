"use strict";

const chai = require('chai');
const expect = chai.expect;
const addBoard = require('./addBoard');

describe('addBoard function test', function() {

  it("addBoard function exists", function() {
    expect(addBoard).to.not.be.undefined;
  });

  it('Adds X to empty board', function() {
    expect(addBoard(['','','','','','','','',''],0)).to.eql(['X','','','','','','','','']);
  });

  it('Adds O to board', function() {
    expect(addBoard(['X','','','','','','','',''],4)).to.eql(['X','','','','O','','','','']);
  });

  it('Adds X to board as last move', function() {
    expect(addBoard(['X','X','O','O','O','X','X','O',''],8)).to.eql(['X','X','O','O','O','X','X','O','X']);
  });  

});


