import { obj } from "./toStrictEqual";

test("객체의 a의값은 hello", () => {
  expect(obj()).toStrictEqual({ a: "hello" });
});
