const mylib = require("./mylib");

function main() {
  console.log("Add:", mylib.add(5, 3));
  console.log("Subtract:", mylib.subtract(5, 3));
  console.log("Multiply:", mylib.multiply(5, 3));
  console.log("Divide:", mylib.divide(5, 3));
}

main();
