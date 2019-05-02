# Getting Started 

Testing Express API's

## Integration Tests

Testing by calling an endpoint on the server processing it through the application to the external data source and back, by mocking out the external data source.

```
                                  +------------+            +-------------+
      +-----------+               |            |            |             |
      |           |               |            |            |             |
+-----> Route     +-------------->+  DAL       +-----+----->+  Source     |
      |           |               |            |     |      |             |
      |           |               |            |     |      |             |
      +-----------+               +------+-----+     |      +-------------+
                                         ^           |
                                         |           |
                                         |           |
                                         +-----------+
```

By mocking out the external source, the tests are able to run without having to re-create external parts, or depending on external services to exist.

The end result your tests are testing the specification and not the implementation, which makes it easier to refactor.


> I have found these types of test to be the most maintainable and they provide the most signal when something is wrong.

## What do you need to setup these tests?

* Test Runner/Assertion Library - (tape)
* Dynamic Test Server - (test-server) 
* Mocking Libraries - (mock-fetch, rewire)

---

[Next](/test-runners.md)





