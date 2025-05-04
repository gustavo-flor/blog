Exceptions may be causing **unnecessary performance impact** on your application — if you use them for flow control.

## How It Works

By default, when an exception is instantiated, it is necessary to capture the execution *stack trace*.

Capturing the *stack trace* involves inspecting the current *thread* and recording information about its state, such as which methods were called, method names, and the line number where the exception occurred.

This capture process can be significant, especially if the *stack* is deep, consuming CPU and memory, consequently causing performance impact.

## In Detail

When we throw an exception, a search begins for an error handling mechanism (`try-catch`).

This search can be costly, especially if the exception needs to pass through multiple layers in the *stack*.

Additionally, error handling mechanisms can make the flow harder to read and understand.

These mechanisms are distributed across various application layers — in most cases — requiring navigation through several classes to understand their behavior.

## Tips and Tricks

1. **Avoid using exceptions for flow control.**
   Use exceptions for unexpected conditions similar to errors.
2. **Disable stack trace capture.**
   If you don’t use it [and your language allows], disable capturing the stack trace.
3. **Keep `try-catch` nearby.**
   Handle errors in layers close to where the exception is thrown.

## The Numbers

Below is a list of results obtained from testing each approach:

| Scenario                            | Executions | Duration |
| ----------------------------------- | ---------- | -------- |
| **Without throwing exception**      | 100k       | 1ms      |
| **Throwing exception, no stack**    | 100k       | 2.4ms    |
| **Throwing exception with stack**   | 100k       | 43.4ms   |
| **Without throwing exception**      | 10 million | 17ms     |
| **Throwing exception, no stack**    | 10 million | 72.2ms   |
| **Throwing exception with stack**   | 10 million | 3720ms   |

I strongly encourage you to run the tests yourself, modify them, and create other scenarios.

- [Access the source code by clicking here](https://github.com/gustavo-flor/avoid-exceptions-demo).

## The Moral of the Story

Exceptions are a powerful tool for error handling and were not designed to be used as a flow control mechanism.

Using them this way can cause performance problems, reduce code readability, and violate principles of some programming languages.

In summary, always opt for using the flow control tools your language offers (`if-else`, `switch`, `break`, etc.) and use exceptions only for truly unexpected cases.

## Go Deeper

- <https://medium.com/appsflyerengineering/railway-oriented-programming-clojure-and-exception-handling-why-and-how-89d75cc94c58>
- <https://blog.logrocket.com/what-is-railway-oriented-programming/>
- <https://dzone.com/articles/exceptions-as-controlflow-in-java>
- <https://www.youtube.com/watch?v=WCCkEe_Hy2Y>
- <https://www.youtube.com/watch?v=fYo3LN9Vf_M>