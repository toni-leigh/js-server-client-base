const getHardcodedText = require('./get')

test('getHardcodedText returns the expected value', () => {
  expect(getHardcodedText()).toEqual('Hard coded text');
});