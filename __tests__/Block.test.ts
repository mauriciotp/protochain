import Block from '../src/lib/Block';

describe('Block tests', () => {
  test('Should be valid', () => {
    const block = new Block(0, 'abc', 'data');
    const valid = block.isValid();
    expect(valid).toBeTruthy();
  });

  test('Should NOT be valid (index)', () => {
    const block = new Block(-1, 'abc', 'data');
    const valid = block.isValid();
    expect(valid).toBeFalsy();
  });

  test('Should NOT be valid (hash)', () => {
    const block = new Block(0, 'abc', 'data');
    block.hash = '';
    const valid = block.isValid();
    expect(valid).toBeFalsy();
  });

  test('Should NOT be valid (data)', () => {
    const block = new Block(0, 'abc', '');
    const valid = block.isValid();
    expect(valid).toBeFalsy();
  });

  test('Should NOT be valid (timestamp)', () => {
    const block = new Block(0, 'abc', 'data');
    block.timestamp = 0;
    const valid = block.isValid();
    expect(valid).toBeFalsy();
  });

  test('Should NOT be valid (previous hash)', () => {
    const block = new Block(0, '', 'data');
    const valid = block.isValid();
    expect(valid).toBeFalsy();
  });
});
