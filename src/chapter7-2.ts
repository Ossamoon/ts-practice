import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import * as path from "path";

const fileUrl = import.meta.url;
console.log(fileUrl);
const filePath = fileURLToPath(fileUrl);
console.log(filePath);
const dirName = path.dirname(filePath);
const text = readFileSync(path.join(dirName, "../uhyo.txt"), {
  encoding: "utf8",
});
let count = 0;
let position = text.indexOf("uhyo");

while (position !== -1) {
  count++;
  position = text.indexOf("uhyo", position + 1);
}

console.log(count);
