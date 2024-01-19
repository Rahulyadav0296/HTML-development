// Arrays
 const myArray = [1, 2, 3, 4, 5, 6];

//  console.log(myArray[3]);

 const myHeros = ["Thor", "Iron Man"]

 const myArr = new Array(1, 3, 3, 5, 6)

//   console.log(myArr[1]);

//   array methods  

// myArr.push(10)
// myArr.push(11)
// console.log(myArr);
// // myArr.unshift(12)   //place the element in the first position
// console.log(myArr);
// myArr.shift()          // delete the first element from the array
// console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));
// const newArray = myArr.join()   // add all the array of array into a string 

// console.log(newArray);
// console.log(typeof newArray);

//slice splice

const myHerosMarvel = ["Iron Men","Thor", "Wakanda"];
const dc_heros = ["SuperMen", "wonderWomen", "Aquamen"];

// myHerosMarvel.push(dc_heros)
// console.log(myHerosMarvel[3][1]);

// const allHEros = myHerosMarvel.concat(dc_heros)
// console.log(allHEros);

// const allHeros = [...dc_heros, ...myHerosMarvel]  // Spread Operator
// console.log(allHeros);

const anotherArray = [1, 2, 3 ,[4, 5, 6], 7, 8, [4, 5, [1, 2, 3]]];

// Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// const real_another_array = anotherArray.flat(Infinity)
// console.log(real_another_array);

// console.log(Array.from("RAHUL"));
// console.log(Array.isArray("Rahul")); 
console.log(Array.from({name: "Rahul yadav"}));

let score1 = 100
let score2 = 200
let score3 = 300


// of is a set of elements icludes in a new element array 
// console.log(Array.of(score1, score2, score3));