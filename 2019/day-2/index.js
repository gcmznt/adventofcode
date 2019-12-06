const prepareInput = (input, nuon, verb) => input
  .trim()
  .split(',')
  .map(n => parseInt(n, 10))
  .map((n, i) => i === 1 ? nuon : n)
  .map((n, i) => i === 2 ? verb : n)

const execute = (input, pos = 0) => {
  switch (input[pos]) {
    case 99:
      return input[0]
    case 1:
      input[input[pos + 3]] = input[input[pos + 1]] + input[input[pos + 2]]
      break
    case 2:
      input[input[pos + 3]] = input[input[pos + 1]] * input[input[pos + 2]]
      break
  }
  return execute(input, pos + 4)
}

const find = (input, value) => {
  for (let i = 0; i < 10000; i++) {
    if (execute(prepareInput(input, i % 100, Math.floor(i / 100))) === value) {
      return 100 * (i % 100) + Math.floor(i / 100)
    }
  }
}

module.exports = input => ({
  part1: () => execute(prepareInput(input, 12, 2)), // 5534943
  part2: () => find(input, 19690720) // 7603
})
