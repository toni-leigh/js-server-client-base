import { getHardcodedText, HARDCODED_TEXT_RECEIVED } from './get-hardcoded-text.actions';

import { buildGetAction } from './base-api.actions';

jest.mock('./base-api.actions', () => ({ buildGetAction: jest.fn() }));

test('calls the base get function with the correct params', () => {
  expect(buildGetAction).toHaveBeenCalledWith({
    getUrl: "http://localhost:7555/hardcoded-text",
    responseConstant: "HARDCODED_TEXT_RECEIVED"
  })
});