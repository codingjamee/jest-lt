import { okPromise, noPromise, noAsync, okAsync } from "./asyncFunction";

//promise리턴하는 함수 테스트하기 //resolves or rejects를 하면 반드시 return을 붙여야 함
test("okPromise 테스트", () => {
  return expect(okPromise()).resolves.toBe("ok");
});

test("okPromise테스트 then", () => {
  const okSpy = jest.fn(okPromise);
  return okSpy().then((result) => {
    expect(result).toBe("ok");
  });
});

test("okPromise await 테스트", async () => {
  const okSpy = jest.fn(okPromise);
  const result = await okSpy();
  expect(result).toBe("ok");
});

test("noPromise테스트", () => {
  return expect(noPromise()).rejects.toBe("no");
});

test("noPromise테스트 then", () => {
  const noSpy = jest.fn(noPromise);
  return noSpy().catch((result) => {
    expect(result).toBe("no");
  });
});

test("noPromise await 테스트", async () => {
  const noSpy = jest.fn(noPromise);
  try {
    await noSpy();
  } catch (err) {
    expect(err).toBe("no");
  }
});
