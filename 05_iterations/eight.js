//reduce method -The array reduce in JavaScript is a predefined method used to reduce an array to a single value by passing a callback function on each element of the array. It accepts a function executed on all the items of the specified array in the left-to-right sequence. The returned single value is stored in the accumulator.
//This method basically runs throguh all items and has a accumulator that store the fuction excecution result and firsy accumulator value needs to be given by as as it is undefined.

const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);