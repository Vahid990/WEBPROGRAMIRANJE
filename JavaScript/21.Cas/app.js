////////////////////////////1.cas///////////////////////////////////

// console.log(2 == "2");
// console.log(2 === "2");

// const array1 = [1, 4, 6, 7, 8, 2, 34];

// for (let i = 0; i < array1.length; i++) {
//   console.log(array1[i]);
// }

// let a = 9;

// while (a < 8) {
//   console.log(a, "while");
//   a += 1;
// }

// let b = 9;

// do {
//   console.log(b, "do while");
//   b += 1;
// } while (b < 8);

// var;
// let;
// const;

// // var firstExample = 10;
// const secondExample = 30;
// // console.log(firstExample, "prvi");
// // firstExample = 32;
// // console.log(firstExample, "drugi");
// // firstExample = 100;
// // console.log(firstExample, "treci");

// for (let i = 0; i < 10; i++) {
//   const x = 3;
//   firstExample += x;
//   console.log(firstExample);
// }

// console.log(x);

// && ||
// console.log(5 && 6);

// console.log(3 === 3 && 3 === 3);
// console.log(3 === 6 || 3 === 3);
// false       true

// 3 !== 3 ? console.log("true") : console.log("false");

// const array2 = [132, 3453, 5546, 74577];

// const newArray = array2.filter((el) => el % 2 === 0);
// console.log(newArray);
// const newArray2 = array2.map((el) => el * 2);
// console.log(newArray2);

// const sum = array2.reduce((prev, curr) => prev + curr);
// const sum2 = array2.reduce((prev, curr) => prev + curr, 10000);

// const exampleThird = array2.forEach((el) => el % 2 === 0);
// console.log(exampleThird);
// const mapExample = array2.map((el) => console.log(el));

// console.log(sum, sum2);

// const array2 = [132, 3453, 5546, 74577];

// array2.map((el, index) => {
//   console.log(el);
// });

// const name = "Aldin";
// const school = "Tehnicka";

// console.log("Ja se zovem" + name);
// console.log(`Ja se zovem ${name} i idem u ${school}`);

// for (let i = 0; i < 10; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   } else if (i % 3 === 0) {
//     console.log("nesto");
//   } else if (i % 8 === 0) {
//     console.log("nesto drugo");
//   } else {
//     console.log("poslednje else");
//   }
// }

// for petlja
// i ide do 100
// i deljiv sa 3 onda console.log('fizz')
// i deljiv sa 5 onda console.log("buzz")
// i deljiv i sa 5 i sa 3 console.log('fizzbuzz')

///////////////////////////////2. CAS////////////////////////////////////////////////

// const tacno = 4;
// const netacno = 3;
// console.log(4 === 5 && 3 === 3);
// console.log(4 === 5 || 3 === 3);

// for (let i = 0; i < 40; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("fizzbuzz");
//   } else if (i % 5 === 0) {
//     console.log("buzz");
//   } else if (i % 3 === 0) {
//     console.log("fizz");
//   } else {
//     console.log(i);
//   }
// }

// let a = 0;

// console.log(a);
// if (5 > 10) {
//   a = 3;
// } else {
//   a = 16;
// }

// 5 > 10 ? (a = 3) : (a = 16);
// console.log(a);

// const cars = ["bmw", "mercedes-benz", "volskwagen", "audi", "bentley"];
// const secondCars = ["renault", "citreon", "peugeot"];

// console.log(cars);
// const bothArray = cars.concat(secondCars);
// console.log(bothArray);
// console.log(cars);

// console.log(cars.reverse());
// console.log(positiveNumber.every((el) => el > 0));
// positiveNumber.some();
// console.log(positiveNumber.some((el) => el < 0));

// const positiveNumber = [2, 3, 45, 5, 6, 6, -10, -3];
// var reversedArray = [];

// for (let i = positiveNumber.length - 1; i >= 0; i--) {
//   console.log(positiveNumber[i], `${i} index elementa niza`);
//   reversedArray.push(positiveNumber[i]);
// }

// console.log(positiveNumber);
// console.log(reversedArray);

// let stringarray = positiveNumber.join("");
// console.log(stringarray);
// console.log(stringarray.split(""));

// console.log(3);

// let firstTask = "laptop"; //potpal
// let secondTask = "autobus"; // subotua

// const numbers = [3, 5, 7, 32, 67, 22];

// console.log(Math.max.apply(null, numbers));

