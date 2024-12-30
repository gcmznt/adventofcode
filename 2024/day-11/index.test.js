const path = require('path')
const input = require('fs').readFileSync(path.join(__dirname, 'input.txt'), 'utf8')

const exercise = require('.')

test('Part 1', () => {
  expect(exercise(input).part1()).toBe('123')
})

test('Part 2', () => {
  expect(exercise(input).part2()).toBe('123')
})
