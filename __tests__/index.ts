import {
  supportsSticky
} from '../index'

const scenarios = [
  {
    input: {},
    output: {
      stickyPosition: 'sticky',
      stickySupport: true,
    },
  },
]

scenarios.forEach(function testScenario(scenario) {
  test(`test supportsSticky`, () => {
    const result = supportsSticky(scenario.input)
    expect(result).toEqual(scenario.output)
  })
})
