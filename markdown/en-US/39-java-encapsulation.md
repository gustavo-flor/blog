Encapsulation is one of the pillars of Object-Oriented Programming (OOP). It refers to the action of grouping data (attributes) and behaviors (methods) into a single unit called an object.

This approach allows developers to **restrict direct access to certain data and behaviors of an object**, creating and providing public interfaces to manipulate restricted data.

## Overview

A very common example to illustrate this idea is a remote control.

It has buttons (methods) that operate the TV's state, but we do not have direct access to the TV's internal data (attributes).

Here's a code example:

```java
public class RemoteControl {

  private Battery battery;
  private Television television;

  public void turnOnOrOff() {
    if (isOn()) {
      turnOff();
    } else {
      turnOn();
    }
  }

  protected void turnOn() {
    television.turnOn();
  }

  protected void turnOff() {
    television.turnOff();
  }

  boolean isOn() {
    return television.isOn();
  }

  boolean hasBattery() {
    return battery.hasPower();
  }
  
}
```

## In Detail

In the previous example — when defining the `RemoteControl` class — I used some Java keywords known as access modifiers: `public`, `private`, `protected`.

Access modifiers are the main tool for controlling access related to encapsulation, defining who can or cannot access a specific resource (class, method, attribute, etc.).

Let's understand how each access modifier works in Java:

### Public

- **Keyword**: `public`

This access modifier defines that the resource can be accessed by any other class, regardless of its package.

In other words, it is the most permissive access modifier, granting full manipulation freedom to other classes.

### Private

- **Keyword**: `private`

This is Java's most restrictive access modifier, defining that only the class itself can access these resources.

In other words, no other class — not even through inheritance — can access resources declared with this access modifier.

### Protected

- **Keyword**: `protected`

This modifier defines that its resources can be accessed by any class within the same package or through its subclasses.

### Default (Package Private)

- **No keyword**

Of the four access modifiers, this is the only one without a keyword, which is why it is called *default* — also known as *package private*.

Java considers the *default* access modifier when no other modifier is explicitly defined.

> If you're unsure how it works, take a look at the `isOn` method of the `RemoteControl` class in the previous example.

This modifier grants full access to resources for classes within the same package.

We can think of it as having a behavior similar to `public`, but restricted to the same package.

<aside class="callout">
  <div class="icon">💡</div>
  <div class="content">
    <p>Do not confuse this with the <code>default</code> keyword. This keyword actually represents public methods in an interface.</p>
  </div>
</aside>

## How It Would Work

- **Access within the same package**:

|              | public | private | protected | default |
| ------------ | ------ | ------- | --------- | ------- |
| Class        | ✅     | ✅      | ✅        | ✅      |
| Subclass     | ✅     | ❌      | ✅        | ✅      |
| Other class  | ✅     | ❌      | ✅        | ✅      |

- **Access in different packages**:

|              | public | private | protected | default |
| ------------ | ------ | ------- | --------- | ------- |
| Subclass     | ✅     | ❌      | ✅        | ❌      |
| Other class  | ✅     | ❌      | ❌        | ❌      |

## Moral of the Story

Now that we know more about the encapsulation pillar, we can understand the many advantages this principle offers to object-oriented programming (OOP).

Through it, we can reduce complexity, ensure data control, minimize security risks by restricting data access, and much more.

Thank you for reading this far, and see you next time! 👋

## Go Deeper

I created a repository with each use case; feel free to explore:

- [🐱 java-encapsulation-sample](https://github.com/gustavo-flor/java-encapsulation-sample)