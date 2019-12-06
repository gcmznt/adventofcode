const prepareInput = input => input
  .trim()
  .split('\n')
  .reduce((orbs, obj) => {
    return {
      ...orbs,
      [obj.split(')')[1]]: obj.split(')')[0]
    }
  }, {})

const countDistance = (orbs, obj) => {
  return orbs[obj] ? 1 + countDistance(orbs, orbs[obj]) : 0
}

const counter = orbs => {
  let c = 0
  for (const property in orbs) {
    c += countDistance(orbs, property)
  }
  return c
}

const getPath = (orbs, obj) => {
  return orbs[obj] ? [...getPath(orbs, orbs[obj]), orbs[obj]] : []
}

const distance = orbs => {
  const me = getPath(orbs, 'YOU')
  const santa = getPath(orbs, 'SAN')

  while (me[0] === santa[0]) {
    me.shift()
    santa.shift()
  }

  return me.length + santa.length
}

module.exports = input => {
  const orbs = prepareInput(input)

  return {
    part1: () => counter(orbs),
    part2: () => distance(orbs)
  }
}
