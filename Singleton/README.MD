# Singleton Design Pattern Project

## Overview

This project demonstrates the use of the Singleton design pattern to ensure that a class has only one instance and provides a global point of access to it. The Singleton pattern is particularly useful when exactly one object is needed to coordinate actions across the system.

## Objective

The main objective is to control object creation, limiting the number of instances to one, and providing a single point of access to that instance.

## Benefits

- **Controlled Access:** Ensures that there is only one instance of the class.
- **Global Access Point:** Provides a global point of access to the instance.
- **Resource Management:** Helps in managing resources efficiently by preventing the creation of multiple instances.

## How It Works

1. **Singleton Class:** A `Singleton` class is created with a private constructor to prevent direct instantiation.
2. **Instance Management:** The class has a static method `getInstance` that returns the single instance of the class, creating it if it does not already exist.
3. **Instance Verification:** A method `verifyInstance` is provided to check if two instances are the same.

### Example

Here is an example of how the `Singleton` class is used to ensure a single instance:

```typescript
import { Singleton } from "./Singleton";

// Create various instances
let s1 = Singleton.getInstance();
let s2 = Singleton.getInstance();

// Verify the instances
console.log(Singleton.verifyInstance(s1, s2));