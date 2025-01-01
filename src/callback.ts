export function timer(callback) {
  setTimeout(() => callback("success"), 3000);
}

export function timerPromise() {
  return new Promise((res) => {
    setTimeout(() => {
      res("success");
    }, 3000);
  });
}
