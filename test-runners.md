# Test Runners and Assertion Libraries

There are a lot of test runners and assertion libraries out there the most popular test runners are:

* mocha
* jest
* ava

And there are many assertion libraries from `assert`, `chai`, and `expectjs`.

In this presentation we will use `tape`, it is not as popular, but it is robust and minimal. It also has an assertion library built in.

## [Tape](https://github.com/substack/tape)

Tape is easy to learn and easy to use:

three assertion commands

* ok(boolean)
* equal(a,b)
* deepEqual(a,b)

simple test signature

``` js
test('my test description', assert => {
  assert.ok(true, 'my assertion description')
  assert.equal(true, true, 'my second assertion')
  // I am done
  assert.end()

})
```

also provides planning:

``` js

test('my second test description', assert => {
  assert.plan(2)
  assert.ok(true, 'assertion 1')
  assert.ok(true, 'assertion 2')
  // no need to call end, it knows it is finished.
})
```

### Installing tape

```
npm install --save-dev tape
```

### Adding tape to npm scripts

```
npm install json -g
json -I -f package.json -e 'this.scripts.test = "tape test"'
```

### Example Tape file

``` js
const test = require('tape')

test('always passing', t => {
  t.ok(true)
  t.end()
})
```

### Extendable

There are plenty of extensions with tape:

* faucet
* tap-browser-color
* tap-nyan

[See More](https://github.com/substack/tape#things-that-go-well-with-tape)

[Documentation](https://github.com/substack/tape#methods)

---

[Next](/test-server.md)


 
