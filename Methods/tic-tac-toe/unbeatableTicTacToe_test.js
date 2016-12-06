"use strict";

const chai = require('chai');
const expect = chai.expect;
const unbeatableTicTacToe = require('./unbeatableTicTacToe');
const winner = require('./winner');

describe('unbeatableTicTacToe function test', function() {

  it("unbeatableTicTacToe function exists", function() {
    expect(unbeatableTicTacToe).to.not.be.undefined;
  });

  it("unbeatableTicTacToe results in a tie when the function plays itself", function() {
    var input = ['','','','','','','','',''];
    for(var i = 0; i < 9; i++) {
      input = unbeatableTicTacToe(input);
    }
    var expected = 'Tie'
    var actual = winner(input);
    expect(actual).to.equal(expected);
  });

});