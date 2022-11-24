// Nizovi
// const arr = ["Banana","Apple","Orange"]
// arr.push("mango")
// console.log(arr)


// Metode za rad sa nizovima
// 1. Push -> dodaje elemment na kraju niza
// 2. Unshift -> dodaje element na pocetku niza

// const arr = ["Banana","Apple","Orange"]
// arr.unshift("mango")
// console.log(arr)

// 3.Pop -> brise element na kraju niza

// const arr = ["Banana","Apple","Orange"]
// arr.pop()
// console.log(arr)

// 4.Shift -> Brise element na pocetak niza

// const arr = ["Banana","Apple","Orange"]
// arr.shift("Banana")
// console.log(arr)

// 5. Slice(start, end) -> Ne menja niz,vec vraca samo selektovane elemente iz niza

// const slice = ["Banana","Apple","Orange","lemon","ananas"]
// let fruit = slice.slice(2,4);
// console.log(fruit)

// 6.Splice ->Menja niz i vraca selektovane elemente
// Slice I splice su slicni osim toga sto splice menja nizove
// const splice = ["Banana","Apple","Orange","lemon","ananas"]
// splice.splice(1,3,"cherry")
// console.log(splice)

//  7.Spread
const arr = [1,2,3,4,5,6]
// Kopirali smo niz arr koristeci ... i prosledili ga u arr2
const arr2 = [...arr ,7,8]
console.log(arr2)


// Vezbe

// Push
// const arr = ["Banana","Apple","Orange"]
// arr.push("Mango")
// console.log(arr)

// Unshift
// const unshift = ["Banana","Apple","Orange"]
// unshift.unshift()
// console.log(unshift)

// Pop
// const pop = ["Banana","Apple","Orange"]
// pop.pop()
// console.log(pop)

// Shift
// const shift = ["Banana","Apple","Orange"]
// shift.shift()
// console.log(shift)

// Splice
// const splice1 = ["Banana","Apple","Orange"]
// splice1.splice(1,3)
// console.log(splice1)