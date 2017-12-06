const mod = require("./day1");

test("part1: 1122 === 3", () => {
  expect(mod.part1("1122")).toBe(3);
});

test("part1: 1111 === 4", () => {
  expect(mod.part1("1111")).toBe(4);
});

test("part1: 1234 === 0", () => {
  expect(mod.part1("1234")).toBe(0);
});

test("part1: 91212129 === 9", () => {
  expect(mod.part1("91212129")).toBe(9);
});

test("part2: 1212 === 6", () => {
  expect(mod.part2("1212")).toBe(6);
});

test("part2: 1221 === 0", () => {
  expect(mod.part2("1221")).toBe(0);
});

test("part2: 123425 === 4", () => {
  expect(mod.part2("123425")).toBe(4);
});

test("part2: 123123 === 12", () => {
  expect(mod.part2("123123")).toBe(12);
});

test("part2: 12131415 === 4", () => {
  expect(mod.part2("12131415")).toBe(4);
});
