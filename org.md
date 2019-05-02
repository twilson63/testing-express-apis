# Organizing Test Code

Often times with testing and application development it is hard to organize your code. 

> How to organize your test code? It depends - consistency wins.

There seems to be two strategies, one mimic your application folder structure under a `test` directory, or co-locate your tests with your application code. I have used both and in my opinion it is a toss up. 

I am really fond of this pattern, where each test is co-located with the module, but then in the test folder their is a manifest file that `requires` all the test. This gives me a way to run each test in isolation or run them all as a batch.


```
|____api
| |____dogs
| | |____test.js
| | |____index.js
| |____cats
| | |____test.js
| | |____index.js
| |____test
| | |____index.js
```

test/index.js

``` js
// tests
require('../dogs/test')
require('../cats/test')
```

```
node api/dogs/test // run just the dogs test
node api/test // runs all tests as one group
```

---

[Next](/xtras.md)
