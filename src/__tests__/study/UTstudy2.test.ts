/* eslint-disable prettier/prettier */
import path from 'path';
import Study2 from '../../main/study/study2';


  async function sleep(ms: number | undefined) {
    return new Promise((resolve) => {setTimeout(resolve, ms)});
  }

describe('study1', () => {
  it('P:case1', () => {
    const app = new Study2();
    const arg = 'TEST-1';
    const result = app.study1(arg);
    expect(result.length > 0).toBe(true);
    expect(result).toEqual(arg + arg);
  });

  it('p:static', () => {
    const result = Study2.add(3);
    expect(result).toEqual(4);
  });

  it('p:study3', () => {
    const app = new Study2();
    const result = app.study3();
    // const expected = "C:\\xyz\\LMN" + path.sep + "foo" + path.sep + "bar";
    const expected = "";
    expect(result).toEqual(expected);
  });

  it('ST2-4', async () => {
    const app = new Study2();
    const result = await app.st2Study4();
    await sleep(2000)
    expect(result).toBe("");
  });

});
