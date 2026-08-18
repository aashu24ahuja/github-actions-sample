const {
  add,
  subtract,
  multiply,
  divide,
  modulo,
  power,
} = require("./calculator");

test("adds two numbers", () => {
  expect(add(2, 3)).toBe(5);
});

test("subtracts two numbers", () => {
  expect(subtract(9, 4)).toBe(5);
});

test("multiplies two numbers", () => {
  expect(multiply(6, 7)).toBe(42);
});

test("divides two numbers", () => {
  expect(divide(20, 4)).toBe(5);
});

test("throws when dividing by zero", () => {
  expect(() => divide(10, 0)).toThrow("Cannot divide by zero");
});

test("calculates modulo", () => {
  expect(modulo(17, 5)).toBe(2);
});

test("throws when modulo by zero", () => {
  expect(() => modulo(10, 0)).toThrow("Cannot modulo by zero");
});

test("raises a number to a power", () => {
  expect(power(2, 5)).toBe(32);
});