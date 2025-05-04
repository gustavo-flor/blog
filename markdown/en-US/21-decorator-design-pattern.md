**Classification**: Structural

The **Decorator** Design Pattern allows customizing the behavior of your objects without overriding them. In other words, it enables modifying a behavior without using inheritance.

## The Problem

Imagine you need to add new behavior to a method in your class, but extending the class is not an option — reasons could include: the class comes from a library, it is a final class, or you want to ensure that all child classes share this new behavior.

How can we solve this problem?

## The Solution

The idea here is to create a wrapper class that contains, as a dependency, the class you want to modify — using the concept of aggregation.

This class should provide a method that coordinates the behavior customization and calls the dependent class, ensuring modification without extension.

```java
public class Person {

  public void sayHi() {
    say("Hi!");
  }

  public void say(String message) {
    System.out.println(message);
  }

}

public class PersonDecorator {

  private final Person person;

  public PersonDecorator(Person person) {
    this.person = person;
  }

  public void sayHiAndBye() {
    person.sayHi();
    person.say("Bye!");
  }
  
}
```

> [Source Code](https://github.com/gustavo-flor/design-patterns-hands-on/tree/main/src/main/java/com/github/gustavoflor/dpho/structural/decorator)

## Go Deeper

- <https://refactoring.guru/design-patterns/decorator>
- <https://sourcemaking.com/design_patterns/decorator>