const path = require('path')
const input = require('fs').readFileSync(path.join(__dirname, 'input.txt'), 'utf8')

const exercise = require('.')

test('Part 1', () => {
  expect(exercise('+1\n+1\n+1').part1()).toBe(3)
  expect(exercise('+1\n+1\n-2').part1()).toBe(0)
  expect(exercise('-1\n-2\n-3').part1()).toBe(-6)
  expect(exercise(input).part1()).toBe(470)
})

test('Part 2', () => {
  expect(exercise('+1\n-1').part2()).toBe(0)
  expect(exercise('+3\n+3\n+4\n-2\n-4').part2()).toBe(10)
  expect(exercise('-6\n+3\n+8\n+5\n-6').part2()).toBe(5)
  expect(exercise('+7\n+7\n-2\n-7\n-4').part2()).toBe(14)

  // expect(exercise(input).part2()).toBe(790)
})
