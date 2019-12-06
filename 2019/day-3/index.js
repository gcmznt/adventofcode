const prepareInput = input => input
  .trim()
  .split('\n')
  .map(wire => wire.split(',').map(n => ({
    direction: n.slice(0, 1),
    distance: parseInt(n.slice(1), 10)
  })))

const getWireMatrix = wire => {
  let x = 0
  let y = 0
  let steps = 0
  const matrix = []
  const coeff = {
    U: { x: 0, y: 1 },
    D: { x: 0, y: -1 },
    R: { x: 1, y: 0 },
    L: { x: -1, y: 0 }
  }

  wire.forEach(move => {
    for (let i = 1; i <= move.distance; i++) {
      x += coeff[move.direction].x
      y += coeff[move.direction].y
      steps++
      matrix.push({
        x,
        y,
        steps,
        distance: Math.abs(x) + Math.abs(y)
      })
    }
  })

  return matrix.sort(byDistance)
}

const byDistance = (a, b) => a.distance - b.distance
const bySteps = (a, b) => a.steps - b.steps

const findClosestIntersection = intersections => {
  return intersections.sort(byDistance)[0].distance
}

const findFastesttIntersection = intersections => {
  return intersections.sort(bySteps)[0].steps
}

module.exports = input => {
  const [w1, w2] = prepareInput(input).map(getWireMatrix)
  const intersections = w1
    .map(el1 => {
      const el2 = w2.find(e => (el1.x === e.x && el1.y === e.y))
      return !el2 ? false : {
        ...el1,
        steps2: el2.steps,
        steps1: el1.steps,
        steps: el2.steps + el1.steps
      }
    })
    .filter(el => el)

  return {
    part1: () => findClosestIntersection(intersections), // 3229
    part2: () => findFastesttIntersection(intersections) // 32132
  }
}
