function prepareInput (input) {
  return input.trim()
}

module.exports = input => ({
  part1: () => prepareInput(input),
  part2: () => prepareInput(input)
})
