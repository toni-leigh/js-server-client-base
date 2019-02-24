const getHardcodedText = require('./hardcoded-text/get')

test('getHardcodedText returns the expected value', () => {
  expect(getHardcodedText()).toEqual('Hard coded text');
});