**Classification**: Behavioral

The **Template Method** is a design pattern that proposes allowing subclasses to override steps of a superclass’s behavior in a structured and adaptable way.

## The Problem

Imagine a scenario where you have a use case with a sequence of steps, but each of these steps may have different behavior depending on specific needs.

Let’s consider a use case with the following steps:

1. Retrieve data
2. Process data
3. Analyze data
4. Export data

Now, think of the countless possibilities for this use case. You could retrieve data from different sources, export data to various destinations, and, in some cases, process and analyze data conventionally, while in others, you might not.

How can we solve this problem while respecting the **DRY** (**D**on’t **R**epeat **Y**ourself) principle and keeping the code adaptable to accept new steps?

## The Solution

The idea here is simple: define in the superclass distinct methods representing each step of the main workflow, allowing subclasses to override specific steps without changing the primary execution flow.

Additionally, the superclass should provide a public method that executes all the steps together, ensuring that its subclasses inherit this behavior automatically.

## Go Deeper

- <https://refactoring.guru/design-patterns/template-method>
- <https://sourcemaking.com/design_patterns/template_method>