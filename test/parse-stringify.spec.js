const assert = require('assert')
const { parse, stringify } = require('../parse-stringify')

describe('The stringify function', () => {
    it('should stringify an object into a valid query string', () => {
        const actual = stringify({ by: 'kati-frantz' })
        const expected = 'by=kati-frantz'

        assert.equal(actual, expected)
    })
})

describe('The parse function', () => {
    it('should parse a query string into an object', () => {
        const actual = parse('?by=kati-frantz')
        const expected = { by: 'kati-frantz' }

        assert.deepEqual(actual, expected)
    })
})

/*use deepEqual if you have to compare object properties
Numbers, strings, booleans, null, and undefined are values, and are compared as you might expect. 1 == 1, 'a' == 'a', and so on. The difference between === and == in the case of values is that == will attempt to perform type conversion first, which is why '1' == 1 but not '1' === 1.

Arrays, on the other hand, are objects. === and == in this case do not signify that the operands are semantically equal, but that they refer to the same object.

    what is the difference between assert.equal and assert.deepEqual?

assert.equal behaves as explained above. It actually fails if the arguments are !=, as you can see in the source. Thus it fails for your arrays of numbers strings because although they are essentially equivalent, they are not the same object.

Deep (aka structural) equality, on the other hand, does not test whether the operands are the same object, but rather that they're equivalent. In a sense, you could say it forces objects to be compared as though they're values.

var a = [1,2,3]  
var b = a              // As a and b both refer to the same object
a == b                 // this is true
a === b                // and this is also true

a = [1,2,3]            // here a and b have equivalent contents, but do not
b = [1,2,3]            // refer to the same Array object.
a == b                 // Thus this is false.

assert.deepEqual(a, b) // However this passes, as while a and b are not the 
                       // same object, they are still arrays containing 1, 2, 3

assert.deepEqual(1, 1) // Also passes when given equal values

var X = function() {}
a = new X
b = new X
a == b                 // false, not the same object
assert.deepEqual(a, b) // pass, both are unadorned X objects
b.foo = 'bar'
assert.deepEqual(a, b) // fail!
 */