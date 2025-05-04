**Classification**: Structural

The **Facade** Design Pattern provides a simplified interface for using a library, framework, or any other complex set of classes.

In other words, it abstracts the complexity of a class or set of classes.

## The Problem

Imagine you need to work in your code with a set of complex objects belonging to an external library. You have to initialize these objects and their dependencies, modify parameters, handle potential exceptions, and more.

Given this, it’s easy to see how your business logic (the core of your application) can start mixing with elements of the library, creating a coupling that makes the code harder to read, understand, and maintain.

How can we solve this problem?

## The Solution

The idea here is to create a layer called a **facade**.

This layer will be responsible for abstracting all the complexity of the library, framework, or set of classes, allowing the core of your application to only interact with the facade and not its implementation details.

This reduces coupling and improves code maintainability and readability.

> [Source Code](https://github.com/gustavo-flor/design-patterns-hands-on/tree/main/src/main/java/com/github/gustavoflor/dpho/structural/facade)

## Go Deeper

- <https://refactoring.guru/design-patterns/facade>
- <https://sourcemaking.com/design_patterns/facade>