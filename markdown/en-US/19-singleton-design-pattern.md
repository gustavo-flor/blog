**Classification**: Creational

The **Singleton** Design Pattern ensures that a class has a single (_single_) instance shared across the entire application.

## The Problem

Imagine you need to share the same state of an object throughout the entire application — and this state can change during program execution.

How can we solve this problem?

## The Solution

The idea here is for the class itself to manage the creation of the object. For that, the class should store its instance in a static property (`1`), provide a method that acts as a constructor/accessor for the instance (`2`), ensuring that the same instance is always returned. 

Also make the class constructors private (`3`).

```java
public class MySingleton {

  // 1
  private static MySingleton INSTANCE;

  // 3
  private MySingleton() {
  }

  // 2
  public static MySingleton getInstance() {
    if (INSTANCE == null) {
      INSTANCE = new MySingleton();
    }
    return INSTANCE;
  }
  
}
```

<aside class="callout">
  <div class="icon">💡</div>
  <div class="content">
    <p>This pattern is commonly used in games, database connection configurations, caching services, and more.</p>
  </div>
</aside>

> [Source Code](https://github.com/gustavo-flor/design-patterns-hands-on/tree/main/src/main/java/com/github/gustavoflor/dpho/creational/singleton)

## Go Deeper

- <https://refactoring.guru/design-patterns/singleton>
- <https://sourcemaking.com/design_patterns/singleton>