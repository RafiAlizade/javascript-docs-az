// ! DOM nümunəsi

let header1 = document.querySelector('h1')
let changeColor = document.querySelector('button')

changeColor.addEventListener('click', function(e) {
    header1.style.backgroundColor = 'red';
})