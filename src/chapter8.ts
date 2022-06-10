import { readFile } from "fs/promises";
import { fileURLToPath } from "url";
import * as path from "path";

const sleep = (duration: number): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

const errorAfter1ms = async () => {
  await sleep(1);
  throw new Error("Timeout!");
};

const filePath = fileURLToPath(import.meta.url);
const fileDir = path.dirname(filePath);
const dataFile = path.join(fileDir, "../uhyo.txt");

const data = await Promise.race([
  readFile(dataFile, {
    encoding: "utf8",
  }),
  errorAfter1ms(),
]).catch(() => "");

let count = 0;
let position = data.indexOf("uhyo");

while (position !== -1) {
  count++;
  position = data.indexOf("uhyo", position + 1);
}

console.log(count);
