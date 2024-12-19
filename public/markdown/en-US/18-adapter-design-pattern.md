**Classification**: Structural

The **Adapter** Design Pattern enables incompatible *interfaces* to work together properly.

Note that *interface* here refers to any abstraction (class) available in your system.

## The Problem

Imagine your application receives data in XML format and needs to send this data to a partner service using an external library whose methods expect JSON format.

How can we solve this problem?

## The Solution

Following the example above, since you cannot change the sending class — as it comes from a library — the idea is to create a wrapper class. This class should provide a method that accepts data in XML format, transforms it into JSON, and then calls the sending method of the library.

In other words, the idea is to create a class that adapts — hence the pattern's name — the use of other classes that are not inherently compatible.

<aside class="callout">
  <div class="icon">💡</div>
  <div class="content">
    <p><strong>Fun Fact</strong>: We use this design pattern even in the real world — electrical plugs and sockets can have different standards, but an adapter allows them to work together.</p>
  </div>
</aside>

> [Source Code](https://github.com/gustavo-flor/design-patterns-hands-on/tree/main/src/main/java/com/github/gustavoflor/dpho/structural/adapter)

## Go Deeper

- <https://refactoring.guru/design-patterns/adapter>
- <https://sourcemaking.com/design_patterns/adapter>