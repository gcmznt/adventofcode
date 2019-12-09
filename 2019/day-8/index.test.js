const path = require('path')
const input = require('fs').readFileSync(path.join(__dirname, 'input.txt'), 'utf8')

const exercise = require('.')

test('Part 1', () => {
  expect(exercise(input).part1()).toBe(1224)
})

test('Part 2', () => {
  expect(exercise(input).part2()).toBe('111101110011110100101110010000100100001010010100101110011100001001001010010100001001001000100101110010000100101000010010101001111011100111100110010010')
})
