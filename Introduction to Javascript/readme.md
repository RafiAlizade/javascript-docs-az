# ⚡ Giriş

Bu hissədə JavaScriptin qoşulma üsulları, BOM və DOM haqqında, dəyişənlər haqqında, Hoisting məsələsi haqqında, data tipləri və if/else şərtləri haqqında yazılıb.

Bu hissələri oxuduqdan sonra mütləq şəkildə kodlara baxmağınızı tövisyyə edirəm.

> Kod sətirlərinə baxmaq üçün index bölümünə baxın

## 🔹 Scriptin qoşulma üsulları

Javascriptin 2 cür qoşulma üsulu vardır, External və Internal üsulları.

### 🗂️ External

External **head** və ya **body** taglarının arasında yazıla bilər.

Əgər siz **head** daxilində yazırsınızsa async və ya defer olaraq yüklənmə və işə salma tipini seçməlisiniz.

**async** (Asynchronous sözündən götürülüb) scriptin digər komponentlərlə birlikdə yüklənməsini təmin edir, yəni başqa bir scriptin və ya komponentin yüklənməsini gözləmir.

**defer** scriptin digər komponentlərlə birlikdə yüklənməsini təmin edir ama digər scriptlər və komponentlər yükləndikdən sonra işə düşür.

`<script src="script.js" async></script>`  
`<script src="script.js" defer></script>`

### 🗂️ Internal

Internal **head** və ya **body** taglarının arasında yazıla bilər.

Əgər siz **head** daxilində yazırsınızsa səhifə yüklənərkən kod bloklarımızda işə düşəcəkdir, yəni səhifə yüklənərkən script işə düşəcək

Əgər siz **body** sonunda yazırsınızsa səhifənin böyük hissəsi yükləndikdən sonra script işə düşəcəkdir, yəni səhifə yüklənərkən işə düşməyəcəkdir və bu layihələrə görə dezavantaj ola bilər.





## 🔹 BOM və DOM 

BOM - Browser Object Model, web səhifəsiylə qarşılıqlı əlaqə yaratmaq üçün istifadə olunan obyekt modelidir.
DOM - Document Object Model web səhifəsinin məzmununu və quruluşunu təmsil edən bir proqram interfeysidir.

### 🗂️ BOM örnəkləri 

console.log('Bu bir BOM nümunəsidir, default log tipidir.')
console.warn('Bu bir BOM nümunəsidir, log zamanı xəbərdarlıq tipli gəlir')
console.error('Bu bir BOM nümunəsidir, log zamanı error tipli gəlir')

### 🗂️ DOM örnəkləri

DOM örnəkləri üçün tez olsa da sizin üçün kiçik bir örnək yazıram

Aşağıdaki nümunədə changeColor-a click edəndə header1-in arxaplan rənginin dəyişməsini təmin edirik, Javascript ilə Document daxilindəki taglara və s. təsir edirik

```javascript
let header1 = document.querySelector('h1')
let changeColor = document.querySelector('button')

changeColor.addEventListener('click', function(e) {
    header1.style.backgroundColor = 'red';
})
```

## 🔹 Dəyişənlər (Variables)

Hal-hazırda JavaScriptdə 3 dəyişən mövcüddur, bunlara 

- var
- let
- const

aitdir.

Dəyişənləri adlandırdıqdan sonra onları stringlərə, obyektlərə, arraylara və s. təyin etmək olar

```javascript
var message = 'bu bir mesajdır'
let message = 'bu bir mesajdır'
const message = 'bu bir mesajdır'  
```

**var** və **let, const** arasındaki başlıca fərqlərdən biri onların yaddaşda tutduğu yerdir, **var** 8 bitlik bir tutuma malikdir ama **let və const** 1 bit tutuma malik olduğu üçün let və const istifadəsi daha çoxdur.

**const** təyin edildikdən sonra dəyişdirilə bilməz

## 🔹 Hoisting məsələsi

Hoisting deyildikdə JavaScriptdə kod ardıcıllığı nəzərdə tutulur, HTML və CSS-də olduğu kimi burda da sətirlərə görə fərqlər yarana bilər, aşağıda Hoisting məsələsinə uyğun bir nümunə tapa bilərsiniz.

```javascript
var a;
console.log(a);
// Konsolda görünən : undefined
a = 'Hoisting '
console.log(a);
// Konsolda görünən : Hoisting
```

Yuxarıda gördüyünüz kimi əvvəlcədən a-ya heç bir şey təyin etmədiyimiz üçün **undefined** olaraq görünür lakin sonradan string təyin etdiyimiz üçün yazdığımız yazı konsolda görünür.

var və let-də sonradan string və s. təyin edib **console.log** etdikdə görünür lakin const-da sonradan string və s. təyin etsək görünməyəcək.

