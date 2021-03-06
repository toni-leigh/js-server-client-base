import { getCat, CAT_RECEIVED } from './get-cat';

import { buildGetAction } from './base-api.actions';

jest.mock('./base-api.actions', () => ({ buildGetAction: jest.fn() }));

test('calls the base get function with the correct params', () => {
  expect(buildGetAction).toHaveBeenCalledWith({
    getUrl: "https://api.thecatapi.com/v1/images/search?size=full",
    responseConstant: "CAT_RECEIVED"
  })
});
