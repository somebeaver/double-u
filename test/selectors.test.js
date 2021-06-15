import __ from '../index.js'
import { output, pass, fail, mustBeTruthy } from './tools/index.js' 

export function testSelectors() {
  output('<h3>Running all tests in double-u test suite</h3>')
  window.testStartTime = performance.now()

  /**
   * Init a new router instance
   */
  try {
    mustBeTruthy(__('#perm1').els.length, 'Single ID string CSS selector')
    mustBeTruthy(__('.odd').els.length, 'Class string CSS selector')
  } catch (e) { fail(e) }

}