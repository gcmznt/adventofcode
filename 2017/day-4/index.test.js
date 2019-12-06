const exercise = require('.')

const input1 = `aa bb cc dd ee
aa bb cc dd aa
aa bb cc dd aaa`

const input2 = `abcde fghij
abcde xyz ecdab
a ab abc abd abf abj
iiii oiii ooii oooi oooo
oiii ioii iioi iiio`

test('Part 1', () => {
  expect(exercise(input1).part1()).toBe(2)
})

test('Part 2', () => {
  expect(exercise(input2).part2()).toBe(3)
})
