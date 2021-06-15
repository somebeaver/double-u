import { output } from './output.js'

/**
 * Signals that a test has passed.
 * 
 * @param {string} test - Test name.
 * @param {string} msg - Message associated with this pass.
 */
export function fail(test, msg) {
  output('🛑', test, msg)
}