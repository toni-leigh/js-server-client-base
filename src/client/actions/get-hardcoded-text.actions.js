import { buildGetAction } from './base-api.actions.js';

const HARDCODED_TEXT_RECEIVED = 'HARDCODED_TEXT_RECEIVED';

const getHardcodedTextAction = buildGetAction({
  getUrl: 'http://localhost:7555/hardcoded-text',
  responseConstant: HARDCODED_TEXT_RECEIVED
});

export {
  getHardcodedTextAction,
  HARDCODED_TEXT_RECEIVED
};