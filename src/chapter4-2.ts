function map<T, U>(array: T[], callback: (arg: T) => U): U[] {
  let result: U[] = [];
  for (const arg of array) {
    result.push(callback(arg));
  }
  return result;
}

const ndata = [1, -1, 2, -3, 5, 0, -13];

const result: boolean[] = map(ndata, (x) => x >= 0);

console.log(result);
