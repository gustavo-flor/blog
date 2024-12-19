**Classification**: Behavioral

The **Chain of Responsibility** design pattern allows decoupling control flow from the receiver (_entrypoint_) by passing the responsibility to a chain of _handlers_ that can decide how to handle the request and whether to pass it to the next _handler_ in the chain.

## The Problem

Imagine you have a sequence of steps and complex conditions to execute, and these steps evolve weekly with new instructions and behaviors.

For example, consider form validation: depending on certain fields, we must perform different types of behavior and checks. You can see how this sequence of steps can quickly become complex and lead to "_spaghetti code_."

How can we solve this problem?

## The Solution

The idea here is to create a common interface for all steps, allowing the input data to be passed through one of its methods.

With the interface in place, each step should be divided into a specific class that receives the next step (if it exists).

After implementation, simply connect all classes in the expected order and run your code.

## Go Deeper

- <https://refactoring.guru/design-patterns/chain-of-responsibility>
- <https://sourcemaking.com/design_patterns/chain_of_responsibility>