The CAP theorem, also known as Brewer's theorem, is one of the fundamental principles of distributed systems. The theorem's premise is that no network-based data distribution system can simultaneously guarantee all three characteristics of the theorem. The theorem's pillars are:

1. **C**onsistency
2. **A**vailability
3. **P**artition Tolerance

Note that CAP is an acronym of the three characteristics of the theorem.

## Characteristics

Let's take a look at each characteristic and what is expected from them…

### Consistency

Every read (data query) must receive the most recent write (data change/persistence) or an error. In a consistent system, **all nodes** must view the same data at the same time, meaning consistency is related to having a focal point with the most up-to-date data possible.

Consistency is about ensuring all nodes see the data in the same state.

**Disclaimer**: When we talk about nodes, we are explicitly referring to distributed systems, meaning a distributed system contains multiple nodes connected through the network. Each node can perform the complete or partial processing of an application action. If you're still unsure about this, I recommend Googling the topic.

### Availability

Every query (request) must receive a response (not an error) — it's important to note that we do not need to guarantee the response contains the most up-to-date data here. In a highly available system, **every request made to the system must result in a successful response even if some nodes are unavailable**, though this response does not necessarily need to be the latest data version.

Availability is about always being ready to respond.

### Partition Tolerance

Unlike the other characteristics, this one doesn't have such a concrete and declarative name. Basically, a system must continue operating normally even with communication problems between nodes, whether the issue is a failure or even slowness. The term partition precisely denotes this type of problem, meaning the system needs to be partition-tolerant.

Partition tolerance is about dealing with communication failures between nodes.

When a partition occurs, we necessarily need to choose whether to guarantee consistency or availability. Here are some illustrations to exemplify:

Consider a situation similar to the one presented in the image above. We have one cluster with three nodes, the arrows represent their network connections (in red, the partition). In this scenario, we have two possibilities.

The first is choosing to guarantee consistency. In this scenario, all writes in the system become unavailable, meaning that since we can't ensure all nodes have the same updated information, we'll prevent publishing new data versions. Note that this choice compromises availability (as write responses will need to return errors).

On the other hand, we can also choose to guarantee availability, thus allowing writes and reads to occur normally. However, in this case, we can't ensure consistency, as the update made in one node cannot be replicated to others.

## Trade-offs: Gains and Consequences of Each Choice

Now that we know what each characteristic represents, let's look at the trade-offs (gains/consequences) of each choice:

- **CP (Consistency and Partition Tolerance)**: This selection is suitable for systems where data accuracy is crucial, though a degree of unavailability is acceptable.
- **AP (Availability and Partition Tolerance)**: Usually chosen for systems where service availability is critical and it's tolerable for different nodes to have different data versions for some time.
- **CA (Consistency and Availability)**: This scenario is chosen when consistency and availability are essential factors in the system. However, it's important to note that if our system isn't partition-tolerant, when a communication failure occurs between nodes, we won't be able to guarantee both characteristics (as explained earlier). In distributed systems with network communication, this scenario is unfeasible because network failure is a commonly faced problem in the real world.

## Conclusion

Modern distributed systems commonly use a combination of strategies to provide an adequate level (based on the system's scope) of guarantees for each of these characteristics. In other words, you don't need to exclude or overlook any of the characteristics. This theorem aims to present the problem of dealing with distributed systems.

In summary, the CAP theorem provides a series of fundamentals to understand the limitations and consequences of specific choices during the development of a distributed system. However, it's important to note that in the real world, these scenarios are even more complex and involve using several strategies to address all system requirements.

In other words, the CAP theorem is a good starting point for understanding the impacts of system design choices, especially considering network failures (partitioning). However, it's important to note that this is just the beginning of the discussion. We can (and will) delve deeper into the topic in future articles. For now, that's all!

## References

- <https://edisciplinas.usp.br/pluginfile.php/2541318/mod_resource/content/1/TeoremaDeBrewer.pdf>
- <https://softwareengineeringdaily.com/2023/05/12/cap-theorem-23-years-later>
- <https://www.ibm.com/topics/cap-theorem>
- <https://www.cs.ubc.ca/~bestchai/teaching/cs416_2020w2/lectures/lecture-mar23.pdf>
- <https://www.geeksforgeeks.org/the-cap-theorem-in-dbms/>
- <https://www.educative.io/blog/what-is-cap-theorem>
- <https://www.youtube.com/watch?v=eWMgsk7mpFc>
- <https://www.youtube.com/watch?v=BHqjEjzAicA>