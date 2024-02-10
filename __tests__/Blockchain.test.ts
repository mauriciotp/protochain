import Blockchain from '../src/lib/Blockchain';

describe('Blockchain tests', () => {
  test('should has genesis block', () => {
    const blockchain = new Blockchain();
    expect(blockchain.blocks.length).toEqual(1);
  });
});
