//functions are basically a package where i can wrap my code or encapsulate it into a package so that i can call it aywhere i want.

// function sayMyName(This is call parameter){
// console.log("Rohan")
// } 

// sayMyName() - This is calling the function, we are giving arguments in the brackets.


// function addTwoNum(num1, num2){
//     console.log(num1+num2)
// }
// addTwoNum(3, 5) //-we need to put some number in bracket to exceucute the function otherwise it will give NaN

//return 

// function addNums(n1, n2){
// console.log(n1+n2)
// }
// const result = addNums(4, 2)
// console.log("Result: ", result) // This will give undefined because we cannot store the result in this way as consolelog is just printing the result not giving the function value to system.

//we need to use return to get the value in system.
// function addNums(n1, n2){
//     let result = n1+n2
//     return result
//     }
//     const result = addNums(4, 2)
//     console.log("Result: ", result)

function loginUserMessage(username){
    return `${username} logged in`
}

const user = loginUserMessage("Rohan") //This will not give anything, as we didnt say to print it aur store it in any variable, so we need to show it now.

console.log(user)

//we ca also predefine some thing to the parameter like this so that we do not get undefined when user dont give any value in arguments. - function get(username = 'sam')

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

//we can use ...num1, spread operator to spread the given arguments store it in num1, but the first two numbers will go in val1 and val 2.

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));