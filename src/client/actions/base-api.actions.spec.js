import { buildGetAction } from './base-api.actions';

const jsonMock = jest.fn().mockReturnValue({ cat: 'foo' });
const responseMock = { json: jsonMock }
const fetchMock = jest.fn().mockReturnValue(new Promise((resolve, reject) => resolve(responseMock)));
global.fetch = fetchMock;

const TEST_CONSTANT = 'TEST_CONSTANT';
const testUrl = 'https://test.api/path/to/resource';

const testGetAction = buildGetAction({
  getUrl: testUrl,
  responseConstant: TEST_CONSTANT
});

const dispatchGetAction = testGetAction();
const dispatchMock = jest.fn();
dispatchGetAction(dispatchMock);

test('fetch is called with the correct argument', () => {
  expect(fetchMock).toHaveBeenCalledWith(testUrl);
});

test('json method is called', () => {
  expect(jsonMock).toHaveBeenCalled();
});