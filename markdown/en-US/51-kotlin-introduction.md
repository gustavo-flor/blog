Starting a journey to learn a new programming language always brings mixed feelings of curiosity, excitement, and challenge.

Recently, I needed to dive deeper into Kotlin, a modern programming language that is gaining significant traction in software development.

In this text, I want to share some things I’ve learned over the past few weeks, debunk some myths about the language, and provide practical examples for beginners.

## In Detail

Kotlin is a statically typed language developed by JetBrains that has quickly become popular, especially in Android application development.

However, don’t be mistaken: the language is not limited to mobile development and is now widely used for backend applications, particularly by teams familiar with Java due to its similar environment and syntax.

Interestingly, despite its similarities, Kotlin stands out for its conciseness, reducing boilerplate code and allowing developers to focus on what really matters.

### Core Concepts

- ***Null Safety*** (Goodbye, NullPointerException):

In Kotlin, developers can differentiate between nullable and non-nullable variables, reducing errors caused by null values (NPE).

```kotlin
val name: String = "Gustavo Flôr" // Non-nullable
val email: String? = null // Nullable

println("Name: $name")
println("Email: ${email ?: "Not provided!"}")
```

- **Class Extensions**:

Kotlin allows classes to have new functionalities without directly modifying their signatures, enabling modularity and simplicity when adding new behavior.

```kotlin
fun Int.isOdd() = this % 2 == 0 // Extension of Int class

println(3.isOdd()) // false
println(8.isOdd()) // true
```

- ***Smart Cast***:

Kotlin automatically performs type casting when it can guarantee the variable's type, reducing the need for explicit casting and simplifying code.

```kotlin
fun printLength(obj: Any) {
    if (obj is String) {
        println(obj.length) // Smart cast to String
    }
    // ...
}
```

- ***Coroutines***:

Kotlin provides native support for writing non-blocking asynchronous code, also known as reactive programming.

<aside class="callout">
  <div class="icon">💡</div>
  <div class="content">
    <p><i>Coroutines</i> will be covered in depth in a future text...</p>
  </div>
</aside>

### Advantages

- **Conciseness**:

The language's syntax was designed to reduce boilerplate code, making it easier to read, understand, and maintain, allowing developers to focus on what truly matters.

- **Immutability**:

Kotlin encourages immutability by providing immutable collections and introducing the `val` keyword, which ensures a variable is constant after declaration. This makes code more predictable and reduces the chances of bugs.

```kotlin
val numbers = listOf(2, 3, 7) // Immutable list
```

- **Interoperability**:

Kotlin allows interoperability with Java code, enabling the use of Java classes within Kotlin classes without issues.

- **Type Inference**:

Despite being a statically typed language, Kotlin supports type inference, allowing developers to skip explicit type declarations in some scenarios.

```kotlin
val firstName: String = "Gustavo" // Without inference
val lastName = "Flôr" // With inference
```

### Myths

- **Is Kotlin Only for Android Development?**

No, as it can generate a `.jar` file for Kotlin projects. In simpler terms, everything you can do with Java, you can also do with Kotlin.

- **Does Kotlin Only Follow the Object-Oriented Paradigm?**

No! As a developer, you have the freedom to choose whether to follow the object-oriented paradigm, the functional one, or even mix both. You decide.

- **Is Kotlin Slower than Java?**

Some people think Kotlin might be slower than Java due to its additional features. However, Kotlin code is also compiled into a `.jar` file and runs on the JVM, meaning its overall performance is similar to Java's.

### Tips

- ***Named Arguments***:

Kotlin allows developers to name each parameter of a method call, making method calls more flexible.

```kotlin
fun greet(name: String, greeting: String) {
    println("$greeting, $name!")
}

greet("gustavoflor.dev", "Hello")  // Prints "Hello, gustavoflor.dev!"
greet(greeting = "Hello", name = "Canela")  // Prints "Hello, Canela!"
```

- **Default Argument Values**:

Kotlin natively supports defining default values for method parameters.

```kotlin
fun greet(name: String, greeting: String = "Hello") {
    println("$greeting, $name!")
}

greet("gustavoflor.dev")  // Prints "Hello, gustavoflor.dev!"
greet("Canela", "Hi")  // Prints "Hi, Canela!"
```

- ***Data Classes***:

*Data Class* is a concise way to create a class in Kotlin that automatically includes the `equals`, `hashCode`, `toString`, and `copy` methods.

```kotlin
data class Person(
    val name: String,
    val age: Int
)

val person = Person("Gustavo Flôr", 22)

println(person.toString())
```

- **Destructuring**:

Kotlin allows destructuring objects into multiple variables. It's important to note that destructuring follows the order of the primary constructor.

```kotlin
val person = Person("Gustavo Flôr", 22)
val (name, age) = person
```

## Moral of the Story

As you can see, Kotlin provides a robust and versatile set of tools for building software.

Kotlin builds on Java’s strengths while improving them with simpler syntax. 

It also incorporates concepts from other modern languages, like null safety and functional programming.

I hope you enjoyed this text; thank you for reading, and see you soon! 👋

## Go Deeper

- <https://kotlinlang.org/>