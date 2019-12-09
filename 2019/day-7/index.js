function readValue (program, pos, mode) {
  return program[mode === '0' ? program[pos] : pos]
}

function writeValue (program, pos, mode, val) {
  program[mode === '0' ? program[pos] : pos] = val
}

function execute (program, inputs, pos = 0) {
  const instruction = `00000${program[pos]}`.slice(-5)
  const opcode = instruction.slice(-2)
  const paramModes = instruction.slice(0, 3).split('').reverse()
  const goTo = execute.bind(null, program, inputs)
  const read = param => readValue(program, pos + param, paramModes[param - 1])
  const write = (param, val) => writeValue(program, pos + param, paramModes[param - 1], val)

  const p1 = read(1)
  const p2 = read(2)

  switch (opcode) {
    case '99': // HALT
      return ['HALT', pos]
    case '01': // SUM
      write(3, p1 + p2)
      return goTo(pos + 4)
    case '02': // MULTIPLY
      write(3, p1 * p2)
      return goTo(pos + 4)
    case '03': // INPUT
      write(1, inputs.shift())
      return goTo(pos + 2)
    case '04': // OUTPUT
      if (p1) return [p1, pos + 2]
      return goTo(pos + 2)
    case '05': // JUMP-IF-TRUE
      if (p1 !== 0) return goTo(p2)
      return goTo(pos + 3)
    case '06': // JUMP-IF-FALSE
      if (p1 === 0) return goTo(p2)
      return goTo(pos + 3)
    case '07': // LESS THAN
      write(3, Number(p1 < p2))
      return goTo(pos + 4)
    case '08': // EQUALS
      write(3, Number(p1 === p2))
      return goTo(pos + 4)
  }
}

function generateSequences (els) {
  return els.length > 1
    ? els.map(el => generateSequences(els.filter(e => e !== el)).map(e => [el, ...e])).flat()
    : [els]
}

class Ampli {
  constructor (phase, program) {
    this.phase = phase
    this.input = [phase]
    this.program = program
    this.pos = 0
  }

  run (input) {
    this.input.push(input)
    const o = execute(this.program, this.input, this.pos)
    this.pos = o[1]
    return o[0]
  }
}

function prepareInput (input) {
  return input
    .trim()
    .split(',')
    .map(n => parseInt(n, 10))
}

module.exports = input => ({
  part1: () => {
    const sequences = generateSequences([0, 1, 2, 3, 4])

    return Math.max(...sequences.map(sequence => {
      let o = 0
      for (let i = 0; i < sequence.length; i++) {
        [o] = execute(prepareInput(input), [sequence[i], o])
      }
      return !isNaN(o) ? o : 0
    }))
  },
  part2: () => {
    const sequences = generateSequences([5, 6, 7, 8, 9])

    return Math.max(...sequences.map(sequence => {
      const amplis = sequence.map(phase => new Ampli(phase, prepareInput(input)))
      let o = 0
      let last = 0
      let i = 0
      while (o !== 'HALT') {
        o = amplis[i % amplis.length].run(o)
        if (o === 'HALT') return last
        last = o
        i++
      }
      return !isNaN(o) ? o : 0
    }))
  }
})
