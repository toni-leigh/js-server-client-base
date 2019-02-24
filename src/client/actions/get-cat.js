const GET_CAT = 'GET_CAT';
const RECEIVE_CAT = 'RECEIVE_CAT';

const getCat = () => dispatch => {
  return fetch('https://api.thecatapi.com/v1/images/search?size=full')
    .then(response => response.json())
    .then(json => dispatch(receiveCat(json)));
};

const receiveCat = cat => ({
  type: RECEIVE_CAT,
  payload: cat
});

export {
  getCat,
  GET_CAT,
  receiveCat,
  RECEIVE_CAT
};
