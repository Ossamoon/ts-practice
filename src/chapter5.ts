class MyUser {
  private readonly name: string;
  private readonly age: number;

  constructor(name: string, age: number) {
    if (name === "") {
      throw new Error("名前は空にできません");
    }
    this.name = name;
    this.age = age;
  }

  getMessage(message: string): string {
    return `${this.name} (${this.age}) 「${message}」`;
  }
}

// const uhyo = new MyUser("uhyo", 26);
// console.log(uhyo.getMessage("こんにちは"));

const createUser = (name: string, age: number) => {
  return (message: string) => `${name} (${age}) 「${message}」`;
};

const getMessage = createUser("uhyo", 26);
console.log(getMessage("こんにちは"));
