// Immedailty involked Function Expressions (IIFE)

(function chai(){
    //names iife
    console.log(`DB CONNECTED`);
}());


// for removing the global scope pollution we used IIFE 

//unnnamed iife
( (name) => {
    console.log(`DB CONNECTION TWO ${name}`);
} )("rahul");