//map method - 'Map' is used to apply a function on every item in an array and returns the new array. 'Filter' is used to create a new array from an existing one, containing only those items that satisfy a condition specified in a function.

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})

const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);