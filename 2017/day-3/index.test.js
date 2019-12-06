const exercise = require('.')

test('Part 1', () => {
  expect(exercise('1').part1()).toBe(0)
  expect(exercise('12').part1()).toBe(3)
  expect(exercise('23').part1()).toBe(2)
  expect(exercise('1024').part1()).toBe(31)
})

test('Part 2', () => {
  expect(exercise('1').part2()).toBe(2)
  expect(exercise('24').part2()).toBe(25)
  expect(exercise('150').part2()).toBe(304)
  expect(exercise('747').part2()).toBe(806)
})