// let najveciBroj = 0;

// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i], najveciBroj);
//   if (numbers[i] > najveciBroj) {
//     najveciBroj = numbers[i];
//   }
// }

// console.log(najveciBroj);

// const cars = ["bmw", "mercedes-benz", "volskwagen", "audi", "bentley"];
// console.log(cars);
// for (let car in cars) {
//   console.log(cars[car]);
// }

//////////////////////////////////3. CAS////////////////////////////////////

// function addTwo(argument1, argument2) {
//   // console.log(argument1, argument2);

//   let zbir = argument1 + argument2;
//   // console.log(zbir);
//   return zbir;
//   console.log(zbir);
//   console.log(zbir);
//   console.log(zbir);
//   console.log(zbir);
//   console.log(zbir);
//   console.log(zbir);
//   console.log(zbir);
//   console.log(zbir);
//   console.log(zbir);
//   console.log(zbir);
//   console.log(zbir);
// }

// addTwo();

// const addThree = function () {};

// addThree();

// const addFour = () => {};

// addTwo(2, 1);
// console.log(addTwo(2, 1));

// const konacanZbir = addTwo(2, 1);
// console.log(konacanZbir);

// const someArray = [1, 3, 5, 6, 7, 73, 45];

// // const myCallback = (el) => console.log(el);

// // someArray.map(myCallback);

// // someArray.forEach(myCallback);

// const ourForEach = (array, callback) => {
//   for (let i = 0; i < array.length; i++) {
//     callback(array[i]);
//   }
// };

// // ourForEach(someArray, console.log);

// const ourMapFn = (array, callback) => {
//   let a = [];
//   for (let i = 0; i < array.length; i++) {
//     a.push(callback(array[i]));
//   }
//   return a;
// };

// // const myCallBack = (el) => el * 2;

// // console.log(ourMapFn(someArray, myCallBack));

// const ourFilterFn = (array, callback) => {
//   let a = [];
//   for (let i = 0; i < array.length; i++) {
//     if (callback(array[i])) {
//       a.push(array[i]);
//     }
//   }
//   return a;
// };

// console.log(ourFilterFn(someArray, (num) => num % 2 === 0));

// // const secondTry = (array, callback) => {
// const secondTry = (callback, array) => {
//   let a = [];
//   for (let i = 0; i < array.length; i++) {
//     if (callback(array[i], i, array)) a.push(array[i]);
//   }
//   return a;
// };

// // console.log(secondTry(someArray, (num) => num % 2 === 0));
// console.log(secondTry((num) => num % 2 === 0, someArray));

/////// OBJEKTI

// const classRoom = {
//   subject: "Math",
//   room: "3B",
//   student: {
//     age: 32,
//     name: "Aldin",
//     saySomething() {
//       console.log(this.name);
//     },
//   },
//   sayHello() {
//     console.log(this.student.age);
//   },
// };

// classRoom.sayHello();

// function sayHelloToClassroom() {
//   console.log(this, "iz funkcije");
// }

// sayHelloToClassroom.call(classRoom);

// console.log(classRoom);
// console.log(classRoom.subject);
// console.log(classRoom.room);
// console.log(classRoom["subject"]);
// console.log(classRoom.student.name);

// const classRoom2 = [
//   { name: "aldin", age: [10, 3, 5, 7] },
//   { name: "mehmed", age: 21 },
//   { name: "tarik", age: 53 },
//   { name: "alija", age: 10 },
//   { name: "nikola", age: 10 },
//   { name: "petar", age: 13 },
// ];

// console.log(this);

////////////////////////4. CAS/////////////////////////////////

// &&
// ||

// console.log(4 === 2 && 4 === 3);
// 4 === 4 || 4 === 3;

// let firstName = "aldin";

// for (let i = 0; i < firstName.length; i++) {
//   console.log(firstName[i]);
// }

// do {
//   console.log("nesto");
// } while (firstName.length > 22);

// while (condition) {}

const numberArray = [1, 2, 3, 4, 5, 6, 7, 7, 8, 2, 23, 231, 33, 213, 124, 324];
// console.log(numberArray.length);
// console.log(numberArray.filter((el) => el > 10));
// console.log(numberArray.map((el) => el + 10));

// const slicedArray = numberArray.slice(0, 15);
// console.log(slicedArray);
// // console.log(slicedArray);
// console.log(numberArray);
// numberArray.splice(0, 3);
// console.log(numberArray);

