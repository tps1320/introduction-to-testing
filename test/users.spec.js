const assert = require('assert')
const { findUserByEmail, findUserById } = require('../users')

describe('The findUserByEmail function' , () => {
    it('finds a user by email', done => {
        findUserByEmail('bahdcoder@gmail.com').then(response => {
            assert.equal(response.message, 'User found successfully.')

            done()
        })
    })

    it('finds a user by email (Using the return promise method)', () => {
        return findUserByEmail('bahdcoder@gmail.com').then(response => {
            assert.equal(response.message, 'User found successfully.')
        })
    })

    it('finds a user by email (Using async/await)', async () => {
        const response = await findUserByEmail('bahdcoder@gmail.com')

        assert.equal(response.message, 'User found successfully.')
    })
})
/*
3 ways to test async functions:

* done() method
* returning promise
* async await

1. Using a callback function
The function passed as second argument to it() can be passed an optional callback function as its first argument. When this callback function is passed, Mocha knows that the test is for asynchronous functionality. Conventionally, the callback function is named done, but you are at liberty to use any identifier you choose.
it('test expectation', function(done) {
// test asynchronous code
// call done() to terminate test and proceed to the next test
}
There are a few things to note about the done callback:
    The done() callback must be called for Mocha to terminate the test and proceed to the next test, otherwise the test keeps running until the timeout reaches.
    The done() callback should not be called more than once within an it() function block. Calling it multiple times will throw an error.
    The done() callback is a Node-style callback, hence it can take an Error instance (err) as its first argument.
    Calling the done() callback with an Error instance causes the test to fail with the given error.

2. Using promises
If you are developing in an environment with support for promises, it’s likely that most of the asynchronous operations will be based on promises. Mocha also makes it possible for you to test asynchronous code that uses promises.
Whenever you return a promise from the function passed to it(), Mocha knows that the functionality to be tested is asynchronous, and so it waits for the promise to be fulfilled before proceeding to the next test.
From Mocha v3.0.0 and newer, calling the done() callback when a promise is returned will result in an exception, since this is not allowed. However, in older versions of Mocha, the call is ignored.

3. Using async / await
For environments that support the more recent async / await syntax, Mocha also supports passing async functions as second argument to it().
*/