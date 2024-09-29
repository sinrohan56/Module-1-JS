// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();
// ()() - This is how a immediately invoked function looks.
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

