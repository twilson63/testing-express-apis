# Xtras

Here are some xtras that you may be interested in:

* BDD with cucumber.js - https://github.com/cucumber/cucumber-js
* TDD the RITE way - https://medium.com/javascript-scene/tdd-the-rite-way-53c9b46f45e3 
* Pickle.js - https://www.picklejs.com/
* Cypress.io - https://www.cypress.io/

## BDD - Behavior Driven Development

If you are looking for your test to be more descriptive and serve as specifications you may want to look into Behavior Driven Development. 

```
Feature: Create Cat

In order to have many cats
As a cat person
I want to create cats with different colors
So that I can have many cats that are different in appearance

Scenario: Happy Path

Given I have a accessToken
When I request `https://api.animals.com/cats` with a `POST` method
And I include `{ "color": "black", "name": "Bill" }`
Then I expect to receive a response with a code of `201`
And a response body that matches `{"_id": "1", "name": "Bill", "color": "black"}`

Scenario: Sad Path
...
```

### TDD the RITE Way

```
describe('clipReducer/setClipStopTime', async assert => {
  const stopTime = 5;
  const clipState = {
    startTime: 2,
    stopTime: Infinity
  };
  assert({
    given: 'clip stop time',
    should: 'set clip stop time in state',
    actual: clipReducer(clipState, setClipStopTime(stopTime)),
    expected: { ...clipState, stopTime }
  });
});

```

There are a lot more, some of the best articles on testing are here:

https://medium.com/javascript-scene

---

[Next](/exercises.md)
