import { sum, obj } from "./toBe";

test("sum 함수가 호출 되었는가.", () => {
  const sumSpy = jest.fn(sum); //jest.fn으로 함수를 만들어 호출 여부, 횟수등 확인 가능
  sumSpy(1, 2);
  expect(sumSpy).toHaveBeenCalled(); //테스트시 의미가 없음
});

test("sum 함수가 1 번 호출 되었다.", () => {
  const sumSpy = jest.fn(sum);
  sumSpy(1, 2);
  expect(sumSpy).toHaveBeenCalledTimes(1);
});
test("sum 함수가 1,2와 함께 호출 되었다.", () => {
  const sumSpy = jest.fn(sum);
  sumSpy(1, 2);
  expect(sumSpy).toHaveBeenCalledWith(1, 2);
});

test("obj 메서드가 1 번 호출 되었다.", () => {
  const objSpy = jest.fn(obj.minus);
  objSpy(1, 2);
  expect(objSpy).toHaveBeenCalledTimes(1);
});

test("obj 메서드가 1,2와 함꼐 호출 되었다.", () => {
  jest.spyOn(obj, "minus");
  const result = obj.minus(1, 2);
  console.log(obj.minus);
  expect(obj.minus).toHaveBeenCalledTimes(1);
  expect(result).toBe(-1);
});
