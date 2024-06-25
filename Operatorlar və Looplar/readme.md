# ⚡ Gün 2 - Giriş

Bu hissədə JavaScriptdə tiplərin çevrilməsi, stringlərin birləşdirilməsi, Operatorlar, Increment (artırma) və Decrement (azaltma), Condition statementlərdə switch/case , ternary operatorlar və Looplar haqqında yazılıb.

Bu hissələri oxuduqdan sonra mütləq şəkildə kodlara baxmağınızı tövisyyə edirəm.

> Kod sətirlərinə baxmaq üçün index bölümünə baxın

## 🔹 Tiplərin çevrilməsi

Number tipləri 2 cür mövcüddur;
- Integer (tam ədədlər) - 1, 2, 3, 4 və s.
- Float (kəsr ədədləri) - 1.4785 , 1.748 və s.

Biz JavaScriptdə **number tipləri string tiplərə çevirə bilərik və ya əksinə**


```javascript

Stringdən number tipə çevirmə

let numberString = '20'

console.log(numberString) 
// Konsolda görünən : 20 
console.log(typeof numberString) 
// Konsolda görünən : String

- Üsul 1


let stringtoNumber = parseInt(numberString)

console.log(stringtoNumber)
// Konsolda görünən : 20

console.log(typeof stringtoNumber)
// Konsolda görünən : Number

- Üsul 2

let stringtoNumber2 = parseFloat(numberString)

console.log(stringtoNumber2)
// Konsolda görünən : 20

console.log(typeof stringtoNumber2)
// Konsolda görünən : Number

- Üsul 3

let stringtoNumber3 = Number(numberString)

console.log(stringtoNumber3)
// Konsolda görünən : 20

console.log(typeof stringtoNumber3)
// Konsolda görünən : Number

- Üsul 4

Bu üsulda sadəcə stringin adını yazıb qarşısına + işarəsi qoyuruq

console.log(+numberString)
// Konsolda görünən : 20

console.log(typeof +numberString)
// Konsolda görünən: Number