// the date is compared from a fixed date by organization if.e, jan 1 1970. And the value is returned in milliseconds.

//Date is an object.

let myDate = new Date()

// console.log(myDate.toString());

// console.log(myDate.toLocaleString('en-IN'));

//if we want to declare any specific date.

const dateCreated = new Date(2023, 0, 23)

console.log(dateCreated);

// to get a specific date format

let dateFormat = new Date("01-14-2023") 

//timestamps

let myTimeStamps = Date.now()
console.log(myTimeStamps); // returns millisecond value.

//to get readable date from upper statement.
//how to convert in seconds.
console.log(Math.floor(Date.now()/1000)); // gives current time in second.

//the locale string method can also defined in more details.

myDate.toLocaleString('default', {
    weekday: "long",
})
console.log(myDate)