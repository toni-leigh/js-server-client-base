import { buildGetAction } from './base-api.actions.js';

const CAT_RECEIVED = 'CAT_RECEIVED';

const getCat = buildGetAction({
  getUrl: 'https://api.thecatapi.com/v1/images/search?size=full',
  responseConstant: CAT_RECEIVED
});

export {
  getCat,
  CAT_RECEIVED
};
