If you thought about taking a rest, I’m sorry to say that’s not today’s topic. Instead, we’ll explore a software architecture style often referred to as an architectural pattern — though it’s not the same as a design pattern (like those in software engineering). An architectural style is a set of principles or constraints a system must follow to achieve a specific goal. So, let’s dive into what REST is all about…

## Let’s Get Started

REST stands for **REpresentational State Transfer**, a concept introduced by **Roy Fielding** in the early 2000s. It’s an architectural style for distributed hypermedia systems. Simply put, REST is a hybrid style combining multiple network-based architectural principles with specific rules to create a consistent web-based system architecture.

Not sure what **hypermedia** means? Though less common today, it refers to connecting information through links or redirects, beyond just text. Think of HTML — HyperText Markup Language — found in every website. With hypermedia, we’re dealing with text, images, documents, and more.

## Key Principles

Services that adhere to these principles are called **RESTful**. Implementing all six can enhance performance, reliability, and reusability by allowing incremental modifications without disrupting the whole system.

### 1. Client-Server

The system must separate the consumer (client) from the provider (server). This division ensures both sides evolve independently.

- **Client**: Handles the user interface and experiences.
- **Server**: Manages business logic, data persistence, and data operations.

### 2. Stateless

Each request must include all the information the server needs to process it — no session state saved on the server. This approach boosts scalability but might reduce performance due to repeated data transmission.

### 3. Cache

Clients can cache server responses when explicitly allowed. This reduces network load and enhances performance but must be managed carefully to avoid stale data.

### 4. Uniform Interface

The client and server must communicate through standardized contracts, ensuring a clear separation of concerns and enabling independent evolution.

### 5. Layered Systems

Multiple intermediary layers (like proxies, gateways, load balancers) should operate transparently, adding scalability and reliability.

### 6. Code-On-Demand (Optional)

The server can transfer executable code to the client, simplifying the client-side logic — though rarely used today.

## Core Data Elements

### Resources

Resources represent any identifiable information — documents, images, or collections. Each resource must have a unique identifier.

### Resource Representations

A resource’s state is represented and transferred between the client and server, typically in JSON or XML formats.

**Learn More**: [What is JSON?](./2-what-is-json)

### Metadata

Metadata provides additional information about resources, like format or related links.

### Control Data

This defines the purpose of the request — what operation to perform and how to behave (e.g., caching, rate limits).

## Moral of the Story

REST isn’t a **silver bullet**, **HTTP + JSON**, or a **design pattern**. It’s an adaptable architectural style guiding communication in distributed systems.

REST is:
- An architectural style
- Adaptable
- A model for distributed system communication

## References

- <https://ics.uci.edu/~fielding/pubs/dissertation/top.htm>
- <https://restfulapi.net/>
- <https://medium.com/@alexandre.highrollers/restful-api-for-distributed-hypermedia-system-78dbfb8a58b9>