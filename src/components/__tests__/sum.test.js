import sum from "../sum";

test("Sum function should add two numbers", () => {
  const result = sum(5, 10);
  expect(result).toBe(15);
});
