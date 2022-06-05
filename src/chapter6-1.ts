export type Option<T> = { type: "some"; data: T } | { type: "none" };

const showNumberIfExist = (obj: Option<number>): void => {
  if (obj.type === "some") {
    console.log(obj.data);
  }
};

const ten: Option<number> = { type: "some", data: 10 };
const none: Option<number> = { type: "none" };

showNumberIfExist(ten);
showNumberIfExist(none);
