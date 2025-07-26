---
layout: post
title: F.E PPS Quick Notes
date: 2025-06-04 12:00:00 +0800
categories: [Programming, Notes, Engineering, SPPU, FE]
tags: [programming, paradigms, python, oop, pps, FE]
---

## Programming Paradigms (Compact Notes)

### 1. Imperative Programming

- **Focus:** **How** to do it.
- **How:** Step-by-step instructions to change program state directly.
- **Analogy:** A detailed cooking recipe (do _this_, then _that_).
- **Snippet:**
    
    ```python
    # Calculate sum
    total = 0
    for i in [1, 2, 3]:
        total += i # Direct state change
    print(total)
    ```

---

### 2. Declarative Programming

- **Focus:** **What** to achieve.
- **How:** Describe the desired result; the system figures out the steps.
- **Analogy:** Ordering food at a restaurant (you say what you want, not how to cook).
- **Snippet:**
    
    ```python
    # Calculate sum
    numbers = [1, 2, 3]
    total = sum(numbers) # Describe 'sum', not steps
    print(total)
    
    # List comprehension
    squares = [x*x for x in range(3)] # Declare desired list content
    print(squares)
    ```

---

### 3. Object-Oriented Programming (OOP)

- **Focus:** **Objects** (data + behavior).
- **How:** Model real-world entities as self-contained objects interacting via methods.
- **Analogy:** A car (it has data like color, and actions like accelerate).
- **Snippet:**
    
    ```python
    class Dog: # Blueprint
        def __init__(self, name):
            self.name = name
        def bark(self):
            return f"{self.name} barks!"
    
    my_dog = Dog("Buddy") # Object
    print(my_dog.bark())
    ```

---

### 4. Functional Programming (FP)

- **Focus:** **Pure functions** (math-like).
- **How:** Treat computation as function evaluation; avoid changing state or mutable data.
- **Analogy:** An assembly line where each station transforms material without affecting others.
- **Snippet:**
    
    ```python
    def add_one(x): # Pure function
        return x + 1
    
    numbers = [1, 2, 3]
    # Map applies function without changing original list
    result = list(map(add_one, numbers))
    print(result)
    ```

---

## Problem Solving Fundamentals

### What is a Problem?

A **problem** can be defined as a situation, condition, or issue that is **difficult to deal with or overcome**, or that **prevents the achievement of a desired outcome or goal**. It's a deviation from an expected or desired state.

In essence, a problem is a gap between where you are and where you want to be.

### Steps in Problem Solving

Problem-solving is a systematic process that helps in finding solutions to complex issues. While specific methodologies might vary, a common and effective sequence of steps includes:

1. **Identify and Define the Problem**
2. **Analyze the Problem**
3. **Generate Potential Solutions**
4. **Evaluate and Select the Best Solution**
5. **Implement the Solution** 
6. **Review and Learn**

### Problem Solving Strategies

- **Algorithms:** Step-by-step procedures guaranteed to find a solution.
    - **Analogy:** A detailed cooking recipe.
    - **Example:** Sorting a list of numbers (e.g., Quick Sort).

- **Heuristics:** Mental shortcuts or "rules of thumb" for quick, good (but not always optimal) solutions.
    - **Analogy:** Guessing a password (trial and error).
    - **Examples:** Trial and Error, Working Backward, Means-End Analysis, Analogy, Simplification.

- **Brainstorming:** Generating many ideas without immediate evaluation.
    - **Analogy:** A free-flowing idea shower.
    - **Example:** Team meeting to list ways to increase website traffic.

- **Root Cause Analysis (RCA):** Techniques to find underlying reasons for a problem.
    - **Analogy:** Finding the source of a leak, not just mopping the floor.
    - **Examples:** 5 Whys, Fishbone (Ishikawa) Diagram.

- **Divide and Conquer:** Breaking a large problem into smaller, manageable sub-problems.
    - **Analogy:** Assembling a complex Lego set piece by piece.
    - **Example:** Splitting a large software project into smaller modules.

---

## Six Key Features of Python

### 1. Simplicity and Readability

- **Explanation:** Python's syntax is clean and straightforward, much like natural language. It uses indentation to define code blocks, promoting neat, readable code.
- **Benefit:** Easy to learn for beginners and helps developers write and maintain understandable code quickly.

