// const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter);

const chai = {
    name: 'ginger',
    price: 34,
    isAvailable : true,

    orderChai : function() {
        console.log("chai is working");
    }
}

// console.log(chai);
const descripter = Object.getOwnPropertyDescriptor(chai, "name")
console.log(descripter);

for (let [key, value] of Object.entries(chai)) {
    if(typeof(value) !== 'function'){
        console.log(`${key}, ${value}`);
    }
}