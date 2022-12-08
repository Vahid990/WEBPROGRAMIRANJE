// function ime_funkcije(parametar1, parametar2) {
    // Naredbe
// }

// ime_funkcije(argument1, argument2); //Pozivanje funkcije


// Funkcija je blok za izvrsavanje nekih naredbi
// Koriscenjem funckije mozemo skratiti kod
// Funkciju definisemo samo jednom i mozemo je koristiti vise puta u kodu
function saberi(a,b){
    console.log(a + b)
}

saberi(5, 10);


function pozdrav(name){
    console.log("Pozdrav " + name)
    return // Vraca vrednost funkcije i tu se funkcija zaustavlja
}
pozdrav("Ibrahim")

// ES6 funkcije
// Arrow funkcije
const oduzmi = (a,b) => {
    console.log(a-b);
};
oduzmi(10,5)