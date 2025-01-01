import { timer } from "./callback";

test("timer 잘 실행되는가", (done) => {
  timer((message: string) => {
    expect(message).toBe("success");
    done();
  });
});
