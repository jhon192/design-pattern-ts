# Car Operations Simplification Project

## Overview

This project uses the Facade design pattern to simplify interactions with different types of cars. The Facade pattern provides a unified and easy-to-use interface that allows operating cars of various brands (Ford, Toyota, and Honda) without needing to know the technical details of each one.

## Objective

The main objective is to enhance the user experience when interacting with the system, making operations more intuitive and accessible, even for those without technical knowledge.

## Benefits

- **Ease of Use:** A single interface to operate different cars.
- **Abstraction of Complexity:** Users do not need to know the internal details of each car.
- **Improved User Experience:** More intuitive and accessible interaction.

## How It Works

1. **Simplified Interface:** A Facade class is created to act as an intermediary between the user and the car classes.
2. **Unified Operations:** The Facade class provides methods to operate each type of car in a straightforward manner.
3. **Intuitive Interaction:** Users can operate the cars by calling simple methods without worrying about internal details.

This approach makes the system easier to use and significantly improves the user experience.

---

# Pizza Factory Project

## Overview

This project demonstrates the use of the Factory design pattern to create different types of pizzas. The Factory pattern provides a way to encapsulate the instantiation of objects, allowing for more flexible and reusable code.

## Objective

The main objective is to streamline the creation process of various types of pizzas, making it easier to manage and extend the codebase.

## Benefits

- **Flexibility:** Easily add new types of pizzas without modifying existing code.
- **Reusability:** Centralized creation logic that can be reused across the application.
- **Maintainability:** Simplifies the codebase by separating the creation logic from the business logic.

## How It Works

1. **Pizza Factory:** A `PizzaFactory` class is created to handle the creation of different types of pizzas.
2. **Pizza Creation:** The factory class has a method `createPizza` that takes a type of pizza as an argument and returns an instance of the corresponding pizza class.
3. **Pizza Operations:** Once a pizza is created, it can be prepared, baked, cut, and boxed using its respective methods.

### Example

Here is an example of how the `PizzaFactory` is used to create and operate on different types of pizzas:

```typescript
import { PizzaFactory } from "./Factory";

const pizzaFactory = new PizzaFactory();

const cheesePizza = pizzaFactory.createPizza('cheese');
if (cheesePizza) {
  cheesePizza.prepare();
  cheesePizza.bake();
  cheesePizza.cut();
  cheesePizza.box();
}

const pepperoniPizza = pizzaFactory.createPizza('pepperoni');
if (pepperoniPizza) {
  pepperoniPizza.prepare();
  pepperoniPizza.bake();
  pepperoniPizza.cut();
  pepperoniPizza.box();
}