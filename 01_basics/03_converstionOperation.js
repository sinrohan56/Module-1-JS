//Implicit Type Conversion

//Implicit type conversion (also known as type coercion) happens automatically when JavaScript converts one data type to another during operations. Here are some examples:


//String Concatenation: When you use the + operator with a string and a number, JavaScript converts the number to a string and concatenates them.

let result = "The number is " + 5;
console.log(result); // "The number is 5"

//Boolean Conversion in Conditional Statements: Non-boolean values are implicitly converted to boolean values when used in conditionals.


if (0) {
  console.log("This won't run.");
}
if ("Hello") {
  console.log("This will run.");
}

//Addition with Strings and Numbers: When adding a string and a number, JavaScript converts the number to a string and then concatenates.


let sum = "Value: " + 10;
console.log(sum); // "Value: 10"

//Type Coercion in Comparison: JavaScript converts types during comparison operations.

console.log('5' == 5); // true
console.log('5' === 5); // false (strict equality)


//Explicit Type Conversion

//Explicit type conversion (also known as type casting) is when you manually convert one data type to another using JavaScript functions or methods. Here are some examples:

//Using Number() to Convert to Number:

let num = Number("123");
console.log(num); // 123
console.log(typeof num); // "number"

//Using String() to Convert to String:

let str = String(123);
console.log(str); // "123"
console.log(typeof str); // "string"

//Using Boolean() to Convert to Boolean:

let bool = Boolean(1);
console.log(bool); // true
console.log(typeof bool); // "boolean"

//Using parseInt() and parseFloat(): These functions convert strings to numbers.

let intNum = parseInt("123px");
console.log(intNum); // 123

let floatNum = parseFloat("123.45px");
console.log(floatNum); // 123.45

//Using toString() Method: This method converts numbers and other types to strings.


let num = 123;
let str = num.toString();
console.log(str); // "123"
console.log(typeof str); // "string"