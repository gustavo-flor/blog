**Classification**: Creational

**Builder** is a design pattern aimed at enabling the creation of complex objects in a simplified and structured way.

## The Problem

Imagine a class with multiple properties. Consequently, the constructors of this class will have N arguments.

Creating these objects at runtime can become a challenging task.

Additionally, evolving these classes is also complex, as every new property added affects all constructors.

How can we solve this problem?

## The Solution

The **Builder** pattern suggests extracting the responsibility of constructing this class into another specialized class, hence the name **Builder**.

This specialized class should provide methods that prepare the object creation process step by step and, finally, offer a method that constructs our class.

> [Source Code](https://github.com/gustavo-flor/design-patterns-hands-on/tree/main/src/main/java/com/github/gustavoflor/dpho/creational/builder)

## Go Deeper

- <https://refactoring.guru/design-patterns/builder>
- <https://sourcemaking.com/design_patterns/builder>