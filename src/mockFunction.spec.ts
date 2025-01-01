import { obj } from "./mockFunction";

beforeEach(() => {
  jest.clearAllMocks();
});

test("obj 메서드가 1번 호출 되었다. mockFunction", () => {
  const spyFn = jest.spyOn(obj, "minus");
  const result = obj.minus(1, 2);
  console.log(obj.minus);
  expect(obj.minus).toHaveBeenCalledTimes(1);
  expect(result).toBe(-1);
  // spyFn.mockClear(); //calledWith만 초기화
  // spyFn.mockReset(); //obj.minus가 빈 함수로 돌아감 (mockClear + mockImplementation(()=>{}) 과 동일)
  // spyFn.mockRestore(); ///아예 전부 없애버림. 
});

test("obj.minus에 스파이를 심고 실행도 안되게", () => {
  jest.spyOn(obj, "minus").mockImplementation(); //실행안되게
  //mockImplementation은 인수에 빈 함수가 들어가있음
  const result = obj.minus(1, 2);
  // console.log(obj.minus);
  expect(obj.minus).toHaveBeenCalledTimes(1);
  expect(result).not.toBe(-1);
});
test("obj.minus에 스파이를 심고 리턴 값을 바꾸게", () => {
  jest.spyOn(obj, "minus").mockImplementation(() => 5); //리턴값 변경
  const result = obj.minus(1, 2);
  // console.log(obj.minus);
  expect(obj.minus).toHaveBeenCalledTimes(1);
  expect(result).toBe(5);
});

test("spy함수와 mockImple한번만 실행되게", () => {
  const spy = jest
    .spyOn(obj, "minus")
    .mockImplementationOnce(() => 3)
    .mockImplementationOnce(() => 5) //실행될 함수로직 변경
    .mockImplementation((x, y) => x - y);

  const result1 = obj.minus(1, 2);
  const result2 = obj.minus(1, 2);
  const result3 = obj.minus(1, 2);

  spy.mockRestore(); // 테스트 실행 후에 복원

  expect(result1).toBe(3);
  expect(result2).toBe(5);
  expect(result3).toBe(-1);
});

test("spy로 returnValue만 변경", () => {
  const spy = jest
    .spyOn(obj, "minus")
    .mockReturnValueOnce(5) //return값 한번만 변경
    .mockReturnValue(3); //return값만 변경

  const result1 = obj.minus(1, 2);
  const result2 = obj.minus(1, 2);

  expect(result1).toBe(5);
  expect(result2).toBe(3);
});
