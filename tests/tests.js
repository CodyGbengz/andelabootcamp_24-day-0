
'use strict';

const should = require('chai').should();
const myApp = require('../app/getPrimes.js');
 
describe("Get Primes Function", function() {
  it("should exist", function(){
    myApp.getPrimes().should.not.be.undefined;
  })
  it("should return [2,3,5,7] for input of 10", function(){
    myApp.getPrimes(10).should.eql([2,3,5,7]);
  })
  it("should return [2] for input of 2" , function(){
    myApp.getPrimes(2).should.eql([2]);
  })
  it("should return [] for empty", function(){
  	myApp.getPrimes().should.eql([]);
  })
  it("should return [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97] for input of 100 ",function(){
  	myApp.getPrimes(100).should.eql([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]);
  })
  it("should throw an error",function(){
  	myApp.getPrimes('primes').should.eql('please enter a number');
  })
  it("should throw an error",function(){
  	myApp.getPrimes(0).should.eql('input a value above 1');
  	})
  it("should throw an error",function(){
  	myApp.getPrimes(1).should.eql('input a value above 1');
  	})
  it("should throw an error",function(){
  	myApp.getPrimes('').should.eql('please enter a number');
  	})
   it("should throw an error",function(){
  	myApp.getPrimes(-1).should.eql('input a value above 1');
  	})
  it("should return [2,3,5,7,11] for input 11",function(){
  	myApp.getPrimes(11).should.eql([2,3,5,7,11]);
  	})
})