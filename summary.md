# Testing Express APIs

## Why write tests?

To provide confidence that the feature or functionality that was created works as expected, this often means testing the unexpected. Using tests to cover your features, will give you confidence as a developer your code is working as intended.

## Testing is hard! 

While testing is a great tool, it is hard to get comfortable and confident, it takes a lot of practice and a conditioning. It is very easy to do one of the following:

* over testing
* testing code that is churn
* not testing at all
* testing the wrong things

## Testing API's Strategy

Apis are the bridge from your front-end to your backend, it needs to be secure, it needs to verify anything coming in and going out. This is one of the most critical points in your application. So at a minimum you want to create coverage over testing your api.

* End to End testings are brittle and slow
* Unit testing tends to focus more on implementation than the specification, which can lead to a lot of churn when refactoring.
* Integration tests, will test from the api endpoint to the data source. 

I have found integration testing to be a good starting point for core testing. 

## How to test?

When testing apis, I want to use `fetch` to make my calls to test my apis, also I want to dynamically load the api using a test server like `supertest`. Finally, I want to mock side effects in my codebase to focus on my code and not external dependences.

This results in to three tools:

* Test Runner/Assert
* Test Server
* Mock DataSources

## Tape

There are several great test runners, but I have always been happy with `tape` it is not the most popular and it is focused on a minimium foot print. There is also Jest and Mocha, but I like tape and the result it provides for my applicaton.

## test-server


## mock-fetch 
