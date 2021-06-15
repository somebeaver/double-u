import { pass } from './pass.js'
import { fail } from './fail.js'

/**
 * Checks that the given arg is true. Passes the test if so, else fails.
 * 
 * @param {string} thing - The thing that must be true.
 * @param {string} test - Test name.
 * @param {string} msg - Message associated with this test.
 */
export function mustBeTrue(thing, test, msg) {
  if (typeof thing === 'boolean' && thing === true) {
    pass(test, msg)
  } else {
    fail(test, msg)
  }
}