### 2. Interpreted Language

- **Explanation:** Python code is executed line by line by an interpreter, without a separate compilation step.
- **Benefit:** This speeds up the development cycle; you can make changes and test them instantly.

### 3. Dynamically Typed

- **Explanation:** You don't need to declare variable types explicitly. Python determines a variable's type at runtime based on the value assigned to it.
- **Benefit:** Offers flexibility and faster development, but requires good testing to catch type-related errors.
- **Example:** `x = 10` (int), then `x = "hello"` (str).

### 4. Platform Independent (Portable)

- **Explanation:** Python code runs across various operating systems (Windows, macOS, Linux) without significant changes, provided an interpreter is installed.
- **Benefit:** Write code once, deploy anywhere, saving time and effort.

### 5. Extensible and Embeddable

- **Explanation:** You can **extend** Python with modules written in other languages (like C/C++ for performance) and **embed** Python interpreters within other applications (e.g., adding scripting to a C++ app).
- **Benefit:** Combines Python's rapid development with the performance or existing functionality of other languages.

### 6. Extensive Standard Library

- **Explanation:** Python comes with a huge collection of pre-built modules and packages for common tasks (e.g., file handling, networking, web services).
- **Benefit:** Developers don't need to write common functionalities from scratch, drastically accelerating development ("batteries included").

---

## Six Features of Object-Oriented Programming (OOP)

### 1. Objects and Classes

- **Feature:** Code is organized around **objects** (instances) created from **classes** (blueprints), each bundling data (attributes) and behavior (methods).
- **Benefit:** Provides a clear, logical structure for organizing code, mirroring real-world entities.

### 2. Encapsulation

- **Feature:** Bundles data and the methods that operate on it within a class, often restricting direct external access to data.
- **Benefit:** Protects data, enhances **modularity**, and simplifies maintenance.

### 3. Inheritance

- **Feature:** Allows a new class (subclass) to acquire properties and behaviors from an existing class (superclass), creating an "is-a" relationship.
- **Benefit:** Promotes **code reusability**, reducing redundancy and making code easier to extend.

### 4. Polymorphism

- **Feature:** The ability of different objects to respond to the same method call in their own unique ways.
- **Benefit:** Enables writing more generic and **flexible** code that works with various object types.

### 5. Abstraction

- **Feature:** Hides complex implementation details, showing only essential features and functionalities.
- **Benefit:** Simplifies the use of objects by providing a clear, minimal interface, reducing developer cognitive load.

### 6. Modularity and Reusability

- **Feature:** Encourages breaking systems into smaller, self-contained, independent modules (classes/objects) that can be reused.
- **Benefit:** Leads to more organized, **scalable**, and maintainable code, accelerating development.

---

## Six Applications of Python Language

### 1. Web Development

- Used for building web applications and APIs with frameworks like Django, Flask, and FastAPI.
- **Examples:** Instagram, Spotify (backend).

### 2. Data Science, Machine Learning, & AI

- The dominant language for these fields due to libraries like NumPy, Pandas, TensorFlow, and PyTorch. Used for data analysis, visualization, and predictive modeling.
- **Examples:** Recommendation systems, AI-powered insights.

### 3. Automation and Scripting

- Excellent for automating repetitive tasks, system administration, web scraping, and custom scripting.
- **Examples:** Generating reports, managing files, system backups.

### 4. Desktop GUI Applications

- Develops cross-platform desktop apps using toolkits like PyQt, Tkinter, and Kivy.
- **Examples:** Dropbox desktop client, Anaconda Navigator.

### 5. Game Development

- Popular for rapid prototyping, game logic, and building simpler games, often with libraries like Pygame.
- **Examples:** Scripting in games like "Mount & Blade."

### 6. Scientific and Numeric Computing

- Widely used in scientific research, engineering, and mathematical computations with libraries like NumPy and SciPy.
- **Examples:** Physics simulations, financial modeling, data analysis in research.

---

## Python Fundamentals

### Variables

- **Definition:** A **named storage location** in memory that holds a value. Think of it like a labeled box where you put data.
- **Purpose:** To **store, reference, and manipulate data** within a program. Their values can change during execution.
- **Key Traits:** Has a unique **name**, holds a **value**, and its **type** is determined dynamically in Python.
- **Example:**
    
    ```python
    age = 30         # 'age' is a variable storing 30
    name = "Alice"   # 'name' is a variable storing "Alice"
    age = age + 10   # Value of 'age' changes to 40
    ```

