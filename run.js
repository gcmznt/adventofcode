const day = process.env.DAY
const year = process.env.YEAR

const input = require('fs').readFileSync(`./${year}/day-${day}/input.txt`, 'utf8')
const exercise = require(`./${year}/day-${day}/index.js`)

console.log(`  ${year}: Day ${day}`)
console.time(' Setup')
const run = exercise(input)
console.timeEnd(' Setup')

console.time('Part 1')
console.timeLog('Part 1', run.part1())

console.time('Part 2')
console.timeLog('Part 2', run.part2())
