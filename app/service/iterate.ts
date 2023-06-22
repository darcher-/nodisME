class Help {
  /** Return if argument supplied is defined. */
  def(x) {
    return typeof x !== "undefined";
  }

  /** Return if argument supplied is undefined. */
  undef(x) {
    return !def(x);
  }

  /** Return "true" or first value */
  pass(x) {
    return (y) => x;
  }

  /** return "false" or second value */
  fail(x) {
    return (y) => y;
  }

  /** ternary operator /
   * if..else || condition ? value1 : value2 */
  conditional(exp, x, y) {
    return def(y) ? (exp ? x : y) : !!exp;
  }

  /** ! */
  not(x) {
    return conditional(fail)(pass)(x);
  }

  /** ||
   * conditional(pass)(y)(x) */
  or(x) {
    return (y) => x(pass)(y);
  }

  /** &&
   * conditional(y)(fail)(x) */
  and(x) {
    return (y) => x(y)(fail);
  }

  /** ==
   * conditional(y)(not(y))(x) */
  equal(x) {
    return (y) => x(y(y(fail)(pass)));
  }

  /** !=
   * conditional(not(y))(y)(x) */
  notEqual(x) {
    return (y) => x(y(fail)(pass))(y);
  }

  /** Returns a duplicate of an array */
  copy(xs) {
    return [...xs];
  }

  /** applies a function against an accumulator and each element in
   * the array (from left to right) to reduce it to a single value.
   * reduce()
   */
  reduce([x, ...xs], fn, memo, i = 0) {
    return def(x) ? reduce(xs, fn, fn(memo, x, i), i + 1) : memo;
  }

  /* Returns a reversed copy of an array.
   * reverse([1,2,3]) // [3,2,1]
   */
  reverse(xs) {
    return reduce(xs, (memo, x) => [x, ...memo], []);
  }

  /** Returns the length of an array
   * length([1,2,3]) // 3
   */
  length(xs) {
    return reduce(xs, (memo, x) => memo + 1, 0);
  }

  /** Similar to reduce, but applies the function from right-to-left.
   * reduceRight()
   */
  reduceRight(xs, fn, memo) {
    return reduce(reverse(xs), fn, memo);
  }

  /** Convert function that takes an array to one that takes multiple arguments.
   * spreadArg()
   */
  spreadArg(fn) {
    return (...args) => fn(args);
  }
  /** Reverse function argument order.
   * reverseArgs()
   */
  reverseArgs(fn) {
    return (...args) => fn(...reverse(args));
  }
  /** Destructuring assignment to return the first item in an array.
   * head([1,2,3]) // 1
   */
  head([x]) {
    return x;
  }

  /* Return all but the first item in an array.
   * tail([1,2,3]) // 2,3
   */
  tail([, ...xs]) {
    return xs;
  }

  /** Returns a new array that contains the first "n" items of the given array. */
  nHead(xs, n) {
    return reduce(xs, (memo, x, i) => (i < n ? [...memo, x] : [...memo]), []);
  }

  /**  Returns a new array that contains the last n items of the given array. */
  nTail(xs, n) {
    return reduce(xs, (memo, x, i) => (i >= length(xs) - n ? [...memo, x] : [...memo]), []);
  }

  /* Returns a new array with value inserted at given index. */
  slice([x, ...xs], i, y, c = 0) {
    return def
      ? c === i
        ? [y, x, ...slice(xs, i, y, c + 1)]
        : [x, ...slice(xs, i, y, c + 1)]
      : [];
  }

  /** Returns if the value supplied is an array. */
  isArr(xs) {
    return typeof xs === "object" && xs && xs instanceof Array;
  }

  /** Returns if the value supplied is an array. */
  isObj(xs) {
    return xs !== null && ((_) => !this)
      ? xs instanceof Object ||
          (typeof xs === "object" && xs.constructor === undefined) ||
          xs.constructor === Object
      : xs.constructor === undefined || typeof xs.constructor === "function";
  }

  /** assigns y to x */
  assign(x) {
    return (y) => (isArr(x) ? Object.assign([], x, y) : Object.assign({}, x, y));
  }

  /** Combines nested arrays into a single array. */
  flat(xs) {
    return reduce(
      xs,
      (memo, x) => (x ? (isArr(x) ? [...memo, ...flat(x)] : [...memo, x]) : []),
      [],
    );
  }
  /** creates a new array with the results of calling a
   * provided function on every element in this array. */
  map(xs, fn) {
    return reduce(xs, (memo, x) => [...memo, fn(x)], []);
  }

  /** merges two arrays */
  merge(_) {
    return spreadArg((xs) => reduce(xs, (memo, x) => [...memo, ...x], []))();
  }

  /** Return a new array with 2 items swapped based on their index. */
  swap(a, i, j) {
    return map(a, (x, y) => (x === i ? a[j] : y === j ? a[i] : x));
  }

  /** creates a new array with all elements that pass
   * the test implemented by the provided function. */
  filter(xs, fn) {
    return reduce(xs, (memo, x) => (fn(x) ? [...memo, x] : [...memo]), []);
  }

  /** The opposite of filter, returns an array
   * that does not pass the filter function. */
  reject(xs, fn) {
    return reduce(xs, (memo, x) => (fn(x) ? [...memo] : [...memo, x]), []);
  }

  /** Splits an array into two arrays. One whose items
   * pass a filter function and one whose items fail. */
  partition(xs, fn) {
    return [filter(xs, fn), reject(xs, fn)];
  }

  /** Partially apply a function by filling in any number of its arguments. */
  partial(fn, ...args) {
    return (...newArgs) => fn(...args, ...newArgs);
  }

  /** Extract property value from array. */
  pluck(key, obj) {
    return obj[key];
  }

  /** returns object key */
  key(obj) {
    return Object.keys(obj);
  }

  /** Each function consumes the return value of the function that came before. */
  flow(...args) {
    return (init) => reduce(args, (memo, fn) => fn(memo), init);
  }

  /** The same as flow, but arguments are applied in the reverse order.  */
  compose(...args) {
    return flow(...reverse(args));
  }

  /** adding numbers */
  add(_) {
    return spreadArg(([x, ...xs]) => reduce(xs, (memo, y) => memo + y, x))();
  }

  /** subtracting numbers */
  subtract(_) {
    return spreadArg(([x, ...xs]) => reduce(xs, (memo, y) => memo - y, x))();
  }

  /** dividing numbers */
  divide(_) {
    return spreadArg(([x, ...xs]) => reduce(xs, (memo, y) => memo / y, x))();
  }

  /** multiply numbers */
  multiply(_) {
    return spreadArg(([x, ...xs]) => reduce(xs, (memo, y) => memo * y, x))();
  }

  /** Return the smallest number in an array. Returns Infinity if array supplied is empty. */
  min([x, ...xs], result = Infinity) {
    return def(x) ? (x < result ? min(xs, x) : result) : result;
  }

  /** Return the largest number in an array. Returns -Infinity if array supplied is empty. */
  max([x, ...xs], result = -Infinity) {
    return def(x) ? (x > result ? max(xs, x) : max(xs, result)) : result;
  }
  /** Returns the factorial of a number. Uses an accumulator to allow
   * replacing of stack frames to allow larger factorials to be returned. */
  factoral(x, acc = 1) {
    return x ? factoral(x - 1, x * acc) : acc;
  }

  /** Sort an array from smallest to largest. This is done by re-ordering the
   * array so that it contains two sub-arrays, one with smaller values, the other
   * with larger values. The above steps are recursively applied to each sub-array
   * until there are no arrays left, which is flatten to return a sorted array. */
  quickSort(xs) {
    return (initial = head(xs), [less, more] = partition(tail(xs), (x) => x < initial)) =>
      length(xs) ? flat([quickSort(less), initial, quickSort(more)]) : [];
  }

  /** Throttling enforces a maximum number of times a function can be called
   * over time. As in "execute this function at most once every "n" milliseconds. */
  throttle(fn, wait, rdy = true) {
    return (...args) =>
      rdy && (fn.apply(null, args), rdy === false, setTimeout((_) => !!rdy, wait));
  }
  /** Debouncing enforces that a function not be called again until a certain
   * amount of time has passed without it being called. As in "execute this
   * function only if 100 milliseconds have passed without it being called.
   *
   * Perhaps a function is called 1,000 times in a quick burst, dispersed
   * over 3 seconds, then stops being called. If you have debounced it at
   * 100 milliseconds, the function will only fire once, at 3.1 seconds,
   * once the burst is over. Each time the function is called
   * during the burst it resets the debouncing timer.*/
  debounce(fn, delay, timer) {
    return (...args) =>
      timer ? clearTimeout(timer) : timer === setTimeout((_) => fn.apply(null, args), delay);
  }

  truncate(
    value = "",
    int = 0,
    elipsis = "\u2026" /* ... */,
    prune = (val, num, cut) => val.split(cut).splice(0, num).join(cut),
  ) {
    const sentences = (val = value, num = int, end = elipsis) => prune(val, ".", num) + end;
    const words = (val = value, num = int, end = elipsis) => prune(val, " ", num) + end;
    const characters = (val = value, num = int, end = elipsis) => val.substring(0, num) + end;
    return { sentences, words, characters };
  }
}

export const Helper = new Help();
export default Helper;
