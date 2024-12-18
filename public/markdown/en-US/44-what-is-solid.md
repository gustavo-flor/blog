SOLID is an acronym for five object-oriented programming principles aimed at producing solid (🥸), robust, and maintainable software.

## In Detail

These principles were introduced by Robert C. Martin — [Uncle Bob](http://cleancoder.com/products) — with the primary goal of providing best practices that guide developers in designing applications that are easy to understand, maintain, and evolve.

### Single Responsibility Principle — SRP

The **Single Responsibility Principle** states that a class should have only one reason to change, meaning it should have only one responsibility.

This principle helps keep classes focused, making them easier to understand, maintain, and extend.

### Open/Close Principle — OCP

The **Open/Close Principle** states that software entities (classes, modules, functions, etc.) should be open for extension but closed for modification.

This means you should be able to add new functionality to a system without altering existing code.

This principle promotes robustness and makes maintenance and scalability easier.

### Liskov Substitution Principle — LSP

The **Liskov Substitution Principle** states that objects of a superclass should be replaceable with objects of its subclasses without affecting the correctness of the program.

This ensures that a program can use a derived class where a base class is expected without causing errors.

### Interface Segregation Principle — ISP

The **Interface Segregation Principle** states that a client should not be forced to depend on interfaces it does not use.

This principle encourages creating smaller and more specific interfaces rather than large, specialized ones, reducing the impact of changes and making the system easier to maintain.

### Dependency Inversion Principle — DIP

The **Dependency Inversion Principle** states that high-level modules should not depend on low-level modules. Both should depend on abstractions. Additionally, abstractions should not depend on details. Details should depend on abstractions.

In other words, your classes and behaviors should not depend on the implementation details of other classes but rather on abstractions (interfaces).

This principle helps reduce coupling between modules, enabling more flexibility and easier testing.

## Moral of the Story

The presented principles serve as a guide for creating flexible, extensible, and maintainable software systems.

They encourage separating responsibilities, creating cohesive and modular code, and reducing coupling between system components.

## Go Deeper

Here’s a lecture by [Uncle Bob](http://cleancoder.com/products) about the SOLID principles (and a bit of chemistry).

- <https://www.youtube.com/watch?v=zHiWqnTWsn4>