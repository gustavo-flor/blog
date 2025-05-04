**Classification**: Behavioral

The **Mediator** Design Pattern helps reduce complexity in communication among multiple objects.

This pattern aims to decrease coupling and dependency between objects, resulting in cleaner and more independent code structures.

## The Problem

Interaction among multiple classes in a robust system can become complex, difficult to manage, and challenging to understand.

When this situation arises, even changes in a single class can affect many others, reducing the software's reliability.

How can we solve this problem?

## The Solution

The main elements are:

- **Component**: This interface represents an object in our group and, through aggregation, should contain an instance of the **Mediator**.
- **Mediator**: This element manages all communications within the group of objects. We define a class here that receives notifications of events from each component through a method `notify(Component)`. Upon receiving a notification, it determines the appropriate communication based on each component.

<aside class="callout">
  <div class="icon">💡</div>
  <div class="content">
    <p>The <b>Mediator</b> can quickly become a complex class. If the communication involves different behaviors, consider creating an interface representing the mediator, then implementing a concrete class for each behavior.</p>
  </div>
</aside>

## Go Deeper

- <https://refactoring.guru/design-patterns/mediator>
- <https://sourcemaking.com/design_patterns/mediator>