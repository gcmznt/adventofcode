const prepareInput = input =>
  input
    .trim()
    .split("")
    .map(e => parseInt(e, 10));

const count = posFn => (acc, curr, i, array) =>
  acc + (array[posFn(i, array.length)] === curr ? curr : 0);

const posFn1 = (i, l) => (i + 1) % l;
const posFn2 = (i, l) => (l / 2 + i) % l;

const reduce = (input, posFn) => prepareInput(input).reduce(count(posFn), 0);

module.exports = {
  part1: input => reduce(input, posFn1),
  part2: input => reduce(input, posFn2)
};
