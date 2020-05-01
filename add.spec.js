const add = require('./add')
const assert = require('assert')

const result = add(1, 3)
const expected = 4

assert.equal(result, expected, 'Add function does not work properly.')

/*
Node js assert module

The assert.equal() method tests if two values are equal, using the == operator.
If the two values are not equal, an assertion failure is being caused, and the program is terminated.
To compare the values using the === operator, use the assert.strictEqual() method.

assert.equal(value1, value2, message);
Parameter 	Description
value1 	Required. Specifies the first value to be compared
value2 	Required. Specifies the second value to be compared
message 	Optional. Specifies the error message to be assigned to the AssertionError. If omitted, a default message is assigned 
*/