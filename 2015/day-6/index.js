const prepareInput = input => input
  .trim()
  .split('\n')
  .map(function (e) {
    var r = /^([\w\s]*) ([\d,]*) through ([\d,]*)$/.exec(e)
    return {
      op: r[1],
      from: r[2].split(',').map(e => parseInt(e, 10)),
      to: r[3].split(',').map(e => parseInt(e, 10))
    }
  })

var createArray = size => new Array(size).fill(0)
var createMatrix = size => createArray(size).map(e => createArray(size))

var doAction = function (action) {
  for (var i = action.from[0]; i <= action.to[0]; i++) {
    for (var y = action.from[1]; y <= action.to[1]; y++) {
      if (action.op === 'turn off') this[i][y] = false
      if (action.op === 'turn on') this[i][y] = true
      if (action.op === 'toggle') this[i][y] = !this[i][y]
    }
  }
}

var countTrue = function (matrix) {
  return matrix.reduce(function (acc, el) {
    return acc + ((el instanceof Array) ? countTrue(el) : (el) ? 1 : 0)
  }, 0)
}

var doActionImproved = function (action) {
  for (var i = action.from[0]; i <= action.to[0]; i++) {
    for (var y = action.from[1]; y <= action.to[1]; y++) {
      if (action.op === 'turn off' && this[i][y] > 0) this[i][y] -= 1
      if (action.op === 'turn on') this[i][y] += 1
      if (action.op === 'toggle') this[i][y] += 2
    }
  }
}

var countBrightness = function (matrix) {
  return matrix.reduce(function (acc, el) {
    return acc + ((el instanceof Array) ? countBrightness(el) : el)
  }, 0)
}

module.exports = input => {
  const data = prepareInput(input)

  return {
    part1: () => {
      var matrix = createMatrix(1000)
      data.map(doAction, matrix)
      return countTrue(matrix)
    },
    part2: () => {
      var matrix = createMatrix(1000)
      data.map(doActionImproved, matrix)
      return countBrightness(matrix)
    }
  }
}
