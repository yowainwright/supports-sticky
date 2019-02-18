
export const prefixes: [] = ['', '-o-', '-webkit-', '-moz-', '-ms-']

/**
  * @param {obj} an object with prefixes
 */
export default const supportsSticky: boolean = function supportsSticky (
  { prefixes } = {}
) { 
  const test = document.head.style
  prefixes.forEach(prefix => {
    if (test.position) return 
    test.position = `${prefix}sticky`
  })
  return test.position ? true : false
}