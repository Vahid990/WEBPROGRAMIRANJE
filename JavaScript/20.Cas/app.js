const positiveNumber = [2,3,45,5,6,7,-1,-32]



let positiveNumberReversed = []
for (let i = positiveNumber.length-1; i>=0; i--){
    positiveNumberReversed.push(positiveNumber[i]);
// console.log(i)
};
console.log(positiveNumberReversed)

let joinedarray = positiveNumber.join(",")
console.log(joinedarray)

let firstTask = "laptop"
let secondTask = "autobus"

const numbers = [3,5,7,32,67,22]

// for (let s = firstTask.length;s--;)
// console.log(s)
const cars = ["bmw","mercedes","vw","audi"];
console.log(cars)
for (let car in cars) {
    console.log(cars[car])
}