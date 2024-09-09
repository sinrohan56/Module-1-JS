const score = 400

const balance = new Number(100) // it guarantees that the typeof the value is number.
console.log(balance) //[Number: 100]
console.log(balance.toString()) //100 but as string
console.log(balance.toFixed(2)) //100.00 

const oNumber = 23.6556

console.log(oNumber.toPrecision(3)); // 23.7 it gives precise return of decimal value as i mentioned 3 so frst 3 numbers are given as precision.

//What if i give a number like this:

const anotherNumber = 124.54556

console.log(anotherNumber.toPrecision(3)); // 125 it gives precise return of decimal value as i mentioned 3 so frst 3 numbers are given as precision.

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));  // returns a string value in the locale standard

//+++++++++++++++++++Maths+++++++++++++++++++++

console.log(Math)
console.log(Math.abs(-4)) // 4 this make the sign change of a value(just the minus changes to plus)
console.log(Math.round(4.3)); //4 Gives the round of of the number in tradtional way.
console.log(Math.ceil(4.3)) // 5 as it gives upper round off
console.log(Math.floor(4.6)) //4 as it gives lower round off.

//It gives a random number between 0 and 1, it helps in getting random passwords or random things.

console.log(Math.random())//it will only give value in 0 - 1

//so we can get a positive integer by multiplying it by 10 and we write a +1 as it can also give 0 sometimes

console.log((Math.random()*10)+1) // give atleast 1 and gives a positive value.
// to get a value in between some values
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min +1))+ min) // random gives random numbers and we multiply by the specific range by max-min and we add 1 bbecause of avoiding 0 value. we also add min at end to set a lowest bar of 10.

