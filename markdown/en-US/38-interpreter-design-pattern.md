**Classification**: Behavioral

The **Interpreter** Design Pattern provides a dynamic and clear way to transform languages or expressions into actions.

In other words, it allows receiving an input — commonly textual — and interpreting it into objects.

## The Problem

Imagine a scenario where you are creating *chatbot* software for a messaging service. This *chatbot* should be able to receive user commands through messages.

These commands are written in natural (human) language, such as “List the admin users and display a graph of their activities.”

How would you implement your *chatbot* to receive these commands?

## The Solution

The pattern is based on a tree data structure and contains four main elements:

- **Abstract Interpreter**: This element represents the interpreters' interface, containing the `interpret(Context)` method responsible for parsing the received expression. This interface should be implemented by all nodes.
- **Non-Terminal Interpreter**: Represents a node with children, meaning based on certain rules, it delegates the responsibility of interpreting the expression to one of its children.
- **Terminal Interpreter**: Represents a final (*leaf*) node, responsible for interpreting the expression (or part of it) and, if necessary, returning the interpretation to the root.
- **Context**: This element stores global information that must be used throughout the entire expression interpretation process.

## Go Deeper

- <https://sourcemaking.com/design_patterns/interpreter>