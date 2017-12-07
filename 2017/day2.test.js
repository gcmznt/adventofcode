const mod = require("./day2");

test("part1", () => {
  expect(
    mod.part1(`5	1	9	5
7	5	3
2	4	6	8`)
  ).toBe(18);
});

test("part2", () => {
  expect(
    mod.part2(`5	9	2	8
9	4	7	3
3	8	6	5`)
  ).toBe(9);
});
