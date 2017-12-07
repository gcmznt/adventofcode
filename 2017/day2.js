const prepareInput = input =>
  input
    .trim()
    .split("\n")
    .map(e => e.split("\t").map(e => parseInt(e, 10)))
    .map(e => e.sort((a, b) => a - b));

const count = valFn => (acc, curr) => acc + valFn(curr);

const findDifference = el => Math.max(...el) - Math.min(...el);
const findEven = ([head, ...list]) =>
  (el = list.find(e => e % head === 0)) ? el / head : findEven(list);

const reduce = (input, posFn) => prepareInput(input).reduce(count(posFn), 0);

module.exports = {
  part1: input => reduce(input, findDifference),
  part2: input => reduce(input, findEven)
};
