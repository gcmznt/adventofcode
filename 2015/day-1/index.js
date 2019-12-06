const prepareInput = input => input
  .trim()
  .split('')

const sum = (a, b) => a + b
const mapMove = move => (move === '(') ? 1 : -1
const parseMovements = moves => moves.map(mapMove).reduce(sum, 0)

const goneUnder = function (moves) {
  moves = moves.map(mapMove)
  for (var i = 0, pos = 0; i < moves.length; i++) {
    pos += moves[i]
    if (pos === -1) return ++i
  }
  return -1
}

module.exports = input => ({
  part1: () => parseMovements(prepareInput(input)),
  part2: () => goneUnder(prepareInput(input))
})
