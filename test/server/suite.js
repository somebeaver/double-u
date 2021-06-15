import { testSelectors } from '../selectors.test.js'

/**
 * Runs through each test.
 */
async function testSuite() {
  testSelectors()
}

testSuite()