import factorial from './factorial.js';
import fibonacci from './fibonacci.js';

const numberForFactorial = 5;
console.log(`The factorial of ${numberForFactorial} is ${factorial(numberForFactorial)}`);

const numberForFibonacci = 10;
console.log(`The Fibonacci sequence up to element ${numberForFibonacci} is:`);
for (let i = 0; i <= numberForFibonacci; i++) {
  console.log(fibonacci(i));
}
