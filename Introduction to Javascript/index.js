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