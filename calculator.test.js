const { add, subtract } = require("./calculator");

test("adds two numbers", () => {
  expect(add(2, 3)).toBe(5);
});

test("adds two numbers", () => {
  expect(add(4, 3)).toBe(7);
});

test("subtracts two numbers", () => {
  expect(subtract(5, 3)).toBe(2);
});