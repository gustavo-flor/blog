**Distributed Tracing**, in a free translation, **distributed tracking**, is a microservices architectural pattern used to facilitate and optimize observability in distributed systems.

This pattern allows optimized tracking of requests traveling through multiple systems in an application.

Although the concept is simple, its impact is — at the very least — significant, which is why this topic is increasingly relevant when discussing observability in distributed systems.

Let's understand its main concepts and requirements...

## Traces and Spans

Traces and spans are the main terms of this pattern. The **trace** represents the entire path of a request, while the **span** represents one (of many) operations within a request, meaning **spans** represent the entire trajectory of a **trace**.

## Context Propagation

The **context** is simply the object containing information about the service initiating communication and the service receiving it. This makes it possible to correlate **spans** associated with a **trace**.

Given this, **context propagation** is the mechanism that disseminates/manages this object across services, ensuring that traces are distributed — which explains the term *distributed tracing*.

## Trace Aggregator

A **trace aggregator** is a component/tool responsible for collecting, storing, and organizing traces from various services in a distributed system.

Some open-source tools available on the market include:

- [Jaeger](https://www.jaegertracing.io/)
- [Zipkin](https://zipkin.io/)

It's also worth noting that there are paid software solutions offering this functionality on-demand, such as [Datadog](https://www.datadoghq.com/), [Dynatrace](https://www.dynatrace.com/), and [New Relic](https://newrelic.com/).

## Use Cases

The ability to visualize request data in a distributed system can be very useful for understanding how services operate.

Some key uses for distributed traces include:

1. Error verification and identification
2. Performance analysis
3. Tracking system dependencies
4. Security analysis

## The Moral of the Story

As our understanding of distributed systems and, especially, microservices architecture matures, the topic of observability is increasingly discussed and expanded due to the need for a deep understanding of our system flows.

The *Distributed Tracing* architectural pattern precisely addresses this need, enabling a complete end-to-end view of your system's entire flow.

If you are not using it yet, I strongly recommend implementing a proof of concept, and if the results align with your needs, expand it across your entire system.

## Go Deeper

- <https://gethelios.dev/distributed-tracing>
- <https://w3c.github.io/trace-context>