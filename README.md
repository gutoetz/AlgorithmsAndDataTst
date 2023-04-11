# Algorithms And Data Test

This repository contains algorithms created for a test for a company that I'm applying to.

## Algorithms

### Filtering arrays

The array filtering algorithm consists of filtering an input array, removing elements that do not meet a certain condition. The final result is a new array with only the elements that meet the established condition.

### Basic Math

The Basic Math class is an implementation of basic mathematical operations. It is possible to use this class to perform addition, subtraction, multiplication, and division with integers.

### Generate ID

The Generate ID function creates an alphanumeric identifier in the format "xxxx-xxxx-xxxx", where each "x" represents a random alphanumeric character. This function can be used to generate unique and random IDs in an application.

## How to use

To use these algorithms, simply import the corresponding file and use the available functions or classes in your code.

```javascript
// Example of using Filtering arrays
const filteredArray = new filterArray();
console.log(filteredArray.str([1, 2, 3, 4, 5, 'a', 'b'])); // ['a', 'b']

// Example of using Basic Math
const calculator = new BasicMath();
const result = calculator.add([2, 3]);
console.log(result); // 5

// Example of using Generate ID
const id = generateId();
console.log(id); // "2c5f-d82a-1e6b"
