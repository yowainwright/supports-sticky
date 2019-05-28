/**
 * prefixes
 * ----
 * an array of strings used to test
 * if position sticky is implemented
 * in a browser with a prefix
 */

export const browserPrefixes: string[] = ['', '-o-', '-webkit-', '-moz-', '-ms-']

/**
  * supportsSticky
  * ----
  * returns a boolean (true|false)
  * of whether position sticky is defined
  * @param {obj} an object with prefixes
  * @returns {boolean}
 */
export const supportsSticky =
  function supportsSticky({ prefixes = browserPrefixes, testEl = document.head.style } = {}): object {
    const test = testEl
    prefixes.forEach((prefix: string) => test.position
      ? test.position
      : test.position = `${prefix}sticky`)
    return {
      stickyPosition: test.position || null,
      stickySupport: test.position ? true : false,
    }
  }
