export function debounceFn<F extends (...params: any[]) => void>(
  func: F,
  time: number
) {
  let timeoutId: ReturnType<typeof setTimeout>;

  return function (this: any, ...args: any[]) {
    if (timeoutId) clearTimeout(timeoutId);

    timeoutId = setTimeout(() => func.apply(this, args), time);
  };
}
