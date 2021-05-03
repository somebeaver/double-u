import { __Object } from './src/double-u.js'

/**
 * Factory function.
 * 
 * @param {*} selector - Selector for `__Object` constructor.
 */
export default function __(selector) {
  return new __Object(selector)
}