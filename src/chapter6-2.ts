import type { Option } from "./chapter6-1";

const isSome = <T>(obj: Option<T>): obj is { type: "some"; data: T } => {
  return obj.type === "some";
};

const showNumberIfExist = (obj: Option<number>): void => {
  if (isSome(obj)) {
    console.log(obj.data);
  }
};

const ten: Option<number> = { type: "some", data: 10 };
const none: Option<number> = { type: "none" };
showNumberIfExist(ten);
showNumberIfExist(none);
