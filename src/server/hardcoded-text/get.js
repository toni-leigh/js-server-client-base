module.exports = (_, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.json('Hard coded text');
}