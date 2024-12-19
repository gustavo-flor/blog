**Classification**: Behavioral

The **Iterator** Design Pattern allows traversing a collection of elements without exposing its implementation. In other words, you don’t need to know whether your collection is a list, queue, stack, graph, or something else.

## The Problem

Collections are among the most commonly used data structures in programming. However, traversing them can become complex depending on the specialization of each data structure.

For example, traversing a list is straightforward: just create a loop and access each index until reaching the end of the collection. But what about more complex structures like graphs, trees, and stacks? How would you traverse those?

While traversing all these structures is indeed possible, your code would become tightly coupled to each type, reducing its adaptability.

How can we solve this problem?

## The Solution

The idea here is simple: each collection should provide an **Iterator**.

- **Iterator**: An interface that defines how the collection should be traversed, providing a method to access the next element of the collection — called `getNext`.
- **Iterable**: An interface representing a collection that can be traversed, providing a method returning its **Iterator** — called `iterator()`.

<aside class="callout">
  <div class="icon">💡</div>
  <div class="content">
    <p>Note that most robust programming languages already provide these interfaces and their implementations natively.</p>
  </div>
</aside>

## Go Deeper

- <https://refactoring.guru/design-patterns/iterator>
- <https://sourcemaking.com/design_patterns/iterator>