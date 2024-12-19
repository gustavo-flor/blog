**Classification**: Creational

The **Factory Method** design pattern provides a way to create objects by allowing child classes to define the type of object that will be created in a method defined in the parent class.

## The Problem

Imagine a scenario where you are building interior design software.

Your application allows users to select furniture and its style; based on their choices, your software returns some standard layouts with the selected furniture.

- Note that the layout always remains the same, with only the furniture and its primary style varying.
- In other words, the behavior remains the same, but the families of classes to be instantiated are dynamic. How would you solve this?

## The Solution

The idea here is simple: provide an interface or abstract class that defines a creation method for our base object.

With this interface created, allow concrete classes to implement the object creation based on their specific needs.

Returning to our example, imagine a base class `Furniture` and its specializations (styles) like `OfficeFurniture`, `TechFurniture`, and so on.

We would provide a class called `FurnitureFactory` with methods `createChair()` and `createCouch()`. Each specialized class would extend `FurnitureFactory` and its methods.

> [Source Code](https://github.com/gustavo-flor/design-patterns-hands-on/tree/main/src/main/java/com/github/gustavoflor/dpho/creational/factorymethod)

## Go Deeper

- <https://refactoring.guru/design-patterns/factory-method>
- <https://sourcemaking.com/design_patterns/factory_method>