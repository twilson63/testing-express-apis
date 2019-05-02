require('isomorphic-fetch')

const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const url = process.env.DB

module.exports = app

app.post('*', bodyParser.json(), async (req, res) => {
  const result = await fetch(url, {
    method: 'POST',
    body: only(['name', 'color'], req.body),
    headers: {
      'content-type': 'application/json',
      authorization: `Basic ${process.env.AUTH}`    }
  }).then(res => res.json())
  if (!result.ok) { return res.status(500).send({ error: result.error }) }
  res.send(only(['ok', 'id'], result))

})

app.get('*', async (req, res) => {
  res.send(
    await fetch(url)
    .then(res => res.json())
    .then(prop('rows'))
    .then(pluck('doc'))
    .catch(err => [])
  )
})

// pure functions
function prop(key) {
  return function (obj) {
    return obj[key]
  }
}

function pluck(key) {
  return function (array) {
    array.map(o => o[key])
  }
}

function only(arr, obj) {
  let newObj = {}
  arr.forEach(key => newObj[key] = obj[key])
  return newObj
}

