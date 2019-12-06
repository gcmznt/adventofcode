const prepareInput = input => input
  .trim()
  .split('\n')
  .map(n => parseInt(n, 10))

const sum = (a, b) => a + b

const calcFuel = mass => {
  const fuel = Math.floor(mass / 3) - 2
  return fuel > 0 ? fuel : 0
}

const addFuelForFuel = mass => {
  const fuel = calcFuel(mass)
  return fuel > 0 ? mass + addFuelForFuel(fuel) : mass
}

module.exports = input => {
  const data = prepareInput(input).map(calcFuel)

  return {
    part1: () => data.reduce(sum), // 3266288
    part2: () => data.map(addFuelForFuel).reduce(sum) // === 4896582,
  }
}
