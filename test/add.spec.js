const add = require('../add')
const assert = require('assert')

describe('The add function', () => {
    it('adds two numbers', () => {
        const actual = add(1, 3)
        const expected = 4

        assert.equal(actual, expected)
    })
})

/*
A test runner is the library or tool that picks up an assembly (or a source code directory) that contains unit tests,
 and a bunch of settings, and then executes them and writes the test results to the console or log files.
  there are many runners for different languages
  mocha, jest are test runners for javascript


Describe is a function in the Jasmine testing framework. 
It simply describes the suite of test cases enumerated by the "it" functions.
Also used in the mochajs framework
Describe is not part of Javascript, it is a function defined in the library used (namely Jasmine)
*/