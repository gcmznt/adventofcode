const mod = require("./day3");

test("part1", () => {
  expect(mod.part1("1")).toBe(0);
  expect(mod.part1("12")).toBe(3);
  expect(mod.part1("23")).toBe(2);
  expect(mod.part1("1024")).toBe(31);
});

test("part2", () => {
  expect(mod.part2("1")).toBe(2);
  expect(mod.part2("24")).toBe(25);
  expect(mod.part2("150")).toBe(304);
  expect(mod.part2("747")).toBe(806);
});
