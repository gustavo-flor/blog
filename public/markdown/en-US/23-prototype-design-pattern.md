**Classification**: Creational

**Prototype** (also known as **Clone**) is the design pattern that allows cloning — 🥸 — an object. In other words, it enables creating a new object in memory based on the information of an existing object.

## The Problem

Imagine you are building an application that manages tasks on a board (similar to Jira), and one of your system's features is allowing users to duplicate one or more tasks.

Duplicating a task means not only copying its content but also copying the content of all subtasks, attachments, links, etc.

How can we solve this problem?

## The Solution

Although the problem may seem complex, the solution is quite simple:

The idea is to create an interface called `Prototype` with a `clone` method (you can name the interface and its method as you prefer).

With the interface created, simply implement it in the classes that need to be cloned and define the copying logic for each object.

<aside class="callout">
  <div class="icon">🚩</div>
  <div class="content">
    <strong>Be careful with circular references.</strong>
    </br>
    <p>If your cloned class contains another object within it, ensure that this object is also cloned; otherwise, references will be shared between both objects.</p>
  </div>
</aside>

> [Source Code](https://github.com/gustavo-flor/design-patterns-hands-on/tree/main/src/main/java/com/github/gustavoflor/dpho/creational/prototype)

## Go Deeper

- <https://refactoring.guru/design-patterns/prototype>
- <https://sourcemaking.com/design_patterns/prototype>