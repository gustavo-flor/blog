Today, let's talk about **scalability** and **elasticity**—two related yet distinct concepts often mistakenly used as synonyms.

By the end of this text, I hope you'll be able to differentiate and understand the details of each concept, recognizing their application based on the given scenario.

## In Detail

Let's explore the main definitions and differences between **scalability** and **elasticity**.

### Scalability

Scalability is defined as the **ability of an application to grow** vertically and/or horizontally.

- **Vertical Scalability** occurs when more resources are added to a single machine, such as memory and CPU.
- **Horizontal Scalability** happens when more machines (pods, containers, nodes, etc.) are added.

It's worth noting that you can scale both vertically and horizontally or choose only one approach, depending on your needs.

<aside class="callout">
  <div class="icon">💡</div>
  <div class="content">
    <p><strong>Microservices</strong> architectures, in particular, benefit from horizontal scalability. This allows specific parts of the system to be scaled individually, increasing efficiency and optimizing resources.</p>
  </div>
</aside>

In summary, **scalability** is a planned requirement, based on demand forecasts. The process is usually manual, increasing the application's capacity before the load grows, ensuring the system is prepared to handle the expected volume.

Regarding **costs**, they increase proportionally to the projected system load growth. As demand for resources such as processing, storage, or other factors increases, it's necessary to scale databases and systems, raising scalability costs.

### Elasticity

Elasticity is the application's ability to **automatically adapt to workload variations**, using scalability to maintain performance and usability during peak usage.

It also prevents resources from sitting idle during periods of low demand, optimizing system utilization.

Unlike scalability, elasticity is automatic, reactive, and "unplanned." Instead of defining exactly how much the application should scale, you set parameters for dynamic, on-demand adjustments.

**Costs** are proportional to actual system usage—you pay only for what you consume. However, in the cloud, on-demand usage tends to be more expensive because providers cannot accurately plan resource allocation in advance.

## Comparative Analysis

Here's a simple table highlighting the main characteristics and differences between **scalability** and **elasticity**:

|               | Scalability                                                  | Elasticity                                                   |
| ------------- | ------------------------------------------------------------- | ------------------------------------------------------------ |
| **Definition** | Ability of an application to grow vertically or horizontally | Ability of an application to adapt to varying workload volumes |
| **Usage**      | **Planned**: Applied when the workload is predictable        | **On-Demand**: Applied when the workload is variable and unpredictable |
| **Cost**       | **Pay-as-you-grow**: Pay as you scale                       | **Pay-as-you-use**: Pay as you use                           |

As we can see, **scalability** is essential to ensure **performance and availability** in scenarios with predictable usage. It allows the system to prepare in advance, adjusting its capacity in a planned way.

On the other hand, **elasticity** is an "adaptation" of scalability, ideal for situations where the load is variable and unpredictable. It ensures that the application adapts intelligently, avoiding resource waste.

## Moral of the Story

Finding a **balance between scalability and elasticity** is important to optimize costs and performance.

Planning part of the capacity in advance can reduce expenses by avoiding high on-demand resource costs, while elasticity ensures the system is ready for unexpected peaks without compromising the user experience.

With this content, I hope I’ve helped you understand and differentiate scalability and elasticity, and how these concepts impact application performance and costs.

---

**Thank you for following along!**

If you need more information, check out the links below. See you next time! 👋

## Go Deeper

- <https://www.wrike.com/blog/scalability-vs-elasticity/>
- <https://www.couchbase.com/blog/scalability-vs-elasticity/>
- <https://middleware.io/blog/elasticity-vs-scalability/>
- <https://www.geeksforgeeks.org/scalability-and-elasticity-in-cloud-computing/>
- <https://www.outsystems.com/tech-hub/cloud-dev/cloud-scalability-vs-elasticity/>