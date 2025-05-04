**Classification**: Structural

The **Bridge** Design Pattern proposes separating a class's responsibilities into two layers: abstraction and implementation.

These layers represent, respectively, use cases (high-level methods) and their sub-behaviors (low-level methods).

## The Problem

Imagine a scenario where your use case might contain different types of sub-behaviors. For example, when changing a user's password, you might send a notification via email, SMS, WhatsApp, etc.

How would you handle this?

One option is to create multiple classes for each use case and its possible sub-behaviors. However, note that for each new sub-behavior, you would need to create a new class with the entire use case implementation, leading to code duplication and reducing your application's maintainability.

How can we solve this problem?

## The Solution

As mentioned earlier, the idea is to separate your class into two layers:

- **Implementation**: This layer represents a sub-behavior that can have different implementations. The idea is to create a common interface and implement each type of behavior.
- **Abstraction**: This layer represents a use case. It is the concrete class where we should add a composition relationship with an *implementation*.

Finally, the core idea of the **Bridge** Design Pattern is to prefer composition over inheritance.

> [Source Code](https://github.com/gustavo-flor/design-patterns-hands-on/tree/main/src/main/java/com/github/gustavoflor/dpho/structural/bridge)

## Go Deeper

- <https://refactoring.guru/design-patterns/bridge>
- <https://sourcemaking.com/design_patterns/bridge>