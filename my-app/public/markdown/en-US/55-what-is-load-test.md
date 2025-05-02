Nowadays, application performance is a critical aspect of ensuring a system's usability.

Imagine launching a new feature or product, only for your system to crash due to the amount of traffic it receives.

This type of situation can create a negative impression of your system and even frustrate users, causing you to lose countless opportunities with those customers.

This is where load testing comes in. Let's understand what load testing is…

## In Detail

By simulating different usage loads on a system, load testing helps identify potential bottlenecks before they occur in production.

This approach ensures that your system efficiently handles task execution even under high demand.

To simulate production environment scenarios effectively, load tests are divided into different types, each focusing on a specific load and duration. Let's explore…

### Types of Load Tests

![Graph showing types of load tests and their respective durations](/images/load-tests/types-of-load-test.png)

The following list presents the six most common types of load tests and their objectives:

- **Smoke Test**

  This test's main goal is to ensure that the application can handle a light load of requests.

  It is typically used as a pre-test for other types of load tests.

- **Load Test**

  In summary, this test's main goal is to ensure that the application can withstand the system's average usage load.

  This test usually lasts approximately 5 to 10 minutes.

- **Stress Test**

  It checks the system's functionality under a load higher than the expected average; its duration is similar to the **Load Test**.

- **Spike Test**

  Its main goal is to understand how the system behaves with a high request rate over a short period, testing volumes far above the expected average in just a few seconds.

- **Soak Test**

  The main idea here is to identify potential memory leaks or performance issues, so the test runs for an extended period under a medium usage load.

- **Breakpoint Test**

  Its primary objective is to determine the maximum load at which the system fails (*break point*).

  Unlike the others, it doesn't have a specific load; the idea is to gradually increase the system's load until it begins to fail.

## Moral of the Story

As you can see, proactive actions can identify problems before they occur in production, ensuring that bottlenecks are addressed and load management strategies are implemented to ensure the best system usability.

<aside class="callout">
  <div class="icon">💡</div>
  <div class="content">
    <p>If you're wondering about a load testing tool, check out <a href="https://k6.io">k6.io</a>.</p>
  </div>
</aside>

I hope you enjoyed the reading, and see you soon! 👋

## Go Deeper

- <https://grafana.com/load-testing/types-of-load-testing>