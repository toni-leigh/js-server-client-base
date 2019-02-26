const handleGetResponse = ({ json, responseConstant }) => ({
  type: responseConstant,
  data: json
});

export const buildGetAction = ({
  getUrl,
  responseConstant
}) => () => dispatch => {
  return fetch(getUrl)
    .then(response => response.json())
    .then(json => dispatch(handleGetResponse({ json, responseConstant })));
};