const prepareInput = input => input
  .trim()
  .split('\n')

function filter1 (el) {
  var vowels = 'aeiou'
  var invalid = ['ab', 'cd', 'pq', 'xy']
  var vowelsFound = 0
  var doubleFound = false
  var prev = false

  for (var i = 0; i < el.length; prev = el[i], i++) {
    if (prev && invalid.indexOf(prev + el[i]) !== -1) return false
    if (prev === el[i]) doubleFound = true
    if (vowels.indexOf(el[i]) !== -1) vowelsFound++
  }

  return (vowelsFound >= 3) && doubleFound
}

function filter2 (el) {
  var repetitionFound = false
  var patternFound = false
  var prev = ''

  for (var i = 0; i < el.length; prev += el[i], i++) {
    if (el[i] === el[i + 2]) {
      repetitionFound = true
    }
    if (el[i + 1] && prev.indexOf(el[i] + el[i + 1]) !== -1) {
      patternFound = true
    }
    if (repetitionFound && patternFound) {
      return true
    }
  }

  return false
}

module.exports = input => ({
  part1: () => prepareInput(input).filter(filter1).length,
  part2: () => prepareInput(input).filter(filter2).length
})
