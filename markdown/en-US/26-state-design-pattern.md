**Classification**: Behavioral

The **State** Design Pattern allows an object to change its behavior when its internal state changes, giving the impression that its class has changed.

## The Problem

Imagine you need to manage a class with different behaviors based on some internal state. Its methods will likely contain several conditionals and shared behaviors within the same class, making the code harder to maintain and scale.

How can we solve this problem?

## The Solution

This pattern encapsulates specific behaviors for each state in separate classes and delegates execution to each of these classes according to the internal state.

In other words, the idea here is to define an interface containing the expected behaviors for each state. Then, implement concrete classes that realize this interface and execute their specific behavior.

With these classes ready, manage the internal state of your object using composition with one of the class implementations. When the object's state changes, also change the object representing that state.

## Go Deeper

- <https://refactoring.guru/design-patterns/state>
- <https://sourcemaking.com/design_patterns/state>