# ⚡ Gün 2 - Giriş

Bu hissədə JavaScriptdə tiplərin çevrilməsi, stringlərin birləşdirilməsi, Operatorlar, Increment (artırma) və Decrement (azaltma), Condition statementlərdə switch/case , ternary operatorlar və Looplar haqqında yazılıb.

Bu hissələri oxuduqdan sonra mütləq şəkildə kodlara baxmağınızı tövisyyə edirəm.

> Kod sətirlərinə baxmaq üçün index bölümünə baxın

## 🔹 Tiplərin çevrilməsi

### 🗂️ Number tipdən stringə tipə çevirmə

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
```

### 🗂️ String tipdən number tipə çevirmə

Biz JavaScriptdə **number tipləri və boolean tipləri string tiplərə çevirə bilərik və ya əksinə**

```javascript

let numberExample = 1234;
let booleanExample = true;

Numberlərin çevrilməsi

console.log(numberExample.toString())
// Konsolda görünən : 1234
console.log(typeof numberExample.toString())
// Konsolda görünən : String

Booleanların çevrilməsi

console.log(booleanExample.toString())
// Konsolda görünən : true
console.log(typeof booleanExample.toString())
// Konsolda görünən : String
```
### 🗂️ Boolean tipdən number tipə çevirmə

Biz JavaScriptdə **boolean tipləri number tiplərə çevirə bilərik və ya əksinə**

- true : 1
- false : 0

JavaScriptdə və proqramlaşdırmada true çox zaman 1 olaraq, false isə 0 olaraq işarələnir.


```javascript
let boolExample = true;
let boolExample2 = false;

console.log(Number(boolExample))
// Konsolda görünən : 1
console.log(Number(boolExample2))
// Konsolda görünən : 0

Tipləri isə default olaraq number olacaq.
```

## 🔹 Concat (birləşirmə)

Biz JavaScriptdə **concat** üsullarından geniş istifadə edirik, bu üsul çox zaman obyektlərdən key vasitəsilə alınan dataları mesajlarda birləşdirmək və s. üçün istifadə olunur. Concat sözünün mənası JavaScriptdə birləşdirmə deməkdir.

```javascript

let concatExample1 = 'Salam'
let concatExample2 = 'Mən'
let concatExample3 = 'JavaScript öyrənirəm'

let concatString = `${concatExample1} ${concatExample2} ${concatExample3}`

console.log(concatString)

// Konsolda görünən : Salam Mən JavaScript öyrənirəm
```






