// arrays in js is resizeable,

// it can be a mixed of all data types

const myArr = [0, 1, 2, 3, 4, 5]
// //to access any element of arr.
// console.log((myArr[1]));

// // the arrays in js makes shallow copies of any array(it means that the copies share same reference point i.e, heap memory)

// // array declaration

// const myArr1 = [0, 1, 2, 3, 4, 5]
// const yourArr = new Array(1, 2, 3, 4, 5)

// console.log(myArr1)
// console.log(yourArr)

//Array methods

// myArr.push(6) // returns the changed array with addes value at the last of array.
 
// myArr.pop() // returns the array after removing last array.

// myArr.unshift(0) // shoft the first value and inserts at the start of array.

//myArr.shift() // removes first element from the start of element 

// console.log(myArr.includes(9)) // returns the boolean types answer of the question asked.

// console.log(myArr.indexOf(19)) // returns the index position of the given value, and if value is not present in the array then it automatically returns (-1)

// const newArr = myArr.join() // returns all the array elements converting into string by removing brakets.

//slice, splice

//slice - // returns the part of array that you want, original array is not affected by it. 
//const myArr3 = myArr.slice(1,3) - [1, 2]

//splice - returns the part of array that you want, original array is affected by it and it extracts the result from original array and shows you.(IT ALSO SHOWS THE LAST RANGE BUT THE CLICE DOESNT.)

//const myArr3 = myArr.slice(1,3) [1, 2, 3] OG array become [0, 4, 5]

// ++++++++++++++++++++Array funtions++++++++++++++++++


