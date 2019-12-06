const prepareInput = input => input
  .trim()
  .split('\n')
  .map(function (e) {
    return e.split('x').map(e => parseInt(e, 10))
  })

const sum = (a, b) => a + b
const smallSide = pack => Math.min(pack[0] * pack[1], pack[1] * pack[2], pack[2] * pack[0])
const surface = pack => 2 * (pack[0] * pack[1] + pack[1] * pack[2] + pack[2] * pack[0])
const paper = pack => surface(pack) + smallSide(pack)
const wrap = pack => 2 * Math.min(pack[0] + pack[1], pack[0] + pack[2], pack[1] + pack[2])
const bow = pack => pack[0] * pack[1] * pack[2]
const ribbon = pack => wrap(pack) + bow(pack)
const forPacks = (packList, fn) => packList.map(fn).reduce(sum, 0)

module.exports = input => ({
  part1: () => forPacks(prepareInput(input), paper),
  part2: () => forPacks(prepareInput(input), ribbon)
})
