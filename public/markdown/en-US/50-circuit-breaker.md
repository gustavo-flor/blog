The Circuit Breaker pattern in microservices architecture enables an application to remain operational and avoid cascading failures when facing communication issues with remote calls.

![Title of the article "Circuit Breaker" with its three states (Close, Open, and Half-Open)](/images/circuit-breaker/banner.png)

## Overview

This pattern uses the concept of a circuit breaker in an electrical circuit to address communication issues in a distributed system.

Similar to the component in our homes that prevents other electrical components from burning out when a failure is detected, 

the Circuit Breaker monitors service-to-service calls, and upon detecting anomalies, it halts future calls, preventing system overloads and cascading failures to other services.

## Details

Before we dive in, let’s define some key terms:

- **Circuit Breaker**: The component responsible for monitoring and managing remote calls in an application.
- **Circuit**: Refers to the integration between the application and the remote service.

### Circuit States

The Circuit Breaker manages the behavior of a **circuit** through its three possible states:

#### Closed

![Illustration representing the circuit in Closed state](/images/circuit-breaker/closed-state.png)

In this state, the system operates normally, allowing communication between services.

Here, the assumption is that applications are healthy, and only the error rate and latency of requests are monitored. 

If the error rate or latency exceeds the desired thresholds, the circuit breaker opens the circuit, changing the state to **Open**.

#### Open

![Illustration representing the circuit in Open state](/images/circuit-breaker/open-state.png)

In this state, the Circuit Breaker has detected a failure in the monitored integration and has opened the circuit, temporarily halting requests.

When the circuit is open, it prevents requests from being sent to the failing service, which can help avoid overloading the service and cascading failures to its clients.

During this state, the Circuit Breaker typically enters a timeout period, waiting for a predefined time for the remote service to stabilize. After this period, the circuit breaker transitions the state to **Half-Open**.

#### Half-Open

![Illustration representing the circuit in Half-Open state](/images/circuit-breaker/half-open-state.png)

In this state, the system checks whether calls can resume normally. When a circuit is **Half-Open**, a limited number of requests are allowed to the external service to verify if it has recovered.

After some requests, the error rate and/or response time are checked again. If the issues persist, the circuit returns to **Open** and goes through another timeout period. If the problem is resolved, the circuit switches back to **Closed**.

### Types of Circuit Breaker

There are two possible types of Circuit Breakers, which define how the transitions between **Closed** and **Open** states are determined:

- **Count Based**: The circuit state changes from Closed to Open if the last *N* requests exceed the failure rate or response time limit.
- **Time Based**: The circuit state changes from Closed to Open if the requests made in the last *N* seconds exceed the failure rate or response time limit.

## Hands-On

> “Talk is cheap. Show me the code” — Linus Torvalds