// const ourForEach = (array, callback) => {
//   for (let i = 0; i < array.length; i++) {
//     // callback(array[i]);
//     console.log(array[i]);
//   }
// };

// ourForEach(numberArray, console.log);

// numberArray.map((el) => console.log(el));

// console.log(customObject);

// console.log(Object.keys(customObject));
// console.log(Object.values(customObject));
// Object.keys(customObject);
// Object.values(customObject);

// customObject.knowledge.css();

// const knowledgeObject = {
//   javascript: "good",
//   html: "good",
//   advanced: {
//     react: "good",
//     typescript: "solid",
//     reactnative: "beginner",
//   },
// };

// console.log(knowledgeObject);
// const customObject = {
//   key: "value",
//   name: "aldin",
//   age: 21,
//   knowledge: {
//     javascript: "good",
//     html: "good",
//     css() {
//       console.log(this);
//     },
//     advanced: {
//       react: "good",
//       typescript: "solid",
//       reactnative: "beginner",
//       josJedan: {
//         paJosJedan: {
//           onda: {
//             poslednji: "nesto",
//           },
//         },
//       },
//     },
//   },
// };

// function sayHello(arg1, arg2, arg3) {
//   console.log(`${this.advanced.react} i ${arg1} i ${arg2}, ${arg3}`);
// }

// sayHello.call(customObject.knowledge, "argument1", "argument2");
// sayHello.apply(customObject.knowledge, ["argument1", "argument2", "argument3"]);

// sayHello();

// console.log(this);

// console.log(customObject.knowledge.advanced.josJedan.paJosJedan.onda.poslednji);

// console.log(Object.keys(customObject));
// console.log(Object.keys(customObject.knowledge));

//////////////////////////5. CAS /////////////////////////////////////////////////

// == // vrednost / negacija !=
// === // i tip i vrednost  /negacija !==

// ||   //OR
// &&
//  >= <=
// console.log(3 === 2 || 3 === 3);
// console.log(3 === 2 && 3 === 3);

// for (let index = 0; index < array.length; index++) {
//   const element = array[index];
// }

// while (a < 9) {
//   console.log("nesto, while petlja");
// }

// do {
//   console.log("nesto, do while petlja");
// } while (a < 9);

// let someArray = [1, 2, 3, 4, 5, "nesto", true, undefined, null];

// console.log(someArray);

// someArray.length = 3;

// console.log(someArray);

// someArray[0] = "nesto drugo";
// console.log(someArray);

// const cars = ["VW", "BMW", "MERCEDES", "FIAT"];

// for (let car in cars) {
//   console.log(cars[car], "skracena");
// }

// for (let i = 0; i < cars.length; i++) {
//   console.log(cars[i], "obicna");
// }

// function addTwo(nesto) {
//   console.log(nesto + 2);
// }

// addTwo(10);
// const ourForEach = (array, callback) => {
//   for (let i = 0; i < array.length; i++) {
//     callback(array[i]);
//   }
// };

// const dummyArray = [1, 3, 5, 6, 7, 878];

// ourForEach(dummyArray, console.log);

// function functionForObjects(nekiArgument) {
//   console.log(this.town, nekiArgument);
// }

// const customObject = {
//   // name: "key",
//   key: "value",
//   phone: "xaomi",
//   town: "Novi Pazar",
//   anotherObject: {
//     tv: "samsung",
//     laptop: "acer",
//     sayAnotherHello() {
//       console.log(this.laptop);
//     },
//   },
// };

// const firstObject = {
//   town: "beograd",
// };

// functionForObjects.call(customObject, "nestooo");
// functionForObjects.apply(customObject, ["nesto"]);

// console.log(customObject);
// console.log(customObject.town);
// console.log(Object.keys(customObject));

// customObject.sayHello();

// const usuallyUsed = functionForObjects.bind(customObject);

// usuallyUsed("bind");

// const newObject = {
//   name: "Aldin",
//   laptop: "acer",
// };

// console.log(newObject);
// newObject.laptop = "lenovo";
// console.log(newObject);
// newObject.age = 21;
// console.log(newObject);

// // newObject.freeze();
// Object.seal(newObject);
// newObject.name = "mehmed";
// newObject.phone = "iphone";
// console.log(newObject);

// console.log(Object.keys(newObject));
// console.log(Object.values(newObject));

///////////////////// 6. CAS ///////////////////////////////

// alert("beziii");

