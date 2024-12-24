class TestObj {
  a;
  constructor(test: string) {
    this.a = test;
  }
}
export function obj(str: string) {
  return new TestObj(str);
}
