import { after3days } from "./date";
test("3일 후를 리턴하는 가", () => {
  const date = jest.useFakeTimers().setSystemTime(new Date(2025, 1, 3)); //jest가 날짜를 설정해줌 가짜 타이머
  console.log(new Date());
  expect(after3days()).toStrictEqual(new Date(2025, 1, 6));
  jest.useRealTimers(); //타이머 되돌리기
});
