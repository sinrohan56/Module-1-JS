// to merge two arrays

// const heroes = [Hulk, Ironman, Captainamerica, wolverine]

// const heroin = [wonderwoman, supergirl, catwoman, powerangers]

//what if we push one array to other

//heroes.push(heroin)  // it will return the existing array by taking the second array as a new 5th element as a nested array.

// to concat them we can use

// const combined = heroes.concat(heroin) //This returns a new array by merging the two array.

// one best option to add to array is to use spread method(This spreads the two arrays and merges them)
//spread
// const allNewHeroes = [...heroes, ...heroin]  // Gives new array by spreading and separating these two.


//to simplify nested and nested array like this
//flat - returns a new array 

// const anotherArray = [1, 2, 3, [4, 5], [6, [7]]]

// const flatArray = anotherArray.flat(Infinity) //this returns new array by removing all nestings. // (we can also specify number of depths like 2 or 3 nesting)

//question methods and changing methods of array

// Array.isArray("Rohan") //This checks whether this is array or not.
// Array.from("Rohan") //This changes the input values to array
// console.log(Array.from({name: "rohan"})) // This returns an empty array as both of them cannot be converted to array. [] - Interview.

//to make multiple varibale into array - 

// let s1 = 100
// let s2 = 200
// let s3 = 300

// Array.of(s1, s2, s3) - returns the array of the above list