In this text, I will demonstrate how to implement and configure the Circuit Breaker pattern using the [Resilience4J](https://resilience4j.readme.io/) library alongside the [Spring](https://spring.io/) framework (Java / Kotlin).

<aside class="callout">
    <div class="icon">💡</div>
    <div class="content">
        <p>If you use another language or framework, the general idea of configuration will be very similar. The main difference will be the syntax and configuration methods of the library you choose. In that case, refer to the library's documentation.</p>
    </div>
</aside>

### 1. Installing Resilience4J

Add the dependency to your project’s configuration file as shown below:

- **Gradle (build.gradle)**

```groovy
implementation 'org.springframework.cloud:spring-cloud-starter-circuitbreaker-resilience4j'
```

- **Maven (pom.xml)**

```xml
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-circuitbreaker-resilience4j</artifactId>
</dependency>
```

### 2. Understanding Configurations

After installing Resilience4J, let’s begin by understanding the main configuration options before adding any code to our project.

```yaml
resilience4j:
  circuitbreaker:
    instances:
      YOUR_CIRCUIT_BREAKER_NAME:
        sliding-window-type: COUNT_BASED
        sliding-window-size: 100
        failure-rate-threshold: 80
        slow-call-rate-threshold: 100
        slow-call-duration-threshold: 30000 # milliseconds
        minimum-number-of-calls: 10
        permitted-number-of-calls-in-half-open-state: 10
        max-wait-duration-in-half-open-state: 0s
        wait-duration-in-open-state: 60s
        automatic-transition-from-open-to-half-open-enabled: false
        ignore-exceptions:
          - feign.FeignException.NotFound
          - feign.FeignException.Conflict
```

To configure your Circuit Breaker, add properties under `resilience4j.circuitbreaker.instances.YOUR_CIRCUIT_BREAKER_NAME`.

<aside class="callout">
    <div class="icon">🔑</div>
    <div class="content">
        <p>Remember to replace <code>YOUR_CIRCUIT_BREAKER_NAME</code> with the value configured in your application (I’ll remind you of this later).</p>
    </div>
</aside>

#### Explanation of Configurations

- `sliding-window-type`: Defines the type of Circuit Breaker to use. Options: **COUNT_BASED** or **TIME_BASED**.
- `sliding-window-size`: Defines the size of *N* for the chosen Circuit Breaker type.
- `failure-rate-threshold`: Maximum error rate for the circuit to remain in the **Closed** state.
- `slow-call-rate-threshold`: Maximum rate of slow calls for the circuit to remain in the **Closed** state.
- `slow-call-duration-threshold`: Time (in milliseconds) to define whether a call is considered slow.
- `minimum-number-of-calls`: Minimum number of calls required to start calculating error and slow call rates.
- `permitted-number-of-calls-in-half-open-state`: Number of allowed calls in the **Half-Open** state.
- `max-wait-duration-in-half-open-state`: Maximum wait time (without calls) in the **Half-Open** state before transitioning to **Closed**. If set to `0s`, the transition occurs only after a call.
- `wait-duration-in-open-state`: Wait time in the **Open** state before transitioning to **Half-Open**.
- `automatic-transition-from-open-to-half-open-enabled`: Automatically transitions the Circuit Breaker from **Open** to **Half-Open** after the wait time. If set to `false`, the transition occurs only after a call. Note: Enabling this creates a new thread to manage the state.
- `ignore-exceptions`: List of exceptions that should not be considered failures when calculating the error rate.

### 3. Coding

To make everything work, go to the class where you want to use the Circuit Breaker and add the `@CircuitBreaker` annotation. See the example below:

```java
import io.github.resilience4j.circuitbreaker.annotation.CircuitBreaker;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MyService {
    private final MyClient myClient;

    @CircuitBreaker(name = "my-circuit-breaker")
    public String doSomething() {
        return myClient.doSomething();
    }
}
```

From now on, when calling this method, if the circuit is in the **Open** state, a `CallNotPermittedException` will be thrown.

To add a fallback behavior for open state scenarios, make the following changes:

```java
import io.github.resilience4j.circuitbreaker.CallNotPermittedException;
import io.github.resilience4j.circuitbreaker.annotation.CircuitBreaker;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MyService {
    private final MyClient myClient;

    @CircuitBreaker(name = "my-circuit-breaker", fallbackMethod = "doSomethingFallback")
    public String doSomething() {
        return myClient.doSomething();
    }

    protected String doSomethingFallback(final CallNotPermittedException exception) {
        return "fallback";
    }
}
```

<aside class="callout">
    <div class="icon">💡</div>
    <div class="content">
        <p>The fallback method must have the same signature as the original method, with the same return type and arguments, but it can also accept <code>CallNotPermittedException</code> as the last parameter.</p>
    </div>
</aside>

For more examples, [check this repository](https://github.com/gustavo-flor/spring-breaker-hands-on).

## The Moral of the Story

In summary, we have learned that adding a Circuit Breaker pattern to your application can significantly increase your system's resilience by handling errors and preventing cascading failures.

It is important to note that such patterns increase the complexity of your code and project, so use them wisely and only when necessary.

Thank you for reading! 👋

## To Dive Deeper

- <https://microservices.io/patterns/reliability/circuit-breaker.html>
- <https://resilience4j.readme.io/docs/circuitbreaker>
- <https://reflectoring.io/circuitbreaker-with-resilience4j>
- <https://medium.com/@truongbui95/circuit-breaker-pattern-in-spring-boot-d2d258b75042>