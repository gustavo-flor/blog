**Classification**: Structural

The **Proxy** Design Pattern provides a control layer for accessing an object.

This layer can be used to reduce resource consumption (memory, CPU, connections, etc.), enforce security validations, manage access auditing, and more.

## The Problem

Imagine a scenario where you have a class with a costly behavior, such as a method that downloads a file every time it is called.

You know this object might be used multiple times in your application, but you realize you could cache the information and reuse the result instead of repeatedly downloading the file.

How can we solve this problem?

## The Solution

The idea here is to create a class that serves as a wrapper for your costly object. This class will manage access to the internal methods of your object and perform the necessary operations.

Continuing the example above, the idea would be to create the wrapper class.

In this class, you would know when to cache the result and reuse it.

> [Source Code](https://github.com/gustavo-flor/design-patterns-hands-on/tree/main/src/main/java/com/github/gustavoflor/dpho/structural/proxy)

## Go Deeper

- <https://refactoring.guru/design-patterns/proxy>
- <https://sourcemaking.com/design_patterns/proxy>