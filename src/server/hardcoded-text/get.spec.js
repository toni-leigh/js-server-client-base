const getHardcodedText = require('./get')

describe('getHardcodedText', () => {
  const res = {
    json: jest.fn(),
    setHeader: jest.fn()
  }

  beforeAll(() => {
    getHardcodedText(null, res);
  });

  test('json is called with the correct value', () => {
    expect(res.json).toHaveBeenCalledWith('Hard coded text');
  });

  test('CORS header is set', () => {
    expect(res.setHeader).toHaveBeenCalledWith(
      'Access-Control-Allow-Origin',
      'http://localhost:3000'
    );
  });
});