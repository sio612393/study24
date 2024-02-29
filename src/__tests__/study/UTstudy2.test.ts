import Study2 from '../../main/study/study2';

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
    expect(result).toEqual(6);
  });
});