// const unos = prompt("unesi broj");

// console.log(unos);

// 1. korak for petlja
// 2. korak broj okretanja petlje
// 3. korak unos brojeva

const miniCalculator = () => {
  const brojOkretanja = prompt("Unesi broj okretanja");
  let initialValue = 1;

  for (let i = 0; i < brojOkretanja; i++) {
    initialValue *= +prompt("Unesi broj");
  }

  alert(initialValue, " je krajnji rezultat");
};

// miniCalculator();

const ourClass = [
  {
    name: "Aldin",
    lastName: "Rasljanin",
    age: 52,
    school: {
      class: "III-3",
      name: "tehnicka",
    },
  },
  {
    name: "Nerma",
    lastName: "Hot",
    age: 17,
    school: {
      class: "III-3",
      name: "gimnazija",
    },
  },
  {
    name: "Seid",
    lastName: "Alomerovic",
    age: 25,
    school: {
      class: "III-3",
      name: "tekstilna",
    },
  },
  {
    name: "Ihsan",
    lastName: "Curic",
    age: 23,
    school: {
      class: "III-3",
      name: "ekonomska",
    },
  },
];

// console.log(ourClass);
// console.log(ourClass[2].lastName);
// console.log(ourClass[3].name);
// console.log(ourClass[1].name);

// console.log(ourClass);
// // ourClass.map((el) => console.log(el.lastName));
// const adultPersons = ourClass.filter((el) => el.school.name === "ekonomska");

// console.log(adultPersons);
// const newSomething = ourClass.map((el) => {
//   return {
//     name: el.name,
//   };
// });
// console.log(newSomething);

// const ashdjkja = [2, 3, 5, 6, 78, 8, 64, 5, 5];

// let sum = ashdjkja.reduce((a, b) => a + b);

// console.log(sum);

// let sum = ourClass.reduce((prev, curr) => (prev += +curr.age));
// console.log(sum);

// let ages = [];
// const ageFromObjects = ourClass.map((el) => {
//   ages.push(el.age);
// });
// console.log(ages);
// // console.log(ageFromObjects);
// let sum = ages.reduce((prev, curr) => prev + curr);
// console.log(sum / ages.length);

/// VAR LET CONST, https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/use-the-reduce-method-to-analyze-data
// spread operator

const watchList = [
  {
    Title: "Inception",
    Year: "2010",
    Rated: "PG-13",
    Released: "16 Jul 2010",
    Runtime: "148 min",
    Genre: "Action, Adventure, Crime",
    Director: "Christopher Nolan",
    Writer: "Christopher Nolan",
    Actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    Plot: "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    Language: "English, Japanese, French",
    Country: "USA, UK",
    Awards: "Won 4 Oscars. Another 143 wins & 198 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    Metascore: "74",
    imdbRating: "8.8",
    imdbVotes: "1,446,708",
    imdbID: "tt1375666",
    Type: "movie",
    Response: "True",
  },
  {
    Title: "Interstellar",
    Year: "2014",
    Rated: "PG-13",
    Released: "07 Nov 2014",
    Runtime: "169 min",
    Genre: "Adventure, Drama, Sci-Fi",
    Director: "Christopher Nolan",
    Writer: "Jonathan Nolan, Christopher Nolan",
    Actors: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    Plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    Language: "English",
    Country: "USA, UK",
    Awards: "Won 1 Oscar. Another 39 wins & 132 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    Metascore: "74",
    imdbRating: "8.6",
    imdbVotes: "910,366",
    imdbID: "tt0816692",
    Type: "movie",
    Response: "True",
  },
  {
    Title: "The Dark Knight",
    Year: "2008",
    Rated: "PG-13",
    Released: "18 Jul 2008",
    Runtime: "152 min",
    Genre: "Action, Adventure, Crime",
    Director: "Christopher Nolan",
    Writer:
      "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    Actors: "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    Plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    Language: "English, Mandarin",
    Country: "USA, UK",
    Awards: "Won 2 Oscars. Another 146 wins & 142 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    Metascore: "82",
    imdbRating: "9.0",
    imdbVotes: "1,652,832",
    imdbID: "tt0468569",
    Type: "movie",
    Response: "True",
  },
  {
    Title: "Batman Begins",
    Year: "2005",
    Rated: "PG-13",
    Released: "15 Jun 2005",
    Runtime: "140 min",
    Genre: "Action, Adventure",
    Director: "Christopher Nolan",
    Writer:
      "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    Actors: "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    Plot: "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    Language: "English, Urdu, Mandarin",
    Country: "USA, UK",
    Awards: "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    Metascore: "70",
    imdbRating: "8.3",
    imdbVotes: "972,584",
    imdbID: "tt0372784",
    Type: "movie",
    Response: "True",
  },
  {
    Title: "Avatar",
    Year: "2009",
    Rated: "PG-13",
    Released: "18 Dec 2009",
    Runtime: "162 min",
    Genre: "Action, Adventure, Fantasy",
    Director: "James Cameron",
    Writer: "James Cameron",
    Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    Plot: "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    Language: "English, Spanish",
    Country: "USA, UK",
    Awards: "Won 3 Oscars. Another 80 wins & 121 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    Metascore: "83",
    imdbRating: "7.9",
    imdbVotes: "876,575",
    imdbID: "tt0499549",
    Type: "movie",
    Response: "True",
  },
];

