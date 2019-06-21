import { debounce } from 'lodash'

/**
 * prefixes
 * an array of strings used to test if position sticky is implemented
 */
export const browserPrefixes: string[] = ['', '-o-', '-webkit-', '-moz-', '-ms-']

/**
 * supportsSticky
 * @param {obj} an object with prefixes
 * @returns {boolean}
 * returns a boolean (true|false) of whether position sticky is defined
 */
export const supportsSticky = ({ prefixes = browserPrefixes, testEl = document.head.style } = {}): object => {
  const test = testEl
  prefixes.forEach((prefix: string) => test.position
    ? test.position
    : test.position = `${prefix}sticky`)
  const stickyPosition = test.position || 'fixed'
  return {
    stickyPosition,
    stickySupport: stickyPosition !== 'fixed' ? true : false,
  }
}

/**
 * setSelector
 * @param element
 */
export const setSelector = (element: HTMLElement | string): HTMLElement | null => {
  return element instanceof HTMLElement
    ? element
    : document.querySelector(element)
}

/**
 * distanceToElement
 * @param element
 * calculates the distance from the top of a webpage to an element
 */
export const distanceToElement = (element: HTMLElement | string) => {
  const el = setSelector(element)
  return !el ? null : el.getBoundingClientRect().top
}

/**
 * monitorDistanceToElement
 * @param element
 * @param time
 * re-calculates the distance from the top of a webpage to an element when a window is resized
*/
export const monitorDistanceToElement = (element: HTMLElement | string, time: number = 100): void => {
  distanceToElement(element)
  window.addEventListener("resize", debounce(() => distanceToElement(element), time))
}
