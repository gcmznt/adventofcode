const prepareInput = input => input.trim()

const elPerCircle = circle => (circle * 2 - 1) * 4 - 4 || 1

const findCircle = (number, circle = 1, els = elPerCircle(circle)) =>
  number <= els ? circle : findCircle(number - els, ++circle)

const offset = (number, acc = 0) =>
  number <= 1 ? acc : offset(--number, acc + elPerCircle(number))

const getRads = (n, c) => ((n - offset(c)) / elPerCircle(c) * 360 + 315) % 360
const getPos = (n, c) => (Math.abs(getRads(n, c) % 90 - 45) - 45) / -45
const calcDistance = (n, c) => Math.round(getPos(n, c) * (c - 1)) + c - 1
const getDistance = number => calcDistance(number, findCircle(number))

const getFreeWays = (matrix, x, y) => ({
  r: !!(matrix[x + 1] && matrix[x + 1][y]),
  u: !!(matrix[x] && matrix[x][y + 1]),
  l: !!(matrix[x - 1] && matrix[x - 1][y]),
  d: !!(matrix[x] && matrix[x][y - 1])
})

const getNextPos = (matrix, x, y) => {
  const { r, u, l, d } = getFreeWays(matrix, x, y)
  if (!r && u) return { x: x + 1, y }
  if (!u && l) return { x, y: y + 1 }
  if (!l && d) return { x: x - 1, y }
  if (!d && r) return { x, y: y - 1 }
  return { x: x + 1, y }
}

const getNextVal = (matrix, x, y) => {
  ({ x, y } = getNextPos(matrix, x, y))
  let v = 0
  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      v += (matrix[x + i] && matrix[x + i][y + j]) || 0
    }
  }
  matrix[x] || (matrix[x] = [])
  matrix[x][y] = v
  return {
    matrix,
    x,
    y
  }
}

function * spiralMaker () {
  let matrix = [[1]]
  let x = 0
  let y = 0
  while (true) {
    ({ matrix, x, y } = getNextVal(matrix, x, y))
    yield matrix[x][y]
  }
}

const getSpiral = max => {
  const gen = spiralMaker()
  let v = 0
  while ((v = gen.next().value) <= max) { }
  return v
}

module.exports = input => ({
  part1: () => getDistance(prepareInput(input)),
  part2: () => getSpiral(prepareInput(input))
})
