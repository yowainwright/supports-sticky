import {

  supportsSticky
} from '../index'

const scenarios = [
  {
    input: {},
    output: true,
  },
]

scenarios.forEach(function testScenario(scenario) {
  test(`test supportsSticky`, () => {
    const result = supportsSticky(scenario.input)
    expect(result).toBe(scenario.output)
  })
})
