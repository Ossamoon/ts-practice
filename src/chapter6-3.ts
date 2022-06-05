import type { Option } from "./chapter6-1";

const mapOption = <T, U>(
  obj: Option<T>,
  callback: (data: T) => U
): Option<U> => {
  switch (obj.type) {
    case "some":
      const newData = callback(obj.data);
      return { type: "some", data: newData };
    case "none":
      return { type: "none" };
  }
};

function doubleOption(obj: Option<number>) {
  return mapOption(obj, (x) => x * 2);
}

const four: Option<number> = { type: "some", data: 4 };
const nothing: Option<number> = { type: "none" };

console.log(doubleOption(four));
console.log(doubleOption(nothing));
