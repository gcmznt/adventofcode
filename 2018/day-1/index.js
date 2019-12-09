function prepareInput (input) {
  return input.trim().split('\n').map(n => parseInt(n, 10))
}

function sum (a, b) {
  return a + b
}

function findSecondOccurence (list) {
  let i = -1
  let current = 0
  const frequencies = [0]
  while (i++ > -2) {
    current += list[i % list.length]
    if (frequencies.includes(current)) return current
    frequencies.push(current)
  }
}

module.exports = input => ({
  part1: () => prepareInput(input).reduce(sum),
  part2: () => findSecondOccurence(prepareInput(input))
})
