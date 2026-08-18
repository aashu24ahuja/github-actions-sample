const { add, subtract, multiply, divide, modulo, power, squareRoot } = require("./calculator");

test("adds two numbers", () => {
  expect(add(2, 3)).toBe(5);
});

test("subtracts two numbers", () => {
  expect(subtract(10, 4)).toBe(6);
});

test("subtracts negative result", () => {
  expect(subtract(3, 5)).toBe(-2);
});

test("multiplies two numbers", () => {
  expect(multiply(4, 5)).toBe(20);
});

test("multiplies by zero", () => {
  expect(multiply(7, 0)).toBe(0);
});

test("divides two numbers", () => {
  expect(divide(10, 2)).toBe(5);
});

test("divides with decimal result", () => {
  expect(divide(7, 2)).toBe(3.5);
});

test("calculates modulo", () => {
  expect(modulo(10, 3)).toBe(1);
});

test("calculates power", () => {
  expect(power(2, 3)).toBe(8);
});

test("calculates power of zero", () => {
  expect(power(5, 0)).toBe(1);
});

test("calculates square root", () => {
  expect(squareRoot(16)).toBe(4);
});

test("calculates square root of decimal", () => {
  expect(squareRoot(2)).toBeCloseTo(1.414, 3);
});
test
