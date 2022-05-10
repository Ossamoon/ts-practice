import { createInterface } from "readline";

const rl = createInterface({ input: process.stdin, output: process.stdout });

rl.question("文字列を入力してください:", (line) => {
  const num = Number(line);
  const num2 = Number(true);
  console.log(num + num2);
  rl.close();
});