Nəticə olaraq ona deyə bilərik ki, **var** və **let**'də hoisting məsələləri uyğunlaşdırıla bilər ama constda deyil. 

JavaScriptdə çox zaman dəyişənlər yuxarıdaki nümunə kimi təyin edilmir, əvvəlcədən təyin edilir və dəyişdirilə bilir.

```javascript
let searchedParams = '123'
let numbersAll = [1, 2, 3, 4, 5]
let studentDegree = 90;
```

## 🔹 JavaScriptdə dəyişənlərin adlandırılması

- Dəyişən adları [rezerv edilmiş sözlər](https://www.w3schools.com/js/js_reserved.asp) ola bilməz
```javascript
❌ let in = 'reserved'
```

- Dəyişən adlarında boşluq qoyula bilməz
```javascript
❌ let welcome Message = 'salam'
```

- Dəyişən adları hərf, alt xətt (_) və ya dollar işarəsi ($) ilə başlamalıdır.
```javascript
✔️ let message = 'This is my message'
✔️ let _message = 'This is my message'
✔️ let $message = 'This is my message'
```

- Dəyişən adları təyin edərkən camelCase-dən istifadə etmək

```javascript
✔️ var studentList = ["Rafi", "Alimdar", "Ayxan", ]
✔️ var totalPrice = 50
✔️ var firstName = 'Rafi'
```

## 🔹 JavaScriptdə data tipləri

JavaScriptdə 2 cür data tipi mövcüddur.

### 🗂️ Primitive tiplər

- String
- Number
- Bigint
- Undefined 
- Null
- Boolean (true/false)
- Symbol

```javascript
String tipi

let str = 'this is a string'
let userName = 'rafializade'

// Stringlərin birləşdirilməsi

let mergedText = `${str} ${username} `

console.log(mergedText);

// Konsolda görünən : this is a string rafializade

Number tipi 

let numberExample = '12345'
let numberExample2 = 1234

console.log(typeof numberExample);
// Konsolda görünən - string  , typeof vasitəsilə biz dəyişənin tipini müəyyən edə bilirik
console.log(typeof numberExample2); 
// Konsolda görünən - number , typeof vasitəsilə biz dəyişənin tipini müəyyən edə bilirik

Bigint tipi

let bigintExample = 123234562345672345632456
console.log(typeof bigintExample);
// Konsolda görünən - bigint , typeof vasitəsilə biz dəyişənin tipini müəyyən edə bilirik

Undefined tipi

let undefinedExample = undefined
console.log(typeof undefinedExample);
// Konsolda görünən - undefinedExample , typeof vasitəsilə biz dəyişənin tipini müəyyən edə bilirik

Null tipi

let nullExample = null
console.log(typeof nullExample);
// Konsolda görünən - null , typeof vasitəsilə biz dəyişənin tipini müəyyən edə bilirik

Boolean tipi

let isStudent = false
console.log(isStudent);
// Konsolda görünən - false , typeof vasitəsilə biz dəyişənin tipini müəyyən edə bilirik
console.log(typeof isStudent);
// Konsolda görünən - boolean , typeof vasitəsilə biz dəyişənin tipini müəyyən edə bilirik

Symbol tipi

let symbolExample = Symbol(undefined)
console.log(symbolExample);
// Konsolda görünən - Symbol() , typeof vasitəsilə biz dəyişənin tipini müəyyən edə bilirik
console.log(typeof symbolExample);
// Konsolda görünən - symbol , typeof vasitəsilə biz dəyişənin tipini müəyyən edə bilirik
```

### 🗂️ Reference tiplər

- Objects
- Function
- Array

> Bu dərslikdə qısa məlumat verəcəyəm, bu mövzular haqqında məlumatları gələcək dərslərdə öyrənəcəksiniz

```javascript

Objects tipi

let objectsExample = {
    id: 1,
    name: "rafi",
    surname: "alizade",
    isStudent: true
}

Array tipi

let arrayExample = ["1", "2", "3", "4", "5"]

Function tipi

function getData() {
    arrayExample.forEach((numbers) => console.log(numbers))
}
```

## 🔹 İstifadəçidən məlumat almaq 

İstifadəçidən məlumat almaq üçün **prompt** və ya **confirm**'dən istifadə edə bilərik.

```javascript

Prompt vasitəsilə istifadəçidən data almaq

let getUsername = prompt('Enter your username')

İstifadəçi prompta adını daxil etsə (məsələn 'rafializade') konsolda şəxsin yazdığı string olaraq konsola gələcək, şəxs sadəcə number daxil etsə belə bizə string olaraq gələcək

console.log(getUsername);

// Konsolda görünən : rafializade



```
