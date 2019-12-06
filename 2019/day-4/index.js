const prepareInput = input => input
  .trim()
  .split('-')
  .map(n => parseInt(n, 10))

const match = num => {
  const split = `${num}`.split('')
  if (+split.sort().join('') !== num) return false
  for (let i = 0; i < split.length; i++) {
    if (split[i] === split[i + 1]) return true
  }
  return false
}

const match2 = num => {
  let g = 0
  if (!match(num)) return false
  const split = `${num}`.split('')
  for (let i = 0; i < split.length; i++, g++) {
    if (split[i] !== split[i - 1]) {
      if (g === 2) return true
      g = 0
    }
  }
  return g === 2
}
const counter = (from, to, matcher) => {
  let count = 0
  for (let i = from; i <= to; i++) {
    if (matcher(i)) count++
  }
  return count
}

module.exports = input => {
  const [from, to] = prepareInput(input)

  return {
    part1: () => counter(from, to, match),
    part2: () => counter(from, to, match2)
  }
}
