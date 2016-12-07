"use strict";

const chai = require('chai');
const expect = chai.expect;
const apiMethods = require('./apiMethods');

describe('apiMethods test', function() {

  var mockObject = {
  	body: {
  		board: ['X','X','O','O','O','X','X','O','']
  	}
  }

  var resMockObject = {
  	value: '',
  	json: function(obj) {
  		return resMockObject.value = obj;
  	}
  }

  it("ticTacToe function exists", function() {
    expect(apiMethods.ticTacToe).to.not.be.undefined;
  });

  it('ticTacToe function accepts request and returns completed board', function() {
    apiMethods.ticTacToe(mockObject,resMockObject);
    expect(resMockObject.value).to.eql({board : ['X','X','O','O','O','X','X','O','X']});
  });  

});