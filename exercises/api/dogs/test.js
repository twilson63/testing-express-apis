require('isomorphic-fetch')
const test = require('tape')
const testServer = require('@twilson63/test-server')
const rewire = require('rewire')
const app = rewire('./')
  
app.__set__('dal', {
  post: (...args) => {
    // verify
    return Promise.resolve({ok: true})
  },
  all: () => {
    return Promise.resolve([ { _id: '1', _rev: '1-1', name: 'Gretal', breed: 'Jack Russell' } ])
  }
})


test('CREATE DOG', async t => {
  const server = testServer(app)
  const result = await fetch(server.url + '/api/dogs', {
    method: 'POST',
    body: JSON.stringify({
      _id: "1",
      name: "Gretal",
      breed: "Jack Russell"
    }),
    headers: {
      'content-type': 'application/json'
    }
  }).then(res => res.json())

  t.ok(result.ok)

  server.close(t.end)
})

test('LIST DOGS', async t => {
  const server = testServer(app)
  
  const dogs = await fetch(server.url + '/api/dogs', {
    method: 'GET',
    headers: {
      'content-type': 'application/json'
    }
  }).then(res => res.json())


  t.ok(dogs.length === 1)

  server.close(t.end)

})

