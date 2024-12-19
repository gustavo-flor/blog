Backpressure is a technique to ensure correct software operation when processing a data stream.

It allows the application to manage the expected number of requests without overloading the system or affecting its performance.

## In Detail

Imagine a system where one component produces data while another consumes it, both working together without issues.

However, at some point, the number of messages the consumer can process within a given timeframe reaches its limit.

What should we do in this case to prevent exceeding the limit, which could harm service performance, cause instability, and even crash the system?

---

<aside class="callout">
  <div class="icon">💡</div>
  <div class="content">
    <p>Note that the components can be at any abstraction level within your architecture. This means the producer and consumer could represent an API Gateway and a microservice, a message broker and a listener, internal service components, etc.</p>
  </div>
</aside>

---

This is where backpressure comes into play. It acts as a feedback mechanism that informs the producer when the consumer is reaching its limit, signaling that data production should slow down until the data can be consumed again.

In other words, backpressure balances data production and consumption, ensuring both components function correctly and efficiently.

## In Practice

Imagine a component called `Collector` responsible for retrieving data from an API.

The collector fetches new records every ten seconds and sends them to another component called `Executor`.

The executor can process a maximum of `X` tasks simultaneously and has a queue that can hold up to `Y` pending tasks.

To ensure the executor does not exceed its capacity, we need a mechanism to inform the collector of the executor's remaining capacity.

This allows the collector to determine whether to fetch more data. Here's an example implementation:

- **Executor**: The component responsible for processing data

```kotlin
package com.github.gustavoflor.backpressure

class Executor {
    fun execute(word: String) {
        println("Executing word: $word")
        Thread.sleep(8000) // Simulating a slow process
        println("Executed word: $word")
    }
}
```

- **Backpressure**: The flow control mechanism

```kotlin
package com.github.gustavoflor.backpressure

import java.util.concurrent.ThreadPoolExecutor

interface Backpressure {
  fun shouldWait(): Boolean
}

class ReachCapacityBackpressure(
  private val threadPoolExecutor: ThreadPoolExecutor
) : Backpressure {
  override fun shouldWait(): Boolean {
    val queue = threadPoolExecutor.queue
    val remainingCapacity = queue.remainingCapacity()
    println("Reaching capacity: $remainingCapacity")
    val shouldWait = remainingCapacity == 0
    if (shouldWait) {
      println("Waiting for the next process...")
    }
    return shouldWait
  }
}
```

- **Collector**: The component responsible for fetching data and sending it to the executor

```kotlin
package com.github.gustavoflor.backpressure

import java.util.concurrent.ThreadPoolExecutor

class Collector(
  private val threadPoolExecutor: ThreadPoolExecutor,
  private val backpressure: Backpressure,
  private val executor: Executor
) {
  private var counter = 0;

  fun collect() {
    if (backpressure.shouldWait()) {
      return
    }
    execute(loadWord())
  }

  private fun loadWord(): String {
    // Simulating word loading...
    println("Loading word...")
    counter++
    return "hello-$counter"
  }

  private fun execute(word: String) {
    threadPoolExecutor.execute { executor.execute(word) }
  }
}
```

- **Orchestrator**: Links the backpressure mechanism with the executor and collector

```kotlin
package com.github.gustavoflor.backpressure

import java.util.concurrent.Executors
import java.util.concurrent.LinkedBlockingQueue
import java.util.concurrent.ThreadPoolExecutor
import java.util.concurrent.TimeUnit

fun main() {
  val workQueue = LinkedBlockingQueue(3)
  val threadPool = ThreadPoolExecutor(2, 2, 0L, TimeUnit.SECONDS, workQueue)
  val backpressure = Backpressure(threadPool)
  val executor = Executor()
  val collector = Collector(threadPool, backpressure, executor)

  Executors.newScheduledThreadPool(1)
    .scheduleWithFixedDelay({
      collector.collect()
    }, 0, 1, TimeUnit.SECONDS)
}
```

Access the source code at: [github.com/gustavo-flor/backpressure-hands-on](https://github.com/gustavo-flor/backpressure-hands-on)

## Moral of the Story

In this text, we explored a simple way to ensure application efficiency by avoiding resource exhaustion when consuming data streams.

Thank you for your time, and see you soon! 👋

## Go Deeper

If you're curious and want to learn more, check out these resources:

- <https://www.c-sharpcorner.com/article/backpressure-pattern-design-principle/>
- <https://medium.com/@jayphelps/backpressure-explained-the-flow-of-data-through-software-2350b3e77ce7>
- <https://clearmeasure.com/backpressure-in-message-based-systems/>
- <https://mechanical-sympathy.blogspot.com/2012/05/apply-back-pressure-when-overloaded.html>