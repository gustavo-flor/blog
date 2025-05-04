**Classification**: Behavioral

The **Memento** Design Pattern allows restoring past states of your object conveniently without exposing its internal structure (violating its encapsulation).

## The Problem

The Memento is often used in scenarios where it is necessary to undo an action on an object or perform a similar rollback.

But how can you manage the states your object has passed through without exposing its attributes or making them public?

## The Solution

Basically, the idea consists of three key elements:

- **Originator**: This element represents the object whose state needs to be saved. It is responsible for creating a **Memento** containing a snapshot of its current internal state.
- **Memento**: This element is responsible for storing the internal state of the **Originator**. It is a simple object that performs no behavior beyond storing data privately.
- **Caretaker**: This element manages the lifecycle of the **Originator**, storing all its **Mementos** and performing rollbacks when necessary.

## Go Deeper

- <https://refactoring.guru/design-patterns/memento>
- <https://sourcemaking.com/design_patterns/memento>