### Identifiers

- **Definition:** A **name** given to any entity in a program, including **variables, functions, classes, and modules**.
- **Purpose:** To uniquely **identify** program elements so you can refer to them.
- **Python Rules:**
    1. Can contain letters (A-Z, a-z), digits (0-9), and underscores (`_`).
    2. Must start with a **letter or an underscore** (cannot start with a digit).
    3. Are **case-sensitive** (`myVar` is different from `myvar`).
    4. **Cannot be a Python keyword** (e.g., `if`, `for`, `class`).
    5. No spaces or special characters (`!`, `@`, `-`).
- **Example:**
    
    ```python
    my_variable = 100        # Variable identifier
    def calculate_sum(a, b): # Function identifier
        return a + b
    class MyClass:           # Class identifier
        pass
    ```

---

## Data Types in Python

### 1. Numeric Types

- **`int` (Integer):** Whole numbers (positive, negative, zero) with arbitrary precision.
    ```python
    age = 25
    big_num = 1234567890
    ```

- **`float` (Floating-Point Number):** Real numbers with a decimal part or in exponential form.
    ```python
    price = 19.99
    pi = 3.14159
    ```

- **`complex` (Complex Number):** Numbers with a real and an imaginary part (`a + bj`).
    ```python
    z = 3 + 4j
    ```

### 2. Boolean Type

- **`bool` (Boolean):** Either `True` or `False`. Used for logic and conditions.
    ```python
    is_active = True
    is_empty = False
    ```

### 3. Sequence Types

- **`str` (String):** An immutable sequence of Unicode characters (text).
    ```python
    name = "Alice"
    message = 'Hello World!'
    ```

- **`list` (List):** An ordered, **mutable** collection of items. Defined by `[]`.
    ```python
    my_list = [1, "apple", 3.14]
    my_list.append(5) # Modifiable
    ```

- **`tuple` (Tuple):** An ordered, **immutable** collection of items. Defined by `()`.
    ```python
    my_tuple = (10, "banana", False)
    # my_tuple.append(5) # Error, cannot modify
    ```

### 4. Set Types

- **`set` (Set):** An unordered collection of **unique** and immutable items.
    ```python
    my_set = {1, 2, 3, 2, 1}
    print(my_set) # Output: {1, 2, 3}
    ```

### 5. Mapping Type

- **`dict` (Dictionary):** An unordered, **mutable** collection of unique keys mapped to values.
    ```python
    person = {"name": "Bob", "age": 30}
    print(person["name"])
    person["age"] = 31 # Modifiable
    ```

---

## Operators in Python

An **operator** is a special symbol or keyword that performs an action on one or more values (called **operands**).

### Types of Operators

1. **Arithmetic Operators**: `+`, `-`, `*`, `/`, `%`, `**`, `//`
2. **Comparison Operators**: `==`, `!=`, `>`, `<`, `>=`, `<=`
3. **Assignment Operators**: `=`, `+=`, `-=`, `*=`, `/=`
4. **Logical Operators**: `and`, `or`, `not`
5. **Identity Operators**: `is`, `is not`
6. **Membership Operators**: `in`, `not in`
7. **Bitwise Operators**: `&`, `|`, `^`, `~`, `<<`, `>>`

---

## Control Flow

### Loops

#### `for` Loop
- **Purpose:** Best for **fixed iterations**; used to iterate over a **sequence**.
```python
numbers = [10, 20, 30]
total_sum = 0
for num in numbers:
    total_sum += num
print(f"Sum: {total_sum}")
```

#### `while` Loop
- **Purpose:** Best for **indefinite iterations**; repeats while a condition is `True`.
```python
count = 3
while count > 0:
    print(f"Countdown: {count}")
    count -= 1
print("Blast off!")
```

### Control Statements

- **`pass`:** A null operation; placeholder where syntax requires a statement.
- **`break`:** Immediately terminates the current loop.
- **`continue`:** Skips the rest of the current iteration and proceeds to the next.

---

## Data Structures

### Lists

