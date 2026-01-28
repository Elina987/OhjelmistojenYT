# Unit Testing ⚙️
This project contains a simple JavaScript module which has the basic arithmetic operations.
Also includes unit tests written with Mocha and Chai.

## 📄 mylib.js
The library has the following functions:  
➕ add (a, b)  
➖ subtract (a, b)  
✖️ multiply (a, b)  
➗ divide (a, b)
  
The divide function throws an error if the divisor is 0.

## 📄 main.js
Imports the mylib module and demonstrates how the functions work.

▶️ Run the main program with: node main.js

## 📄 Unit tests
The test include:
- One test per function
- A test that checks division by zero throws an error

▶️ Run the tests with: npm test 