// const nolanMovies = watchList.filter(
//   (el) => el.Director === "Christopher Nolan"
// );
// console.log(nolanMovies);

// const nolanRatings = nolanMovies.map((el) => el.imdbRating);

// console.log(nolanRatings);

// const sum = nolanRatings.reduce(
//   (prev, curr) => +prev + +curr / nolanRatings.length
// );

const mockData = [1, 23, 5645, 767, 657, 455, 34543];
// console.log(sum);

// const customMovieFunction = (movieArray) => {
//   const filteredArray = movieArray.filter(
//     (el) => el.Director === "Christopher Nolan"
//   );
//   const mappedArray = filteredArray.map((el) => el.imdbRating);
//   const avarageRating = mappedArray.reduce(
//     (prev, curr) => +prev + +curr / mappedArray.length
//   );
//   return {
//     filteredArray,
//     mappedArray,
//     avarageRating,
//   };
// };

// console.log(customMovieFunction(watchList));
// const aldin = customMovieFunction(watchList);
// console.log(aldin.avarageRating);

// mockData.pop();

// const spreadArray = [...mockData];

// spreadArray.map((el) => ["nesto", ...el]);

// console.log(spreadArray);

// const mockObject = {
//   nesto: "aaaa",
//   sto: "drveni",
//   laptop: "aluminijum",
// };
// console.log(mockObject);
// const data = { ...mockObject, sto: "Maxi" };
// console.log(data);

// var, let ,const

// const a = 5;

// const nesto = function () {
//   console.log(a);
// };

// nesto();
// console.log(a);

// global scope
// const e = 10;
// function sum(a) {
//   return function (b) {
//     return function (c) {
//       return function (d) {
//         return a + b + c + d + e;
//       };
//     };
//   };
// }

// console.log(sum(1)(2)(3)(4)); // 20

// let name1 = "nerma";
// let name2 = "serkan";

// reversingNames(name1, "aldin");

// true || undefined;

// console.log(undefined || 3 == 3);

// console.log("33" * 3);

// function reversingNames(name1, name2) {
// for (let i = name2.length - 1; i >= 0; i--) {
//     if (name1[i]) console.log(name1[i], i);
//     console.log(name2[i], i);
// }
// }
// reversingNames("nerma", "aldinaaaaaaaaaaaaaaaaaaaa");




// 1. Zadatak
// const data1 = [2,26,38,75,11,29]
// const data2 = [4,6,5,10,33,52,75]
// let combined = data1.concat(data2)
// console.log(combined)
// combined.unshift(10,20)
// let parnib = combined.filter(number => number % 2 === 0)
// console.log(parnib)

// 2. Zadatak
// const number = [2,5,10,3,4,8]
// const powfunction = (array) => {
    // let pownm= array.map((el) => el*el)
// return pownm
// };
// console.log(powfunction(number))

// 3. Zadatak
// const numbers = [4,9,16,25,36] 
// Math.sqrt
// let sqnm= numbers.map((el) =>Math.sqrt (el));
// console.log(sqnm)

// 4. Zadatak
const numbers = [3,5,10,13,22,523,11,4,6,16,19]
const Function = (array) => {
    const newArray = array.map((el) => {
        if (el > 2 && el < 8){
        return(el *4/2);
        }else if (el > 2){
            return(el * 7);
        };
        
    });
    const newArray2 = array.filter((el) => el > 10);
    return (newArray,newArray2)
}
console.log(Function(numbers))