# Mocking 

There is plenty of conversations about mocking with testing and how it is great for some and bad for others. In the cases where I am calling apis to get data mocking the backend data source works well for my tests. I am always able to comment out the mocks to testlive with the backend in my development environment, but when I run tests on the CI server, I prefer to run with simple mocks, instead of launching databases to run a suite of tests.

## Mocking Tools

* Sinon.js - https://sinonjs.org/
* Nock - https://github.com/nock/nock
* Jest Mocks - https://jestjs.io/docs/en/manual-mocks

## Tools I use

* Rewire - https://github.com/jhnns/rewire
* mock-fetch - https://github.com/twilson63/mock-fetch

> mock-fetch is a library I built to mock fetch calls to a http backed datasource.

### Rewire

Rewire allows you to mock any required module and provide alternative responses to the functions or methods being invoked. 

``` js
const rewire = require('rewire')
const fs = rewire('fs')

fs.__set__('readFileSync', () => 'Hello World')

console.log(fs.readFileSync('./README.md', 'utf-8'))

```

> Rewire does not work for `esm` - but there are alternatives, I am keeping an eye on https://www.npmjs.com/package/rollup-plugin-mock-imports - as I use `rollup` for my fronend work.

### mock-fetch

MockFetch is a little library I created, because I like the fetch api, and had trouble getting the other fetch mocking libraries to work. You are welcome to try it, but it is new. If you are using Node and a library that uses the node http-client, you may want to try `Nock` it is pretty battle tested.

``` js
require('isomorphic-fetch')
const { mockFetch, unMockFetch } = require('mock-fetch')

mockFetch('http://localhost:5984/example/_all_docs?include_docs=true', 'GET', {
 rows: [{key: '1', value: '1-1', doc: { _id: '1', _rev: '1-1', name: 'Hello World' }}],
 total_count: 1
})

fetch('http://localhost:5984/example/_all_docs?include_docs=true')
  .then(res => res.json())
  .then(results = console.log(results))

unMockFetch()

fetch('http://localhost:5984/example/_all_docs?include_docs=true')
  .then(res => res.json())
  .then(results = console.log(results))

```

---

[Next](/org.md) 
