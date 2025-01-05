import { obj } from "./module";

// jest.mock("./module", () => {
//   return { obj: { a: "b" }, prop: "hello" }; //obj를 갈아끼움
// }); //module파일의 메서드 통째로 변경

jest.mock("./module", () => {
  return {
    ...jest.requireActual("./module"),
    obj: {
      ...jest.requireActual("./module").obj,
      method3() {
        return "method3";
      },
    },
  };
});
//requireActual : 나머지는 전체 원래 함수
//method3만 모킹
test("모듈을 전부 모킹", () => {
  console.log(obj);
  // jest.spyOn(obj, "method1");
});
