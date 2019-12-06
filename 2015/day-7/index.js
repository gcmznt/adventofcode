const prepareInput = input => input
  .trim()
  .split('\n')
  .map(function (e) {
    var op = e.split(' -> ')
    inputList[op[1]] = convert(op[0])
  })

var convert = function (t) {
  return t
    .replace('AND', '&')
    .replace('OR', '|')
    .replace('LSHIFT', '<<')
    .replace('RSHIFT', '>>')
    .replace('NOT', '~')
}

var getValueOf = function (g, k) {
  var operators = ['~', '&', '|', '<<', '>>']
  if (!isNaN(inputList[k])) return Number(inputList[k])
  var op = inputList[k].split(' ').map(function (el) {
    if (!isNaN(el)) return Number(el)
    return (operators.indexOf(el) !== -1) ? el : g(el)
  }).join(' ')
  // eslint-disable-next-line no-eval
  return eval(op)
}

var cachify = function (f, cache = {}) {
  return function (n) {
    if (!cache[n]) {
      var g = cachify(f, cache)
      cache[n] = f(g, n)
    }
    return cache[n]
  }
}

var inputList = {}

module.exports = input => {
  prepareInput(input)

  return {
    part1: () => {
      var firstRun = cachify(getValueOf)('a')
      inputList.b = firstRun

      return firstRun
    },
    part2: () => cachify(getValueOf)('a')
  }
}
