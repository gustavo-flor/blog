The “automagic” dependency injection provided by Spring offers agility and simplicity when writing applications – that much we all know. But do you know how Spring manages and provides this functionality to us as developers?

The primary goal of this text is to dive deep into the concept of dependency injection with Spring. By the end of this exploration, we aim to understand what Beans are, the purpose of the *IoC container*, how the lifecycle of a Bean works, and much more.

## What are Beans?

To define what Beans are, I’d like to start with the following definition from the [Spring documentation](https://docs.spring.io/spring-framework/reference/core/beans/introduction.html) (loosely translated into English):

> [...] the objects that form the backbone of your application and are managed by the _Spring IoC container_ are called **Beans**. [...] it is just one of the many objects present in your application. [...]

The presented definition is straightforward and accurate. However, I believe we can simplify it further into something like this:

> Beans are objects in your application managed by the *IoC container*.

Alright, now we know what Beans are, but another question arises: what is the *IoC container*? Let’s dive in…

## What is the Spring IoC container?

We’ve seen earlier that Spring manages its Beans through a component called the Spring *IoC container*.

<aside class="callout">
  <span class="icon">💡</span>
  <div class="content">
    <p>If you don’t know what <strong>IoC</strong> is, <a href="./o-que-e-ioc">click here</a> to learn more.</p>
  </div>
</aside>

The Spring IoC container is essentially the **representation of the IoC container within the Spring framework**. Under the hood, the `ApplicationContext` interface characterizes this component.

Thus, the _Spring IoC container_ is responsible for instantiating, providing, injecting, and destroying the Beans in our application.

We know that the _Spring IoC container_ manages the Beans in an application, but how do we configure a Bean?

## How to Configure a Bean?

There are several ways to turn your class into a Bean that will be managed by Spring, ranging from XML file configurations to using annotations in Java classes.

In this text, I’ll focus on the most commonly used and modern ways to configure a Bean:

### 1. Annotation-Based

This is the most common and straightforward way to create a Bean in Spring: simply annotate your class with one of the annotations considered a *stereotype* by Spring.

Some examples are:

- `@Component`: The most generic *stereotype* in Spring.
- `@Service`: A specialization of `@Component` that semantically represents a component containing business logic.
- `@Repository`: A specialization of `@Component` that semantically represents a component that handles data operations.
- `@Controller`: A specialization of `@Component` that semantically represents a component used as an entry point for web requests.

Note that all the listed specializations have **semantic differences only** compared to the `@Component` annotation.

```java
import org.springframework.stereotype.Component;

@Component
public class MyComponent {
  // Attributes and methods
}
```

**Disclaimer:** It is important to ensure that your class is located in a package that can be scanned by `@ComponentScan`. Don’t know what that is? Read on…

#### What is the Purpose of the `@ComponentScan` Annotation?

This annotation informs Spring about which packages should be scanned during application initialization to locate components annotated with _stereotypes_.

Many developers may use Spring without directly interacting with this annotation, but everyone benefits from it. The reason is simple: this annotation is present within `@SpringBootApplication`, and by default, it scans all components in the root package or lower levels.

#### Advantages

- Simplified configuration, reducing boilerplate code.
- Clear intent: the semantics provided by _stereotypes_ enhance code readability.

#### When to Use?

- When configuring a Bean for a simple component without extensive rules and configurations, prefer the annotation-based approach.

#### Key Points

- If your class has more than one constructor, you need to explicitly indicate which one Spring should use with the `@Autowired` annotation.
- All dependencies of your class must be Spring Beans.

### 2. Java-Based

I like to think of this approach as an evolution of the **annotation-based** approach. If you need to create a more complex component with additional configurations, this is likely the one you’ll use.

Essentially, the idea here is to create a configuration component containing methods responsible for instantiating your complex Beans. Here’s an example:

```java
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class MyConfiguration {

  @Bean
  public MyComponent myComponent() {
    // You can inject properties and configurations here
    return new MyComponent();
  }

}
```

Note that the `@Configuration` annotation turns the `MyConfiguration` class into a Spring Bean. While not mentioned in the previous section, this is also a specialization of `@Component`, meaning it’s crucial for this class to be in a package visible to `@ComponentScan`.

All methods annotated with `@Bean` will be used by Spring to instantiate and manage your components.

#### Advantages

- Clear component definition: configuration classes explicitly define Bean configuration, avoiding the perception of “magical” behaviors.

#### When to Use?

- When configuring multiple types of Beans for a common interface or a more complex class, prefer this approach.

#### Key Points

- Unlike the annotation-based approach, this approach doesn’t care about the number of constructors in the class; the constructor used will be the one in the method.
- If more than one method with the same return type is annotated with `@Bean`, additional configuration is required to specify which configuration to use in each case. This is a more advanced topic that won’t be covered here. If you need more details, search for “_Spring Conditional Beans_” on Google.

## Ways to Inject a Bean

Spring provides several ways to inject a Bean. Here, I’ll list some of the main methods, and the ideal approach depends on your specific needs. Below are some of the most common methods:

### 1. Constructor Injection

This is one of the simplest and most efficient ways to inject your Beans: directly through the class constructor.

```java
import org.springframework.stereotype.Service;

@Service
public class MyService {
  private final MyDependency dependency;

  public MyService(MyDependency dependency) {
    this.dependency = dependency;
  }
}
```

If your class has **more than one constructor**, you’ll need to use the `@Autowired` annotation to specify which constructor Spring should use.

```java
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MyService {
  private final MyDependency dependency;

  public MyService() {
    this.dependency = null;
  }

  @Autowired
  public MyService(MyDependency dependency) {
    this.dependency = dependency;
  }
}
```

- It’s important to **ensure that the injected classes are Spring Beans**.

### 2. Method Injection

If you have a dependency that is optional (it may or may not be present in your component), you can use method injection. Create a method to define this dependency and annotate it with `@Autowired`.

```java
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MyService {
  private MyDependency dependency;

  @Autowired
  public void setup(MyDependency dependency) {
    this.dependency = dependency;
  }
}
```

- Note that I named the method `setup`, but there is no strict requirement here. You can name the method whatever makes the most sense to you.
- You can create a method that receives multiple dependencies; just ensure that all dependencies are Spring-managed Beans.

### 3. Field Injection

Currently, **using reflection-based injection (directly on the field)** **is not recommended**. Here are some of the reasons:

- Difficulty in mocking classes during tests.
- Violation of encapsulation: injection via reflection breaks the class's encapsulation.
- Inability to guarantee dependency immutability.
- Increased likelihood of circular dependencies.
- Encourages adding many dependencies, potentially leading to a class that performs multiple responsibilities, violating the single responsibility principle.

Thus, use this type of injection cautiously and only in exceptional cases.

To implement it, simply annotate your field with `@Autowired`, and Spring will handle injecting your dependency. Here’s an example:

```java
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MyService {
  @Autowired
  private MyDependency dependency;
}
```

## The Lifecycle of a Bean

Understanding the lifecycle of a Bean in Spring is crucial to comprehend how your application behaves and how its components interact with each other.

Additionally, it is essential to grasp this complex process to avoid issues like non-thread-safe methods, circular dependencies, connection locks, and more.

Since it is a complex process, this text will not cover every detail. Instead, the idea here is to provide an introductory overview, setting the stage for a deeper dive into this topic in the future.

### Getting Started

The lifecycle of a Bean can be divided into the following stages:

#### 1. Bean Definition

This stage involves configuring a Bean, as discussed previously. It encompasses the entire process of defining a Bean, whether through annotations or configuration classes.

#### 2. Bean Instantiation

At this stage, Spring uses `@ComponentScan` to scan your application’s packages, locate, and instantiate each configured Bean. 

The _Spring IoC container_, also known as the _ApplicationContext_, is used here.

#### 3. Dependency Injection

Although closely related to the previous stage, it is worth noting that, in some cases, object creation and dependency injection occur simultaneously due to constructor usage.

However, if your component’s dependencies are injected through methods (Method Injection), this step occurs right after the Bean instantiation.

#### 4. Bean Name Awareness

During this stage, Spring provides Beans that implement the `BeanNameAware` interface with their name/identifier. 

This is a specific use case that most components don’t require. However, if your component needs to know its identifier in Spring, this is where it happens.

#### 5. Bean Factory Awareness

Similar to the previous stage, Spring provides Beans that implement the `BeanFactoryAware` interface with a reference to the `BeanFactory` that instantiated the component.

The `ApplicationContext` interface extends `BeanFactory`, meaning you receive the _Spring IoC container_ via this interface.

Again, this is a very specific scenario, so most components don’t pass through this stage unless they need to know who instantiated them.

#### 6. Pre-Initialization (Bean Post Processor Before Initialization)

At this stage, Spring calls the `postProcessBeforeInitialization()` method on all Beans implementing the `BeanPostProcessor` interface. This allows you to customize your component before initialization.

#### 7. Initialization (Initializing Bean)

Here, Spring calls the `afterPropertiesSet()` method on all Beans implementing the `InitializingBean` interface. This stage enables customization of your Bean’s initialization.

#### 8. Post-Initialization (Bean Post Processor After Initialization)

At this stage, Spring calls the `postProcessAfterInitialization()` method on all Beans implementing the `BeanPostProcessor` interface. This allows you to customize your component after initialization.

#### 9. Bean Usage

At this point, your Bean is available for use and can be manipulated as needed.

#### 10. Bean Destruction

By default, this stage occurs when Spring shuts down. Beans implementing the `DisposableBean` interface undergo destruction.

This stage is useful if your application includes components that lock resources. For example, if your component locks database connections, this is the stage to release them.

### In Detail

Now that we know the basics of the Bean lifecycle stages, it’s important to note that these stages may occur at different times than those listed above.

This variation is due to the **scope** of your Bean, which determines when and how a Bean is instantiated and destroyed.

While this text doesn’t delve into all Bean scopes, it’s worth noting that the default scope is **Singleton**. This means your component is created only once by the _Spring IoC container_ and persists until the container shuts down.

## The Moral of the Story

It is evident that Spring provides a dependency injection tool that, despite its complexity, is simple for developers to use.

I understand that this is a profound and complex topic with various aspects (scopes, lifecycle, etc.), but I believe we have gained deeper insight into the heart of Spring.

Thank you for reading, and Happy New Year [no matter when you are reading this]!

## Go Deeper

- <https://docs.spring.io/spring-framework/reference/core/beans.html>