```python
# Creating
fruits = ["apple", "banana"]

# Appending
fruits.append("orange")

# Accessing
first_fruit = fruits[0]  # "apple"
```

### Dictionaries

```python
# Creating
person = {"name": "Alice", "age": 30}

# Adding/Updating
person["city"] = "New York"

# Accessing
name = person.get("name", "Unknown")

# Removing
del person["age"]
```

### Sets

```python
# Creating
numbers = {1, 2, 3, 4}
other_numbers = {3, 4, 5, 6}

# Operations
union = numbers | other_numbers        # {1, 2, 3, 4, 5, 6}
intersection = numbers & other_numbers # {3, 4}
difference = numbers - other_numbers   # {1, 2}
```

---

## Functions

### Basic Function

```python
def greet(name):
    """Prints a greeting message."""
    print(f"Hello, {name}!")

greet("Alice")
```

### Lambda Functions

```python
# Regular function
def square(x):
    return x * x

# Lambda equivalent
square_lambda = lambda x: x * x

# Usage with map
numbers = [1, 2, 3]
squared = list(map(lambda x: x * x, numbers))
```

### Variable Scope

- **Local Variable:** Limited to the function where it's defined
- **Global Variable:** Accessible throughout the entire program

---

## File Operations

### Text vs Binary Files

| Feature | Text File | Binary File |
|---------|-----------|-------------|
| Content | Human-readable characters | Raw bytes |
| Examples | `.txt`, `.py`, `.html` | `.exe`, `.jpg`, `.mp3` |

### File Operations

```python
# Reading a file
def display_file_content(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as file:
            content = file.read()
            print(content)
    except FileNotFoundError:
        print(f"File '{filepath}' not found.")
```

### Directory Operations

```python
import os

# Current directory
print(os.getcwd())

# List directory contents
print(os.listdir())

# Create directory
os.mkdir('new_folder')

# Check if path exists
if os.path.exists('file.txt'):
    print("File exists")
```

---

## Object-Oriented Programming

### Classes vs Objects

| Class | Object |
|-------|--------|
| Blueprint/template | Actual instance |
| Defines structure | Has specific values |
| Written once | Can create many |

### Class Definition

```python
class Employee:
    total_employees = 0  # Class variable
    
    def __init__(self, name, emp_id, salary):
        """Constructor - initializes object"""
        self.name = name
        self.emp_id = emp_id
        self.salary = salary
        Employee.total_employees += 1
    
    def display_details(self):
        """Instance method"""
        print(f"Name: {self.name}, ID: {self.emp_id}")
    
    @classmethod
    def from_string(cls, employee_str):
        """Class method - alternative constructor"""
        parts = employee_str.split('-')
        return cls(parts[0], parts[1], float(parts[2]))
    
    def __del__(self):
        """Destructor - called when object is deleted"""
        print(f"Employee {self.name} record deleted")

# Usage
emp1 = Employee("Alice", "E001", 75000)
emp2 = Employee.from_string("Bob-E002-80000")
```

### OOP Features

1. **Inheritance:** Child classes inherit from parent classes
2. **Polymorphism:** Different objects respond to same method differently
3. **Encapsulation:** Bundle data and methods together
4. **Abstraction:** Hide complex implementation details
5. **Methods and Message Passing:** Objects communicate through method calls

### Inheritance Example

```python
class Vehicle:  # Parent class
    def __init__(self, brand):
        self.brand = brand
    
    def start(self):
        print(f"{self.brand} is starting")

class Car(Vehicle):  # Child class
    def __init__(self, brand, model):
        super().__init__(brand)
        self.model = model
    
    def honk(self):
        print(f"{self.brand} {self.model} goes beep!")

my_car = Car("Toyota", "Camry")
my_car.start()  # Inherited method
my_car.honk()   # Own method
```

---

## Modules and Packages

### User-Defined Module

**my_module.py:**
```python
def greet(name):
    return f"Hello, {name}!"
```

**main.py:**
```python
import my_module
print(my_module.greet("World"))
```

### Package Structure

```
my_package/
├── __init__.py
└── utils.py
```

**Usage:**
```python
from my_package.utils import add
result = add(5, 3)
```

---

This comprehensive guide covers the fundamental programming paradigms and Python concepts essential for any programmer. Each section provides both theoretical understanding and practical examples to reinforce learning.
