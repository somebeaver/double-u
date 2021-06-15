import { pass } from './pass.js'
import { fail } from './fail.js'

/**
 * Checks that the given arg is truthy. Passes the test if so, else fails.
 * 
 * @param {string} thing - The thing that must be truthy.
 * @param {string} test - Test name.
 * @param {string} msg - Message associated with this test.
 */
export function mustBeTruthy(thing, test, msg) {
  if (thing) {
    pass(test, msg)
  } else {
    fail(test, msg)
  }
}