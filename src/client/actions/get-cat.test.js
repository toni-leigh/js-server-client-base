import { getCat, RECEIVE_CAT } from './get-cat';

const jsonMock = jest.fn().mockReturnValue({ cat: 'foo' });
const responseMock = { json: jsonMock }
const fetchMock = jest.fn().mockReturnValue(new Promise((resolve, reject) => resolve(responseMock)));
global.fetch = fetchMock;

const dispatchGetCat = getCat();
const dispatchMock = jest.fn();
dispatchGetCat(dispatchMock);

test('fetch is called with the correct argument', () => {
  expect(fetchMock).toHaveBeenCalledWith('https://api.thecatapi.com/v1/images/search?size=full');
});

test('json method is called', () => {
  expect(jsonMock).toHaveBeenCalled();
});

test('dispatch is called', () => {
  expect(dispatchMock).toHaveBeenCalledWith({
    payload: {
      cat: 'foo'
    },
    type: RECEIVE_CAT
  });
});
