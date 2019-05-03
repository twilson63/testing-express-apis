# Exercises

The best way to get good at testing is to practice and practice and practice. Testing at first can be very hard, but over time, it can become a real asset in your tool shed.

> For these exercises use the `exercises` directory

## Setup

Create `exercises/.env` file

```
DB=https://db.pouchcloud.com/cats
AUTH=Y2F0Om1lb3c=
```


## Exercise 1

* Install tape
* Create a test direction and an index.js file in the directory
* Setup up tape to run using npm scripts
* Create a test that always asserts true

### Hints

- READ Docs - https://github.com/substack/tape

---

## Exercise 2

* Install @twilson63/test-server
* Install isomorphic-fetch
* require them in your test file - index.js
* require the api.js file
* create a test using the testServer to spin up your api
* and do a get request to your root endpoint, it should return `{"hello": "world"}`

### Hints

- Check out README - https://github.com/matthew-andrews/isomorphic-fetch
- Check out README - https://github.com/twilson63/mock-fetch#readme


---

## Exercise 3

* Install @twilson63/mock-fetch
* require { mockFetch, unMockFetch } in your test file
* create a test that makes a post to the api/cats endpoint
* verify it actually posts to the endpoint by manually curling the get endpoint
* then use mockFetch to mock the endpoint
* don't forget to unMockFetch when complete

---

## Exercise 4

Use `rewire` to mock sqlite3 relational db calls

* Review implementation in the `exercises` project



