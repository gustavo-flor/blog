[Testcontainers](https://testcontainers.com/) is an [open-source library](https://github.com/testcontainers/) that provides instances of any application that can run in a container via Docker for your integration tests.

It manages the entire lifecycle of your container during the test execution, initializing it at the start and shutting it down at the end.

> “Test Anything You Can Containerize: Database, Message Broker, And More”

## In Detail

To test your conditional checks and business rule executions, using some *mocks* might be enough.

However, what would you do if you needed to test a complex database query? Or check integration with your messaging service? Or even verify the behavior of your distributed cache service?

Testcontainers enables you to test your application as if it were in the real world, simulating a production-like environment.

In other words, it allows your integrations to be fully tested, ensuring greater reliability in your deliveries.

## Supported Languages

Here are some of the currently supported languages:

- [Java](https://java.testcontainers.org/)
- [Go](https://golang.testcontainers.org/)
- [.NET](https://dotnet.testcontainers.org/)
- [Node.js](https://node.testcontainers.org/)
- [Python](https://testcontainers-python.readthedocs.io/en/latest/README.html)
- [Rust](https://docs.rs/testcontainers/latest/testcontainers/)
- [Clojure](https://cljdoc.org/d/clj-test-containers/clj-test-containers/0.7.4/doc/readme)

<aside class="callout">
  <div class="icon">💡</div>
  <div class="content">
    <p>If your language wasn't listed, <a href="https://testcontainers.com/getting-started/#supported-languages-and-prerequisites">click here to check the official and updated list</a>.</p>
  </div>
</aside>

## How It Works

Here's an initial look at how it works [in Java]:

```java
class MyTest {

  @Container
  static final GenericContainer<?> container = new GenericContainer<>("redis:5.0.3-alpine")
    .withExposedPorts(6379);

}
```

To learn more and understand how to use it according to your preferred language, visit:

- <https://testcontainers.com/getting-started/#supported-languages-and-prerequisites>

## Go Deeper

Thank you for reading! Below are the main page of the library and its blog for those who want to explore further:

- <https://testcontainers.com/>
- <https://www.atomicjar.com/category/testcontainers/>