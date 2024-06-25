// ! Stringdən Numberə çevirmə

// Üsul 1

let numberString = '20'

console.log(numberString) 
// Konsolda görünən : 20 
console.log(typeof numberString) 
// Konsolda görünən : String

let stringtoNumber = parseInt(numberString)

console.log(stringtoNumber)
// Konsolda görünən : 20

console.log(typeof stringtoNumber)
// Konsolda görünən : Number

// Üsul 2

let stringtoNumber2 = parseFloat(numberString)

console.log(stringtoNumber2)
// Konsolda görünən : 20

console.log(typeof stringtoNumber2)
// Konsolda görünən : Number

// Üsul 3

let stringtoNumber3 = Number(numberString)

console.log(stringtoNumber3)
// Konsolda görünən : 20

console.log(typeof stringtoNumber3)
// Konsolda görünən : Number

// Üsul 4 

// Bu üsulda sadəcə stringin adını yazıb qarşısına + işarəsi qoyuruq

console.log(+numberString)
// Konsolda görünən : 20

console.log(typeof +numberString)
// Konsolda görünən: Number

// ! Number və booleandan stringə çevirmə

let numberExample = 1234;
let booleanExample = true;

console.log(numberExample.toString())
// Konsolda görünən : 1234
console.log(typeof numberExample.toString())
// Konsolda görünən : String

// Booleanların çevrilməsi

console.log(booleanExample.toString())
// Konsolda görünən : true
console.log(typeof booleanExample.toString())
// Konsolda görünən : String

// ! Boolean tipdən number tipə çevirmə

let boolExample = true;
let boolExample2 = false;

console.log(Number(boolExample))
// Konsolda görünən : 1
console.log(Number(boolExample2))
// Konsolda görünən : 0