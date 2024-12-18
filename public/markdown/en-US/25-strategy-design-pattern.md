**Classification**: Behavioral

The **Strategy** Design Pattern allows defining an algorithm's behavior during application execution, ensuring better code readability.

In other words, this pattern enables decoupling multiple behaviors into a single interface, encapsulating business logic in separate classes and reusing them through composition.

## The Problem

Imagine a scenario where you need to decide which algorithm/behavior to execute based on specific conditions. The logical option seems to be using a conditional block like `if-else` or `switch-case` and implementing each behavior.

However, the list of behaviors and conditions you need to implement is volatile and complex.

In this situation, it’s easy to see how your code could turn into a big mess, reducing its maintainability, reliability, and readability.

How can we solve this problem?

## The Solution

The idea here is to separate behaviors into distinct classes — called *Strategies*.

First, create a common interface for all behaviors. This interface should provide an execution method that fits the needs of all your behaviors.

After that, create a class for each behavior and implement its interface.

In the main code, manage which strategy should be used based on your conditionals.

## Go Deeper

- <https://refactoring.guru/design-patterns/strategy>
- <https://sourcemaking.com/design_patterns/strategy>