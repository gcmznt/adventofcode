const prepareInput = input => input
  .trim()
  .split(',')
  .map(n => parseInt(n, 10))

const readValue = (input, pos, mode) => input[mode === '0' ? input[pos] : pos]
const writeValue = (input, pos, mode, val) => { input[mode === '0' ? input[pos] : pos] = val }

const execute = (input, system, pos = 0) => {
  const instruction = `00000${input[pos]}`.slice(-5)
  const opcode = instruction.slice(-2)
  const paramModes = instruction.slice(0, 3).split('').reverse()
  const goTo = execute.bind(null, input, system)
  const read = param => readValue(input, pos + param, paramModes[param - 1])
  const write = (param, val) => writeValue(input, pos + param, paramModes[param - 1], val)
  let params = 0

  const p1 = read(1)
  const p2 = read(2)

  switch (opcode) {
    case '99': // HALT
      return 'HALT'
    case '01': // SUM
      write(3, p1 + p2)
      params = 3
      break
    case '02': // MULTIPLY
      write(3, p1 * p2)
      params = 3
      break
    case '03': // INPUT
      write(1, system)
      params = 1
      break
    case '04': // OUTPUT
      console.log(`System output: ${p1}`)
      if (p1) return p1
      params = 1
      break
    case '05': // JUMP-IF-TRUE
      if (p1 !== 0) return goTo(p2)
      params = 2
      break
    case '06': // JUMP-IF-FALSE
      if (p1 === 0) return goTo(p2)
      params = 2
      break
    case '07': // LESS THAN
      write(3, Number(p1 < p2))
      params = 3
      break
    case '08': // EQUALS
      write(3, Number(p1 === p2))
      params = 3
      break
  }

  return goTo(pos + params + 1)
}

module.exports = input => ({
  part1: () => execute(prepareInput(input), 1), // 1 => 7988899
  part2: () => execute(prepareInput(input), 5) // 5 => 13758663
})
