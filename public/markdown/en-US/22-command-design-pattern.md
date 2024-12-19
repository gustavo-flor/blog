**Classification**: Behavioral

The **Command** Design Pattern allows you to group all request data into a single object — this object is called a command.

This command can be sent through method arguments, queued for future request execution, and more.

## The Problem

Imagine you are building a platform game, and your current task is to receive and handle user inputs, allowing the player to move, jump, spin, etc.

How would you do this?

The most common approach, which you, I, and probably anyone else would think of, is: creating an abstract class called `Button` and extending this class for each possible player action (`JumpButton`, `MoveLeftButton`, `MoveRightButton`, `CrouchButton`, etc.).

Undoubtedly, this approach works; however, notice that we can easily end up with a large number of subclasses extending `Button`. In such a case, if we need to adjust the base class, we might break and/or need to refactor all other classes, making this at least a cumbersome task.

How can we solve this problem?

## The Solution

The idea here is to transform all our actions into a command.

To do this, we create a base functional interface representing the command and implement a concrete class for each command.

Our `Button` class still exists; however, it no longer implements the command logic but instead aggregates it. Therefore, we ensure that our application's core is decoupled from the user's input.

## Go Deeper

- <https://refactoring.guru/design-patterns/command>
- <https://sourcemaking.com/design_patterns/command>