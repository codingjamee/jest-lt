import { timer } from "./callback";

test("timer 잘 실행되는가", (done) => {
  timer((message: string) => {
    expect(message).toBe("success");
    done();
  });
});
test("timer 빨리 가도록", (done) => {
  jest.useFakeTimers();
  timer((message: string) => {
    expect(message).toBe("success");
    done();
  });
  jest.runAllTimers();
});
