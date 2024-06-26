// ! DOM nümunəsi

let header1 = document.querySelector('h1')
let changeColor = document.querySelector('button')

changeColor.addEventListener('click', function(e) {
    header1.style.backgroundColor = 'red';
})

// ! Dəyişənlər

var message1 = 'bu bir mesajdır'
let message2 = 'bu bir mesajdır'
const message3 = 'bu bir mesajdır'

console.log(message1); 
// Konsola görünəcək : bu bir mesajdır ; digərlərinində adını daxil etsəniz təyin ediyiniz string(mesaj) görünəcək

// Siz aşağıdaki kimidə dəyişənə hərhansı bir dəyər verə bilərsiniz, bunun adı Declaration adlanır, sonradan təyin edilən dəyərsə İnitialization adlanır.

let messageExample;
messageExample = 'bu declarationa aid mesajıdr'

console.log(messageExample);

// Konsolda görünəcək : bu declarationa aid mesajıdr ; gördüyünüz kimi burada sonradan dəyişən təyin etdikdə yazı konsolda görünür, declaration sadəcə const-da çalışmır

// ! Hoisting məsələləri

var a;
console.log(a);
// Konsolda görünəcək : undefined
a = 'salam'
console.log(a);
// Konsolda görünəcək : 'salam'


// ! Data tipləri

// Primitive tiplər

// ! String tipi

let str = 'this is a string'
let userName = 'rafializade'

// Stringlərin birləşdirilməsi

let mergedText = `${str} ${userName}`

console.log(mergedText);


// ! Number tipi

let numberExample = '12345'
let numberExample2 = 1234

console.log(typeof numberExample);
// Konsolda görünən - string  , typeof vasitəsilə biz dəyişənin tipini müəyyən edə bilirik
console.log(typeof numberExample2); 
// Konsolda görünən - number , typeof vasitəsilə biz dəyişənin tipini müəyyən edə bilirik

// ! Bigint tipi

let bigintexam = 123234562345672345632456n
console.log(typeof bigintexam);
// Konsolda görünən - bigint , typeof vasitəsilə biz dəyişənin tipini müəyyən edə bilirik

// ! Undefined tipi

let undefinedExample = undefined
console.log(typeof undefinedExample);
// Konsolda görünən - undefined , typeof vasitəsilə biz dəyişənin tipini müəyyən edə bilirik

// ! Null tipi

let nullExample = null
console.log(typeof nullExample);
// Konsolda görünən - null , typeof vasitəsilə biz dəyişənin tipini müəyyən edə bilirik

// ! Boolean tipi

let booleanExample = false
console.log(booleanExample);
// Konsolda görünən - false , typeof vasitəsilə biz dəyişənin tipini müəyyən edə bilirik
console.log(typeof booleanExample);
// Konsolda görünən - boolean , typeof vasitəsilə biz dəyişənin tipini müəyyən edə bilirik

// ! Symbol tipi

let symbolExample = Symbol(undefined)
console.log(symbolExample);
// Konsolda görünən - Symbol() , typeof vasitəsilə biz dəyişənin tipini müəyyən edə bilirik
console.log(typeof symbolExample);
// Konsolda görünən - symbol , typeof vasitəsilə biz dəyişənin tipini müəyyən edə bilirik


// Reference tiplər

// ! Objects tipi

let objectsExample = {
    id: 1,
    name: "rafi",
    surname: "alizade",
    isStudent: true
}

console.log(objectsExample);

// Konsolda görünən : {id: 1, name: 'rafi', surname: 'alizade', isStudent: true}

// ! Array tipi

let arrayExample = ["1", "2", "3", "4", "5"]
console.log(arrayExample);

// Konsolda görünən : (5) ['1', '2', '3', '4', '5']

// ! Function tipi

function getData() {
    arrayExample.forEach((numbers) => console.log(numbers))
}

getData()

// Konsolda görünən : 1 2 3 4 5 

// ! İstifadəçidən məlumat almaq

// ! Prompt vasitəsilə

// let getUsername = prompt('Enter your username')

// İstifadəçi prompta adını daxil etsə (məsələn 'rafializade') konsolda şəxsin yazdığı string olaraq konsola gələcək

// console.log(getUsername);

// Konsolda görünən : rafializade

// ! Alert vasitəsilə

// let getuserAgree = confirm('Qəbul edirsiniz?')

// İstifadəçi confirmdə "Bəli" və ya "Xeyr" seçərsə onun seçimini siz confirm vasitəsilə əldə edə bilərsiniz

// console.log(getuserAgree); 

// İstifadəçi xeyr seçərsə konsolda görünən : false
// İstifadəçi bəli seçərsə konsolda görünən : false

// ! Conditional statements

// let age = 12;

// if (age <= 12) {
//     console.log('Sizin yaşınız 12-dən kiçikdir ')
// } else {
//     console.log('Sizin yaşınız 12-dən böyükdür ')
// }

// ! Conditional statements operators

// AND operator

// let isStudent = confirm('Siz tələbisiniz?')
// let gpaScore = prompt('Ortalama balınızı daxil edin?')

// if (isStudent && gpaScore >= 91) {
//     console.log('Your degree is A')
// } else if (isStudent && gpaScore >= 81) {
//     console.log('Your degree is B')
// } else {
//     console.log('You have not permission to continue')
// }

// OR operator

let isStudent = confirm('Siz tələbisiniz?')
let gpaScore = prompt('Ortalama balınızı daxil edin?')

if (isStudent || gpaScore >= 91) {
    console.log('Your degree is A')
} else if (isStudent || gpaScore >= 81) {
    console.log('Your degree is B')
} else {
    console.log('You have not permission to continue')
}