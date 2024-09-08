const name = "Rohan"
const count = 23

//to concat to merge to=wo strings or write any strinf efficiently
//string interpolation

console.log(`My name is ${name} and my age is ${count}`)

//declaration of string

const gameName = new String('RohanS')

//1. Basics of Strings
//Definition: A string in JavaScript is a sequence of characters enclosed in single quotes ('), double quotes ("), or backticks (`).


let singleQuoteString = 'Hello, World!';
let doubleQuoteString = "Hello, World!";
let templateLiteralString = `Hello, World!`;

//Immutability: Strings in JavaScript are immutable, meaning once a string is created, it cannot be changed. Any operation that appears to modify a string actually creates a new string.

let str = 'Hello';
let newStr = str.toUpperCase(); // 'HELLO'

//2. String Properties
//.length Property: Returns the number of characters in the string.


let str1 = 'Hello';
console.log(str.length); // 5

//3. String Methods
//JavaScript provides a wide range of methods for manipulating strings:

//.charAt(index): Returns the character at the specified index.

let str = 'Hello';
console.log(str.charAt(1)); // 'e'
//.concat(string1, string2, ...): Combines two or more strings.


let str1 = 'Hello';
let str2 = 'World';
console.log(str1.concat(' ', str2)); // 'Hello World'

//.includes(searchString): Checks if the string contains the specified substring.


let str = 'Hello, World!';
console.log(str.includes('World')); // true

//.indexOf(searchString): Returns the index of the first occurrence of the specified substring, or -1 if not found.


let str = 'Hello, World!';
console.log(str.indexOf('World')); // 7

//.lastIndexOf(searchString): Returns the index of the last occurrence of the specified substring, or -1 if not found.


let str = 'Hello, World! Hello!';
console.log(str.lastIndexOf('Hello')); // 14
//.replace(searchValue, newValue): Replaces the first occurrence of the specified substring with a new substring.


let str = 'Hello, World!';
console.log(str.replace('World', 'Universe')); // 'Hello, Universe!'

//.slice(start, end): Extracts a section of the string and returns it as a new string.

let str = 'Hello, World!';
console.log(str.slice(7, 12)); // 'World'

//.split(separator): Splits the string into an array of substrings based on the separator.

let str = 'Hello, World!';
console.log(str.split(', ')); // ['Hello', 'World!']

//.toLowerCase(): Converts all characters in the string to lowercase.


let str = 'Hello, World!';
console.log(str.toLowerCase()); // 'hello, world!'

//.toUpperCase(): Converts all characters in the string to uppercase.


let str = 'Hello, World!';
console.log(str.toUpperCase()); // 'HELLO, WORLD!'

//.trim(): Removes whitespace from both ends of the string.


let str = '  Hello, World!  ';
console.log(str.trim()); // 'Hello, World!'

//.startsWith(searchString): Checks if the string starts with the specified substring.


let str = 'Hello, World!';
console.log(str.startsWith('Hello')); // true

//.endsWith(searchString): Checks if the string ends with the specified substring.


let str = 'Hello, World!';
console.log(str.endsWith('World!')); // true
//.repeat(count): Returns a new string with the specified number of repetitions of the original string.


let str = 'Hello!';
console.log(str.repeat(3)); // 'Hello!Hello!Hello!'

//4. Template Literals
//Template literals, denoted by backticks (`), provide a way to embed expressions and multi-line strings:

//Expression Interpolation:

let name = 'Alice';
let greeting = `Hello, ${name}!`;
console.log(greeting); // 'Hello, Alice!'

//Multi-line Strings:

let multiLine = `Line 1
Line 2 Line 3`; 
console.log(multiLine);


//### **5. Escaping Characters**

//To include special characters in a string, you can use escape sequences:

//- **Backslash (`\`):** Escapes special characters.

//```javascript

let str = 'He said, \'Hello, World!\'';
console.log(str); // 'He said, 'Hello, World!''

//Other Escape Sequences:
// \' Single quote
// \" Double quote
// \\ Backslash
// \n Newline
// \t Tab
//6. String Conversion
//Strings can be created from other data types:

//Using String() Constructor:

let num = 123;
let str = String(num);
console.log(str); // '123'

//Using .toString() Method:

let bool = true;
let str = bool.toString();
console.log(str); // 'true'

Bonus Tip : master all the methods just the glimpes for the interview.Bonus