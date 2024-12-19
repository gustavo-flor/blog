Idempotency is a term used in computing to define operations that, based on the initial input, can be executed multiple times without altering their final result.

<aside class="callout">
  <div class="icon">❓</div>
  <div class="content">
    <p>The word Idempotency derives from the Latin "idem," meaning "the same," and the word "potens," meaning powerful.</p>
  </div>
</aside>

We know that retries for unexpected errors are a common practice in distributed systems.

However, such actions can introduce other problems if we don’t ensure that the final result remains the same.

I think you’re starting to understand where I’m going…

## Overview

Imagine a food delivery system, similar to iFood, Uber Eats, Rappi, etc.

In this scenario, the application, upon receiving a new order, must request a payment charge from the provider.

However, due to a network issue, the application doesn’t receive a response from the provider confirming or denying the charge, making it necessary to retry the request.

In a non-idempotent system, we might end up charging the customer incorrectly.

<aside class="callout">
  <div class="icon">📌</div>
  <div class="content">
    <p>One could argue that the application could simply avoid retries. However, in this case, we wouldn’t know the payment status, so it would be necessary to deny the customer’s order.</p>
  </div>
</aside>

This scenario wouldn’t occur in an idempotent system, as we would have the guarantee that the operation results would remain the same.

## In Detail

Now that we understand what idempotency is and why it’s important, let’s understand how to implement it.

<aside class="callout">
  <div class="icon">💡</div>
  <div class="content">
    <p>Note that this behavior can be ensured in several ways. In this text, I will discuss the solution that fits most scenarios.</p>
  </div>
</aside>

First, we must define a unique identifier for each request.

This value will be primarily responsible for determining whether the operation should be executed. This identifier is usually stored in a header called `X-Idempotency-Key`.

Now, when the system receives the request, it should capture the identifier sent by the client, execute the operation, and persist the identifier linked to the result.

In these cases, it’s common to persist this data in a distributed cache layer, as most of the time we only need these values for certain periods.

However, it’s important to understand your scenario. In more specific cases, you might need to store this data in a database.

## Moral of the Story

In this text, we saw that idempotency in distributed systems is essential for ensuring the integrity of executed operations.

Moreover, it became clear that with simple adjustments in our application, we can implement it, thereby increasing our systems’ reliability.

Thank you for reading, and I recommend checking out the impact a non-idempotent system caused on Uber Eats, [click here to watch](https://www.youtube.com/watch?v=PVzcWBmN2L0).

Thank you very much, and see you next time! 👋

## Go Deeper

- <https://mavericknyk.medium.com/idempotent-rest-apis-eb186c386117>
- <https://medium.com/@shoaibahmd/rest-api-idempotency-building-robust-apis-for-seamless-web-interactions-838241418dcb>
- <https://medium.com/@hamidrezakhaleghi67/idempotency-in-rest-architecture-79568955d6d4>