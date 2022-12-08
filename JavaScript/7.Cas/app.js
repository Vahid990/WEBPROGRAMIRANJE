// Break
// Continue

// Break primer:
// for (let i = 1;  i<= 20;i++) {
//     if(i  === 11) {
//     break;
//     }
//     console.log(i)
// }

// continue primer:
// for (let i = 1;  i<= 20;i++) {
//     if(i  === 11) {
//     continue;
//     }
//     console.log(i)
// }


// for (promenljiva of niz) {
    // code block to be executed
// }



let niz = [10, 20, 30, 40, 50];
let text = ""

for (let x of niz) {
text += x + "<br>";
console.log(x)
}


const person = {fname:"John", lname:"Doe", age:25};
for (let i in person) {
    console.log(i)
}