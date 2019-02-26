const GET_HARDCODED_TEXT = 'GET_HARDCODED_TEXT';
const HARDCODED_TEXT_RECEIVED = 'HARDCODED_TEXT_RECEIVED';

const getHardcodedTextAction = () => dispatch => {
  return fetch('http://localhost:7555/hardcoded-text')
    .then(response => response.json())
    .then(json => dispatch(hardcodedTextReceived(json)));
};

const hardcodedTextReceived = hardcodedText => ({
  type: HARDCODED_TEXT_RECEIVED,
  data: { hardcodedText }
});

export {
  getHardcodedTextAction,
  GET_HARDCODED_TEXT,
  hardcodedTextReceived,
  HARDCODED_TEXT_RECEIVED
};
