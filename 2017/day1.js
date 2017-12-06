const prepareInput = input =>
  input
    .trim()
    .split("")
    .map(e => parseInt(e, 10));

const part1 = input =>
  prepareInput(input).reduce(
    (accumulator, currentValue, currentIndex, array) =>
      array[(currentIndex + 1) % array.length] === currentValue
        ? accumulator + currentValue
        : accumulator,
    0
  );

const part2 = input =>
  prepareInput(input).reduce(
    (accumulator, currentValue, currentIndex, array) =>
      array[(array.length / 2 + currentIndex) % array.length] === currentValue
        ? accumulator + currentValue
        : accumulator,
    0
  );

module.exports = {
  part1,
  part2
};
