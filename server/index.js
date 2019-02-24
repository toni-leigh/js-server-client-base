const express = require('express')
const bodyParser = require('body-parser')
// const store = require('./store')
const app = express()

app.use(express.static('public'))
app.use(bodyParser.json())

const getHardcodedText = require('./hardcoded-text/get')

console.log(getHardcodedText)

app.get('/hardcoded-text', getHardcodedText)

// app.post('/createUser', (req, res) => {
//   store
//     .createUser({
//       username: req.body.username,
//       password: req.body.password
//     })
//     .then(() => res.sendStatus(200))
// })

app.listen(7555, () => {
  console.log('Server running on http://localhost:7555')
})