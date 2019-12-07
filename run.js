const day = process.env.DAY
const year = process.env.YEAR

const stats = require('./stats')
const fs = require('fs')
const path = require('path')
const input = fs.readFileSync(path.join(__dirname, year, `day-${day}`, 'input.txt'), 'utf8')
const exercise = require(path.join(__dirname, year, `day-${day}`, 'index.js'))
const timeToMs = time => (time[0] * 1000 + time[1] / 1000000).toFixed(2)

let setupTime = process.hrtime()
const run = exercise(input)
setupTime = timeToMs(process.hrtime(setupTime))

let part1Time = process.hrtime()
const part1 = run.part1()
part1Time = timeToMs(process.hrtime(part1Time))

let part2Time = process.hrtime()
const part2 = run.part2()
part2Time = timeToMs(process.hrtime(part2Time))

console.log(`  ${year}: Day ${day}`)
console.log(` Setup: [${setupTime} milliseconds]`)
console.log(`Part 1: ${part1} [${part1Time} milliseconds]`)
console.log(`Part 2: ${part2} [${part2Time} milliseconds]`)

if (!stats[year]) stats[year] = {}
stats[year][day] = {
  setup: {
    ms: setupTime
  },
  part1: {
    result: part1,
    ms: part1Time
  },
  part2: {
    result: part2,
    ms: part2Time
  }
}

fs.writeFile('./stats.json', JSON.stringify(stats), 'utf8', function (err) {
  if (err) {
    console.log('An error occured while writing JSON Object to File.')
    return console.log(err)
  }
})
