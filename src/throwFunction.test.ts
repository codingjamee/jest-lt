import { error, customError, CustomError } from "./throwFunction";

test("error가 잘 나는가", () => {
  expect(() => error()).toThrow(Error);
  expect(() => customError()).toThrow(CustomError);
});

test("error가 잘 나는가 try, catch활용", () => {
  try {
    error();
  } catch (err) {
    expect(err).toStrictEqual(new Error());
  }
});
