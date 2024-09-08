//Types of Comparison Operators
//JavaScript provides several operators to compare values:

//Equal to (==): Compares two values for equality, performing type coercion if necessary.

console.log(5 == '5'); // true

//Strictly equal to (===): Compares two values for equality without type coercion (values and types must be the same).

console.log(5 === '5'); // false

//Not equal to (!=): Compares two values for inequality, performing type coercion if necessary.

console.log(5 != '5'); // false

//Strictly not equal to (!==): Compares two values for inequality without type coercion (values and types must be different).

console.log(5 !== '5'); // true

//Greater than (>): Checks if the value on the left is greater than the value on the right.

console.log(10 > 5); // true

//Less than (<): Checks if the value on the left is less than the value on the right.

console.log(3 < 7); // true

//Greater than or equal to (>=): Checks if the value on the left is greater than or equal to the value on the right.

console.log(5 >= 5); // true

//Less than or equal to (<=): Checks if the value on the left is less than or equal to the value on the right.

console.log(3 <= 4); // true

//2. Type Coercion with ==
//The == operator performs type coercion, meaning it converts the values to the same type before making the comparison:

//String to Number:


console.log('10' == 10); // true

//Boolean Coercion:

console.log(0 == false); // true
console.log('' == false); // true

//3. No Type Coercion with ===
//The === operator does not perform type coercion. Both the type and value must be the same:

//Different Types:


console.log('5' === 5); // false

//Same Type and Value:

console.log(5 === 5); // true

//4. Special Cases

//NaN Comparison: NaN is not equal to itself, so NaN == NaN is false, but you can use Number.isNaN() to check for NaN.


console.log(NaN == NaN); // false
console.log(Number.isNaN(NaN)); // true

//null and undefined:

//null == undefined is true because they are considered equal in loose equality.
//null === undefined is false because they are of different types.

console.log(null == undefined); // true
console.log(null === undefined); // false