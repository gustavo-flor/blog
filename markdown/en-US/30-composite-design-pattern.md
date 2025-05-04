**Classification**: Structural

The **Composite** Design Pattern proposes composing sets of objects into tree structures (non-circular *graphs*) where each container object delegates behavior to its nodes.

## The Problem

Imagine you have a room full of boxes, and you need to calculate the total price of items inside these boxes. However, each box can contain other boxes as well. How would you approach this?

In the real world, you would gather all the boxes and look inside each for items and their respective prices. If a box contains another box, you would open it too and repeat the process until you have calculated the total price.

But how can we solve this in code? What structure should we use?

## The Solution

The pattern introduces three key elements:

- **Component**: This element represents the most basic level of your objects, defining common behaviors for both groups and individual objects.
- **Composite**: This element represents the container, responsible for storing individual objects or other containers. It must implement the **Component** interface.
- **Leaf**: This element represents the individual object and should not contain any other objects. The **Leaf** must also implement the **Component** interface.

Now, you can iterate over the highest-level objects using the method provided by the **Component** interface, and the **Composite** will delegate its behavior to its nodes.

> [Source Code](https://github.com/gustavo-flor/design-patterns-hands-on/tree/main/src/main/java/com/github/gustavoflor/dpho/structural/composite)

## Go Deeper

- <https://refactoring.guru/design-patterns/composite>
- <https://sourcemaking.com/design_patterns/composite>