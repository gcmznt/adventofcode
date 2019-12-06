const exercise = require('.')

test('Part 1', () => {
  expect(exercise('1122').part1()).toBe(3)
  expect(exercise('1111').part1()).toBe(4)
  expect(exercise('1234').part1()).toBe(0)
  expect(exercise('91212129').part1()).toBe(9)
})

test('Part 2', () => {
  expect(exercise('1212').part2()).toBe(6)
  expect(exercise('1221').part2()).toBe(0)
  expect(exercise('123425').part2()).toBe(4)
  expect(exercise('123123').part2()).toBe(12)
  expect(exercise('12131415').part2()).toBe(4)
})
