const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const dal = require('./dal')

app.post('*', bodyParser.json(), async (req, res) => {
  try {
    const dog = only(['_id', 'name', 'breed'])(req.body)
    const result = await dal.post(dog._id, dog.name, dog.breed)
    res.send(result)
  } catch (err) {
    res.status(500).send({error: err.message})
  }
})

app.get('*', async (req, res) => {
  try {
    const dogs = await dal.all()
    res.send(dogs)
  } catch (err) {
    res.status(500).send({error: err.message})
  }
})

module.exports = app

// pure functions
function only(keys) {
  return function (obj) {
    return keys.reduce((acc, key) => {
      acc[key] = obj[key]
      return acc
    }, {})
  }
}
