If you thought of resting, I’m sorry to inform you, but that’s not the topic of today’s article. Instead, we’ll talk about a software architecture style, sometimes also referred to in literature as an architectural pattern. 

Let’s not confuse it with design patterns, though. 

An architectural style is essentially a guide of principles/restrictions a software must follow to achieve a specific goal. 

Let’s now dive into understanding what REST is...

## Introduction

REST is an acronym for REpresentational State Transfer. A loose translation would be "representational state transfer." The term was introduced by Roy Fielding in the 2000s. It’s an architectural style for distributed hypermedia systems. Simply put, REST is a hybrid architectural style, combining several other network-based software architectural styles with added rules and criteria, forming a unified contract for modern web software architecture.

You might find the term hypermedia confusing. Although it’s not very common nowadays, it’s essentially the ability to connect information from different parts of the web using links or other forms of redirection. For example, HTML (a technology found on every website) is a HyperText Markup Language. When we talk about hypermedia, we go beyond just text, involving images, documents, etc.

## Core Principles

Services that adhere to these principles entirely are called RESTful. Such services are likely to enhance their performance, reliability, and reusability, as components can be incrementally modified without affecting the system as a whole.

### 1. Client-Server

This principle states that we must decouple the service consumer from the service provider into two distinct entities: the client and the server. By separating these responsibilities, we ensure each can evolve independently without needing knowledge of the other's context.

The client is responsible for the user interface and experience, focusing on data presentation and handling user actions.

The server manages business logic, data persistence, and how data is created or updated. It also provides an interface for the client to perform operations on stored data.

### 2. Stateless

In a RESTful service, every request (from the client) must contain all the information the server needs to complete the operation. The server does not retain any state in memory about previous requests. Each request is treated as new, with no session information stored server-side.

This ensures requests can be understood and executed independently, making the application scalable and reliable.

However, like any architectural decision, choosing stateless services involves trade-offs. While scalability improves, network performance may decrease as redundant data must be sent repeatedly (since the server doesn’t retain a shared context).

### 3. Cache

To optimize network efficiency, REST allows clients to cache responses. Responses should explicitly or implicitly indicate whether they are cacheable. If a response is cacheable, the client may (not must) reuse it for similar requests in the future. Caching can reduce client-server interactions, improving performance and scalability.

The trade-off is that caching can lower application reliability if not well-managed. For example, if the cached response state differs significantly from a new request’s state. It’s a good practice to invalidate cache after a defined period, which can be server-specified or logically chosen by the client.

### 4. Uniform Interface

This is a central principle of any RESTful system’s architecture. It further decouples client and server components, making them more independent. The idea is to define standardized and specific contracts for operations. By structuring a uniform contract both parties can understand, we ensure their independence.

The trade-off is that such contracts might reduce network communication efficiency. Instead of transferring data in the most operation-specific way, data is transferred according to the predefined contract.

We’ll discuss the elements these contracts should include later.

### 5. Layered Systems

This principle allows the architecture to have multiple layers between the client and server components, provided the client doesn’t know it isn’t communicating directly with the server. These layers must be transparent and adhere to the server’s contract. Examples include proxies, load balancers, gateways, and authentication services. This principle ensures greater decoupling between layers and benefits like scalability, reliability, and availability.

### 6. Code-On-Demand (Optional)

This principle, the least used today, allows the server to transfer executable code to the client. It’s the only optional REST principle. This simplifies the client’s scope, as functionality parts can be delivered directly from the server via executable scripts.

#### Data Elements

##### Resources

Resources are the primary abstraction of information in REST. They represent any information that can be named: a document, image, a collection of resources, etc. Essentially, any concept that can be referenced can be defined as a resource. Each resource in REST must have a unique identifier for interaction within the architecture.

##### Resource Representations

The representation of a resource is its current or desired state. This representation must be transferred between the client and server. Each representation may have a specific format, such as JSON or XML. For example, an animal resource could be represented by a JSON including fields like breed, name, size, and its identifier.

What is JSON? [Click here to understand](./2-what-is-json).

##### Metadata

Metadata comprises key-value pair information, allowing additional details about a resource or its representation to be conveyed. For example, metadata might specify a resource’s representation format, links related to the resource (linked to the HATEOAS concept), and so on.

##### Control Data

Control data defines the purpose of the request between components, such as the operation being requested and the response’s meaning. It can also be used to parameterize the request and override default behaviors, like cache behavior or rate limits.

Control data may seem similar to metadata, but the difference is clear: metadata describes the resource or its representation, while control data pertains to the action being executed and its behaviors.

## Conclusion

To wrap up, as mentioned earlier, REST is a hybrid architectural style. It evolved from other models and primarily focuses on scalability, reliability, and availability for network-based communication applications.

What REST isn’t:

- A silver bullet
- HTTP + JSON
- A design pattern

What REST is:

- An architectural style
- Adaptable
- A model for communication between distributed systems

## References

- <https://ics.uci.edu/~fielding/pubs/dissertation/top.htm>
- <https://restfulapi.net/>
- <https://medium.com/@alexandre.highrollers/restful-api-for-distributed-hypermedia-system-78dbfb8a58b9>