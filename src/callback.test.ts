import { timer } from "./callback";

test("timer 잘 실행되는가", () => {
  timer((message: string) => {
    expect(message).toBe("success");
  });
});
