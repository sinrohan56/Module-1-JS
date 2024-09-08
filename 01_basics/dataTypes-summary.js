// This categorisation of data types is done on the basis of how these datas are stored in the memory and how we can access it

//Primitive Datatypes - Call by values - changes are done in copy as you are given copy
  //  String, Number, Boolean, null, undefined, Symbol, BigInt                     
//Non-primitive datatypes(Reference type) - There reference are directly allocated to you in memory.

//Array, Objects, Functions

const heroes =["shaktiman", "ypi", "gdf"]

let myObj = {
name: "yo",
age: 56
}

const myFunction = function(){
    console.log("hello World")
}

console.log(typeof heroes)


//+++++++++++++++++++++++++Memory+++++++++++++++++++++++++++++

//Stack(Primitive DT- Gives a copy of any value) and Heap(Non-primitive)