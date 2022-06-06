import { readFileSync } from "fs";

const text = readFileSync("./uhyo.txt", { encoding: "utf8" });
let count = 0;
let position = text.indexOf("uhyo");

while (position !== -1) {
  count++;
  position = text.indexOf("uhyo", position + 1);
}

console.log(count);
