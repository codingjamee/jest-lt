import { obj } from "./toMatchObject";

test("클래스 일치", () => {
  expect(obj("hello")).toMatchObject({});
});

test("배열끼리도 toStrictEqual 써야한다", () => {
  expect([1, 2, 3]).toStrictEqual([1, 2, 3]);
  expect([1, 2, 3]).not.toBe([1, 2, 3]);
});
