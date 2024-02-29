import log from 'electron-log';

export default class Study2 {
  // constructor() {
  //   log.initialize();
  // }

  public study1(arg: string) {
    const result = this.deuplicate(arg);
    // console.log(result);
    return result;
  }

  private deuplicate(arg: string): string {
    log.debug(`deuplicate: ${arg}`);
    return arg + arg;
  }

  public static add(input: number): number {
    log.debug(`add():static - ${input}`);
    return input + input;
  }
}
