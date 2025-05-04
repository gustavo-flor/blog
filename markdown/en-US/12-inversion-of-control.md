**IoC**, short for *Inversion of Control*, is a principle in software engineering that encourages inverting the control flow of an application. But what does this mean?

Let’s understand…

## The Hollywood Principle

The central idea is to **delegate the responsibility of method calls from your code to a higher-level layer**. This higher layer is usually a _**framework**_ or a similar control layer where you write your code following templates, and **the framework takes care of calling your code when needed**.

With this understanding, the term “Inversion of Control” starts making more sense, as we are inverting the control flow of our application by passing the responsibility to a different layer from the core of the application.

<aside class="callout">
  <span class="icon">💡</span>
  <div class="content">
    <p>IoC is also known as the <strong>Hollywood Principle</strong> — “Don’t call us, we’ll call you.”</p>
  </div>
</aside>

### In Detail

There are several ways to apply IoC. Here are some of the most commonly used methods to help us dive deeper:

**Disclaimer:** The goal here is to identify IoC usage in code. This isn’t a deep dive into language-specific implementations, assuming you have enough knowledge to understand or research further.

- **Event-Driven**

```html
<!DOCTYPE html>
<html>
<body>
  <button class="hello-button">Click here!</button>
  <script>
    const helloButton = document.querySelector('.hello-button');
    const sayHello = () => console.log('Hello!');

    helloButton.addEventListener('click', sayHello);
  </script>
</body>
</html>
```

In this example, we implement a simple HTML page where clicking the button displays a “Hello” message.

Note that we define the behavior in the `sayHello` method and set up a click *event listener* for the button.

We never directly execute the behavior ourselves. Instead, we pass control to a higher layer — the *event listener* — which triggers the behavior upon a button click.

- **Framework Template**

```java
@RestController
@RequestMapping("/v1/taxes")
@RequiredArgsConstructor
public class TaxController {
  @GetMapping("/{currency}")
  public Map<Currency, BigDecimal> getTaxesByCurrency(@PathVariable Currency currency) {
    return switch (currency) {
      case USD -> Map.of(BRL, 5.00, EUR, 0.75, SOL, 4.30);
      case BRL -> Map.of(USD, 0.20, SOL, 1.50);
      case EUR -> Map.of(USD, 1.25);
      default -> Map.of();
    };
  }
}
```

This code implements an HTTP endpoint using the Spring *framework* that returns currency conversion rates. The logic is purely illustrative.

Notice that we only implement the conversion logic in the `getTaxesByCurrency` method, without explicitly calling it anywhere. The *framework* handles calling this method, passing control to a higher layer.

- **Dependency Injection (DI)**

```java
public class Car {
  private Engine engine;

  public Car(Engine engine) {
    this.engine = engine;
  }

  public void run() {
    engine.run();
  }
}

public interface Engine {
  void run();
}

public class ElectricalEngine implements Engine {
  @Override
  public void run() {
    // Electrical engine logic
  }
}

public class CombustionEngine implements Engine {
  @Override
  public void run() {
    // Combustion engine logic
  }
}

public class Application {
  public static void main(String[] args) {
    final var engine = new CombustionEngine(); 
    final var car = new Car(engine);

    car.run();
  }
}
```

Using dependency injection in the `Car` class ensures that it doesn’t depend directly on the `Engine` class. Here, control is passed to a higher layer — the object creation process itself.

## What Is an IoC Container?

An **IoC container** is any component responsible for managing object creation and dependency injection.

In the previous example, DI enabled an IoC container to manage object creation and dependencies.

Here’s a basic IoC container implementation:

```java
public enum EngineType {
  ELECTRICAL, COMBUSTION
}

// IoC container class
public class CarFactory {
  private final EngineType engineType;

  public CarFactory(final EngineType engineType) {
    this.engineType = engineType;
  }

  public Car car() {
    final var engine = engine(); 
    return new Car(engine);
  }

  public Engine engine() {
    return switch (engineType) {
      case ELECTRICAL -> new ElectricalEngine();
      case COMBUSTION -> new CombustionEngine();
      default -> throw new UnknownEngineType(engineType);
    };
  }
}

public class Application {
  private static final CarFactory CAR_FACTORY = new CarFactory(EngineType.ELECTRICAL);

  public static void main(String[] args) {
    final var car = CAR_FACTORY.car(); // Using the IoC container

    car.run();
  }
}
```

**Disclaimer:** This is a simplified IoC container example for educational purposes.

Many IoC containers offer external configuration through files like `.xml` or `.yml`, enabling behavior adjustments without modifying source code.

## Moral of the Story

Similar to other software engineering concepts, IoC is a complicated term for a straightforward, highly useful idea.

In practice, if you work in software development, you’re likely already using IoC without realizing it. Now that you know what it is, applying and understanding its advantages becomes even easier.

<aside class="callout">
  <span class="icon">🔄</span>
  <div class="content">
    <strong>Closing the Loop…</strong>
    </br>
    <p>IoC is a key distinction between a <i><strong>framework</strong></i> and a <i><strong>library</strong></i>.
    When using a <i><strong>library</strong></i>, your code controls the library’s code; but when using a <i><strong>framework</strong></i>, the framework’s code controls your code, thus inverting control.</p>
  </div>
</aside>

## Final Words

If you still have questions or would like to understand more, I have two suggestions:

1. Dive deeper with the links in the “Further Reading” section.
2. Try applying it in your code, experiment, and see the difference between using or not using IoC.

## Further Reading

- <http://www.laputan.org/drc/drc.html>
- <https://martinfowler.com/bliki/InversionOfControl.html>
- <https://martinfowler.com/articles/injection.html#InversionOfControl>
- <https://www.codecademy.com/resources/blog/what-is-a-framework/>