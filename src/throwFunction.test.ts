import { error, customError } from "./throwFunction";

test("error가 잘 나는가", () => {
  expect(() => error()).toThrow(Error);
});
