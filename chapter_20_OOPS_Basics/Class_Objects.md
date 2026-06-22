# Classes vs Objects in TypeScript

## A Class defines WHAT an object looks like, and an Object is the actual thing created from that definition.

## Why Do We Need Classes?

Imagine you are developing an application for a school.

You need to store information about students:

* Name
* Roll Number
* Grade
* Methods like study(), attendClass(), takeExam()

Without classes, you would have to repeatedly create similar objects.

A class helps define a common structure that can be reused to create multiple objects.

---

# Easy Way to Remember

## Real Life Example

### Blueprint vs House

A blueprint contains:

* Number of rooms
* Kitchen design
* Window locations

But you cannot live inside a blueprint.

After construction, the actual house is created.

| Blueprint | House  |
| --------- | ------ |
| Class     | Object |

### Another Example

| Recipe | Food   |
| ------ | ------ |
| Class  | Object |

A recipe defines how to make food.

The actual food prepared from that recipe is the object.

---

# Definitions

## Class

A class is a blueprint, template, or design that defines the properties and behaviors of objects.

### Interview Definition

> A class is a blueprint used to create objects. It defines the properties and methods that objects of that class will contain.

---

## Object

An object is an instance of a class containing actual values and capable of using the methods defined in the class.

### Interview Definition

> An object is a real instance of a class that contains actual data and can access the methods defined in the class.

---

# Creating a Class

```typescript
class Student {
    name: string;
    rollNumber: number;

    constructor(name: string, rollNumber: number) {
        this.name = name;
        this.rollNumber = rollNumber;
    }

    study() {
        console.log(`${this.name} is studying`);
    }
}
```

---

# Understanding the Class

```typescript
class Student
```

Creates a class named Student.

```typescript
name: string;
rollNumber: number;
```

Properties (data members).

```typescript
constructor(...)
```

Special method that runs automatically when an object is created.

```typescript
study()
```

Method (behavior).

---

# Creating Objects

```typescript
const student1 = new Student("Shivani", 101);
const student2 = new Student("Rahul", 102);
```

Here:

```typescript
student1
student2
```

are objects of the Student class.

---

# Using Object Properties

```typescript
console.log(student1.name);
console.log(student1.rollNumber);
```

Output:

```text
Shivani
101
```

---

# Calling Methods

```typescript
student1.study();
```

Output:

```text
Shivani is studying
```

---

# Memory Representation

```text
Class: Student

Properties:
- name
- rollNumber

Methods:
- study()

Objects Created:

student1
    name = Shivani
    rollNumber = 101

student2
    name = Rahul
    rollNumber = 102
```

---

# Class vs Object

| Feature  | Class                             | Object                         |
| -------- | --------------------------------- | ------------------------------ |
| Meaning  | Blueprint                         | Instance                       |
| Nature   | Logical Entity                    | Physical Entity                |
| Creation | class keyword                     | new keyword                    |
| Memory   | No actual object memory           | Occupies memory                |
| Data     | Defines structure                 | Holds actual values            |
| Quantity | One class can create many objects | Each object belongs to a class |

---

# Example 2: Car

```typescript
class Car {
    brand: string;
    model: string;

    constructor(brand: string, model: string) {
        this.brand = brand;
        this.model = model;
    }

    drive() {
        console.log(`${this.brand} ${this.model} is driving`);
    }
}
```

Create objects:

```typescript
const car1 = new Car("Toyota", "Camry");
const car2 = new Car("Honda", "City");
```

Use methods:

```typescript
car1.drive();
car2.drive();
```

Output:

```text
Toyota Camry is driving
Honda City is driving
```

---

# Constructor

A constructor is a special method that executes automatically when an object is created.

Example:

```typescript
class Employee {

    constructor() {
        console.log("Employee object created");
    }

}
```

```typescript
const emp = new Employee();
```

Output:

```text
Employee object created
```

---

# Access Modifiers with Classes

TypeScript provides:

* public
* private
* protected

## Public

Accessible from anywhere.

```typescript
class Employee {
    public name = "Shivani";
}
```

---

## Private

Accessible only inside the class.

```typescript
class Employee {
    private salary = 50000;
}
```

This will fail:

```typescript
const emp = new Employee();
console.log(emp.salary);
```

---

## Protected

Accessible within class and derived classes.

```typescript
class Employee {
    protected department = "QA";
}
```

---

# Shorthand Constructor

Instead of:

```typescript
class Student {

    name: string;

    constructor(name: string) {
        this.name = name;
    }

}
```

TypeScript allows:

```typescript
class Student {
    constructor(public name: string) {}
}
```

Both are equivalent.

---

# Multiple Objects from One Class

```typescript
class User {
    constructor(public name: string) {}
}

const user1 = new User("John");
const user2 = new User("David");
const user3 = new User("Emma");
```

One class can create unlimited objects.

---

# Important Interview Question

## Can We Create an Object Without a Class?

Yes.

JavaScript and TypeScript support object literals.

```typescript
const person = {
    name: "Shivani",
    age: 25
};
```

However, classes are preferred when creating many similar objects.

---

# When to Use a Class?

Use a class when:

* Multiple objects share the same structure.
* Reusability is required.
* Encapsulation is needed.
* Object-oriented programming is preferred.

Example:

* Employee Management System
* Banking Application
* Student Management System
* E-Commerce Application

---

# Most Common Interview Question

## Difference Between Class and Interface

| Class                      | Interface                     |
| -------------------------- | ----------------------------- |
| Can contain implementation | Contains only contract        |
| Can create objects         | Cannot create objects         |
| Supports constructors      | No constructors               |
| Can have methods with body | Methods only define structure |
| Runtime existence          | Compile-time only             |

Example:

```typescript
interface User {
    name: string;
}

class Employee implements User {
    constructor(public name: string) {}
}
```

---

# Frequently Asked Interview Questions

### 1. What is a class?

A blueprint used to create objects.

---

### 2. What is an object?

An instance of a class containing actual values.

---

### 3. What is a constructor?

A special method automatically called when an object is created.

---

### 4. How do you create an object?

Using the new keyword.

```typescript
const obj = new MyClass();
```

---

### 5. Can one class create multiple objects?

Yes.

```typescript
const s1 = new Student();
const s2 = new Student();
const s3 = new Student();
```

---

### 6. Does a class occupy memory?

The class definition itself doesn't store object data.

Objects created from the class occupy memory.

---

# 30-Second Interview Answer

A class is a blueprint that defines properties and methods, whereas an object is an actual instance created from that blueprint. A class specifies what data and behavior an object should have, and multiple objects can be created from a single class using the new keyword.

Example:

```typescript
class Car {
    constructor(public brand: string) {}
}

const car1 = new Car("Toyota");
const car2 = new Car("Honda");
```

Here:

* Car → Class
* car1 and car2 → Objects

Both objects share the same structure but contain different data.
