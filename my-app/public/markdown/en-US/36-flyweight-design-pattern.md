**Classification**: Structural

The **Flyweight** Design Pattern — also known as *Cache* — allows optimizing memory usage in scenarios where the application needs to manage a large number of objects with similar content.

## The Problem

Imagine a scenario where your application needs to instantiate many objects, which might share common content (state).

If the shared content is lightweight or the machine running the software is robust, you won't face major issues.

However, consider a case where objects have high memory costs, or imagine needing to instantiate millions of objects. Think also about a situation where the available machine has very limited computational resources.

How can memory usage be optimized in such cases?

## The Solution

There are three key components:

- **Flyweight**: This component is responsible for storing data that repeats and/or is costly for your software.
- **Flyweight Factory**: This component manages the creation of Flyweights. When a new instance is requested, it checks whether the object already exists in memory. If it doesn't, the factory creates and stores it in its internal memory before returning the object.
- **Context**: This component stores distinct/unique data and should be associated with a Flyweight through composition. If necessary, it requests the Flyweight creation via the Flyweight Factory.

> [Source Code](https://github.com/gustavo-flor/design-patterns-hands-on/tree/main/src/main/java/com/github/gustavoflor/dpho/structural/flyweight)

## Go Deeper

- <https://refactoring.guru/design-patterns/flyweight>
- <https://sourcemaking.com/design_patterns/flyweight>