let broj_prvi = 5
let broj_drugi = 10

if(broj_prvi === broj_drugi){
    console.log(true)
}else{
    console.log(false)
}

let mesec = 6

// if (mesec === 1) {
//     console.log("Januar");
// } else if (mesec === 2) {
//     console.log("februar");
// }
// else{
//     console.log("jun");
// }

switch(mesec){ 
    case 1:
        console.log("Januar");
    break;
    case 2:
        console.log("Februar");
        break;
        case 3:
            console.log("Mart");
            break;    
            case 4:
            console.log("April");
        break;
        case 5:
            console.log("Maj");
            break;
            case 6:
                console.log("Jun");
                break;
}
console.log(mesec)
time = 18
if (time < 12) {
    console.log("dobro jutro")
} else if (time < 19 ) {
    console.log("Dobar Dan")
}
else {
    console.log("Dobro vece")
}

// Variable
// var --> function-scoped i moze postati global scope,Moze se definisati vise istih promenljivih kod var
// let --> Block-scoped,ako se definise u neom bloku i ne moze joj se pristupiti van tog bloka,Mozemo jooj menjati vrednost
// const --> radi sve isto sto i let ali ne mozemo promeniti vrednost kao kod let,Ali mozemo property

// Ne javlja gresku kod istih imena
// var x=10
// var x=11
// var x=12
// console.log(x)

// Block Scoped
// let y=10
// let y=11
// let y=12
// console.log(y)

// Menjanje vrednosti kod let
// let z = 10
// z =11
// console.log(z)

// const z ="Zdravo"
// z = "Dobar dan"
// console.log(z)

// Ne moze se menjati izvan {}
// {
//     let nesto = 10;
// }
// nesto = 15
// console.log(nesto)

// Ne mozemo menjati na ovaj nacin
// const car = ["bmw","audi",]
// car = ["Mercedes"]

// Ali mozemo promeniti property
// You can create a const object:

// const car = {type:"Fiat", model:"500", color:"white"};

// You can change a property:
// car.color = "red";

// car.owner = "Johnson";

window.alert("Welcome")
