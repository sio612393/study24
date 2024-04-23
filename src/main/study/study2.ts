/* eslint-disable lines-between-class-members */
/* eslint-disable spaced-comment */
/* eslint-disable prettier/prettier */
/* eslint-disable class-methods-use-this */
import log from 'electron-log';
import path from 'path';

// class App
export default class Study2 {
  // constructor() {
  //   log.initialize();
  // }

  public async sleep(ms: number | undefined) {
    return new Promise((resolve) => {setTimeout(resolve, ms)});
  }
  public async st2Study4() {
    console.log('st2Study4():ENTER');
    // await this.sleep(3000);
    this.st24sub1();

    console.log('st2Study4():LEAVE');
  }
  public async st24sub1() {
    console.log('st24sub1():ENTER');

    await this.sleep(1000);
    console.log('st24sub1():LEAVE');
  }



  public study3() {
    let result = '';
    const dir1 = 'C:¥¥aaa¥¥bbb';
    const dir2 = 'foo';
    const dir3 = 'bar';
    result = path.join(dir1, dir2, dir3);
    console.log(result);

    const dir4 = 'C:\\xyz\\LMN';
    result = path.join(dir4, dir2, dir3);
    console.log(result);

    return result;
  }

  public study1(arg: string) {
    const result = this.deuplicate(arg);

    const { TextEncoder, TextDecoder } = require('util');
    const encoder = new TextEncoder();
    const uint8array = encoder.encode('こんにちは！\n Hello World!');

    const originStr = new TextDecoder().decode(uint8array); //UTF-8
    console.log(originStr);

    const utf8decoder = new TextDecoder();
    const u8arr = new Uint8Array([227, 129, 130]);

    console.log(utf8decoder.decode(u8arr));

    // console.log(result);
    return result;
  }

  private deuplicate(arg: string): string {
    log.debug(`deuplicate: ${arg}`);
    return arg + arg;
  }

  public static add(input: number): number {
    log.debug(`add():static - ${input}`);
    let output;
    if (input > 0) {
      output = input + 1;
    } else {
      output = input - 1;
    }
    return output;
  }

  // public dummyFunc(): void {
  //   this.deuplicate('');
  //   const currentVersions = new Map<string, string>();
  //   // eslint-disable-next-line no-array-constructor
  //   const clientApps = Array<any>();

  //   // currentVersions.forEach((currentVersion, appShortName) => {
  //   //   clientApps.filter((app) => {
  //   //     return app.val === appShortName;
  //   //   }).currentVersion = currentVersion;
  //   // });
  // }
}
