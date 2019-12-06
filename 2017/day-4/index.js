const prepareInput = input =>
  input
    .trim()
    .split('\n')
    .map(e => e.split(' '))

const prepareInput2 = input => prepareInput(input).map(e => e.map(sortWord))

const sortWord = word =>
  word
    .split('')
    .sort()
    .join('')

const isValid = (acc, el) =>
  acc + el.sort().reduce((a, c, i, l) => (c === l[i + 1] ? 0 : a), 1)

module.exports = input => ({
  part1: () => prepareInput(input).reduce(isValid, 0),
  part2: () => prepareInput2(input).reduce(isValid, 0)
})
