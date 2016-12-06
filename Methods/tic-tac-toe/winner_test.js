"use strict";

const chai = require('chai');
const expect = chai.expect;
const winner = require('./winner');

describe('winner function test', function() {

  it("winner function exists", function() {
    expect(winner).to.not.be.undefined;
  });

  it('Returns Tie when a tied board is passed in', function() {
    expect(winner(['X','X','O','O','O','X','X','O','X'])).to.equal('Tie');
  });

  it('Returns X Wins when board with 3 Xs in a row is passed in', function() {
    expect(winner(['X','O','X','','O','X','O','','X'])).to.equal('X Wins');
  });

  it('Returns O Wins when board with 3 Os in a row is passed in', function() {
    expect(winner(['O','X','X','X','O','','','','O'])).to.equal('O Wins');
  });

  it('Returns In Progress when there is no winner but more squares available to continue playing', function() {
    expect(winner(['X','','','','O','','','','X'])).to.equal('In Progress');
  });

});