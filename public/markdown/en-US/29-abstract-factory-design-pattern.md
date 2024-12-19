**Classification**: Creational

The **Abstract Factory** is a design pattern that allows decoupling the creation of related and/or dependent object families without specifying their concrete classes.

This approach enhances application flexibility and modularity by enabling configurations that define which object types should be instantiated.

## The Problem

Creating new objects can cause significant coupling between classes.

Imagine a scenario where you have different object families inheriting from a common interface.

Your use case needs to create objects from a specific family based on a particular business rule.

How can this be done without coupling your use case to the creation of each of these *N* families?

## The Solution

The idea here is to delegate the responsibility of object creation to *factories*. The **Abstract Factory** proposes creating a common interface representing this abstract factory — 🕵️‍♂️ — offering methods responsible for creating each object in a family.

Afterward, simply implement a concrete factory for each specific family.

With the classes implemented, your application only needs to configure which concrete class to use based on its rules, and the problem is solved.

> [Source Code](https://github.com/gustavo-flor/design-patterns-hands-on/tree/main/src/main/java/com/github/gustavoflor/dpho/creational/abstractfactory)

## Go Deeper

- <https://refactoring.guru/design-patterns/abstract-factory>
- <https://sourcemaking.com/design_patterns/abstract_factory>