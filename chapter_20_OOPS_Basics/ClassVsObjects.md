# Classes and Objects in TypeScript - Research Notes

## Overview

| Topic                    | Understanding                                                                                                                |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------- |
| **Class**                | A Class is a blueprint or template that defines the structure and behavior of objects.                                       |
| **Properties & Methods** | A class specifies what properties (data) and methods (actions) objects created from it should have.                          |
| **Object**               | An Object is an actual instance of a class that contains real values for those properties.                                   |
| **Class vs Object**      | A class itself is just a definition, whereas objects are the usable entities created from that definition.                   |
| **Reusability**          | One class can be used to create multiple objects, each with its own data while sharing the same structure.                   |
| **Behavior**             | Objects can access and execute the methods defined in their class.                                                           |
| **Benefits of Classes**  | Classes help organize code, improve reusability, and reduce duplication when multiple objects share similar characteristics. |
| **Real-World Analogy**   | The relationship between a class and an object can be compared to a blueprint and a house, or a recipe and the final dish.   |
| **Usage in TypeScript**  | Classes are commonly used to model real-world entities such as Users, Employees, Students, Cars, etc.                        |

## Simple Example

```typescript
class Student {
    name: string;

    study() {
        console.log("Student is studying");
    }
}

const student1 = new Student();
const student2 = new Student();
```

### In this example:

| Item     | Type     |
| -------- | -------- |
| Student  | Class    |
| student1 | Object   |
| student2 | Object   |
| name     | Property |
| study()  | Method   |

## Key Takeaways

* A class defines the structure and behavior of objects.
* An object is a real instance created from a class.
* Multiple objects can be created from the same class.
* Objects share the same structure but can contain different data.
* Classes improve code organization and reusability.
* Classes and objects are fundamental concepts in Object-Oriented Programming (OOP).