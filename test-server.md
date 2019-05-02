# Test Server

When testing your api endpoints, you will want to run each test in isolation and initiate the request outside of the server and let if flow through the code and return a response. You could start a server, then run all of your tests and then close the server, but I found the process to be more maintainable by standing and closing a server per test.

There was a tool I used for quite a while called `supertest` this tool will give you a server and a `request` like domain-specific-language to run your server and perform requests to it at the same time. 

> But I had a problem, this dsl was very specific to `supertest`, Since WhatWg released `fetch` and it has been adopted by all major browsers. I wanted to see if I could leverage it for my tests. There are several `isomorphic-fetch` modules that work on node and the browser. So I wanted a way to create a test server, but then give the developer the choice of how they want to make calls to the server. I searched for a module on npm that does this thing, but could not find exactly what I was looking for. So I created `test-server`. 

## @twilson63/test-server

Takes an express application as an argument and returns the url the app is running on 
an a close method to stop the server.

``` js
const testServer = require('@twilson63/test-server')
const express = require('express')
const app = express()

app.all('*', (req, res) => res.send({hello: 'world'}))

const server = testServer(app)

console.log(server.url)

// make calls to your app

server.close(() => //do clean up here)

```

## Source

It is not a lot of code, but I find it easy to just `npm install @twilson63/test-server`


``` js
module.exports = (app = {}) => {
  // verify app is express app
  if (not(has('listen', app))) { 
    throw new Error('Express App is required!')
  }

  // start server
  const server = app.listen()

  // get port
  const port = server.address().port

  // return helper object
  return Object.freeze({
    port,
    url: `http://localhost:${port}`,
    close: server.close.bind(server)
  })
}


function not (a) {
  return !a
}

function has (prop, obj) {
  return obj[prop] !== undefined 
}

```

Feel free to improve it!

[Source](https://github.com/twilson63/test-server)

---

[Next](/mock-fetch.md)
 
