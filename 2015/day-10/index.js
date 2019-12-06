var convert = function (s, iter) {
  iter = iter || 1
  var r = ''
  var prev = ''
  var counter = 0
  for (var i = 0; i < s.length; i++) {
    if (counter && s[i] !== prev) {
      r += counter + prev
      counter = 1
    } else {
      counter++
    }
    prev = s[i]
  }
  r += counter + prev
  return (iter > 1) ? convert(r, --iter) : r
}

module.exports = input => ({
  part1: () => convert(input, 40).length,
  part2: () => convert(input, 50).length
})
