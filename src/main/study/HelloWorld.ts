// eslint-disable-next-line import/prefer-default-export
export class HelloWorld {
  p1: string;

  constructor() {
    this.p1 = 'aa';
  }

  public print(): void {
    this.p1 = 'bb';
    console.log(`src/main/study/HelloWorld.ts: Hello World!!!`);
  }
}

// public static print(): void {
// 	console.log(`$$$$$$$$$$$$$$ Hello World!!!`)
// }
