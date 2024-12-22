import { sum } from "./toBe";

test("number를 더한 값을 반환한다.", () => {
  expect(sum(1, 2)).toBe(3);
});

test("string을 더한 값은 반환한다.", () => {
  expect(sum(1, 2)).toBe(3);
});