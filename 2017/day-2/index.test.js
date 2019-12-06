const exercise = require('.')

const input1 = `5\t1\t9\t5
7\t5\t3
2\t4\t6\t8`

const input2 = `5\t9\t2\t8
9\t4\t7\t3
3\t8\t6\t5`

test('Part 1', () => {
  expect(exercise(input1).part1()).toBe(18)
})

test('Part 2', () => {
  expect(exercise(input2).part2()).toBe(9)
})
