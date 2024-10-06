# Prototype
## Design Pattern
### Type Creational

## Overview

This project demonstrates the use of the Prototype design pattern to create and manage copies of objects. The Prototype pattern allows for the creation of new objects by copying an existing object, known as the prototype. This approach is particularly useful when the cost of creating a new object is more expensive than copying an existing one.

## Objective

The main objective is to provide a mechanism to create new objects by cloning existing ones, making the creation process more efficient and flexible.

## Benefits

- **Efficiency:** Reduces the cost of creating new objects by cloning existing ones.
- **Flexibility:** Allows for the creation of new objects with different states by modifying the cloned objects.
- **Simplicity:** Simplifies the creation process by using a prototype as a template.

## How It Works

1. **Prototype Module:** A `PrototypeModule` class is created to serve as the prototype.
2. **Cloning:** The `PrototypeModule` class has a `clone` method that creates a copy of the object.
3. **Object Customization:** Once cloned, the new objects can be customized by modifying their properties.

### Example

Here is an example of how the `PrototypeModule` is used to create and manage copies of objects:

```typescript
import { PrototypeModule } from "./PrototypeModule";

const p1 = new PrototypeModule();
const p2 = p1.clone();
const p3 = p1.clone();
p1.name = "jhon";
p2.name = "juan";
p3.name = "juana";

console.log(p1.showName(p1.name));
console.log(p2.showName(p2.name));
console.log(p3.showName(p3.name));