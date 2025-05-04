**Classification**: Behavioral

The **Visitor** Design Pattern allows separating an object’s behavior from the object itself, enhancing the modularity and adaptability of your application.

## The Problem

Imagine a scenario where you need to add a new behavior to a *core* class of your application, but this new behavior is not directly related to the class's primary scope.

For example, consider a use case where you need to export your class to a specific file format, send metrics to an observability system, audit changes to your object, and so on.

How can you achieve this without breaking the encapsulation of your class? How can you avoid disrupting a *core* workflow while modifying such an essential class? How can you keep your class’s responsibilities aligned with its intended scope?

## The Solution

The idea here is straightforward and involves two key elements:

- **Visitor**: This element represents an interface in your system. This interface should contain methods where new "non-*core*" behaviors will be implemented.
- **Element**: This element represents your *core* object and should provide a method that accepts a **Visitor**. The purpose here is to delegate to the main object the responsibility of determining which visitor method should be called.

Note that the main element was modified because it needed a method that accepts a **Visitor**. However, all the behavior resides in the concrete class of the **Visitor**, not in the main object itself, ensuring separation of contexts and responsibilities.

## Go Deeper

- <https://refactoring.guru/design-patterns/visitor>
- <https://sourcemaking.com/design_patterns/visitor>