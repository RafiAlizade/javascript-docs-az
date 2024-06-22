# ⚡ Giriş

Bu hissədə JavaScriptin qoşulma üsulları, BOM və DOM haqqında, dəyişənlər haqqında, Hoisting məsələsi haqqında, data tipləri və if/else şərtləri haqqında yazılıb.

Bu hissələri oxuduqdan sonra mütləq şəkildə kodlara baxmağınızı tövisyyə edirəm.

> Kod sətirlərinə baxmaq üçün index bölümünə baxın

## 🔹 Scriptin qoşulma üsulları

Javascriptin 2 cür qoşulma üsulu vardır, External və Internal üsulları.

### 🗂️ External

External `head` və ya `body` taglarının arasında yazıla bilər.

Əgər siz `head` daxilində yazırsınızsa async və ya defer olaraq yüklənmə və işə salma tipini seçməlisiniz.

`async` (Asynchronous sözündən götürülüb) scriptin digər komponentlərlə birlikdə yüklənməsini təmin edir, yəni başqa bir scriptin və ya komponentin yüklənməsini gözləmir.

`defer` scriptin digər komponentlərlə birlikdə yüklənməsini təmin edir ama digər scriptlər və komponentlər yükləndikdən sonra işə düşür.

`<script src="script.js" async></script>`  
`<script src="script.js" defer></script>`

### 🗂️ Internal

Internal `head` və ya `body` taglarının arasında yazıla bilər.

Əgər siz `head` daxilində yazırsınızsa səhifə yüklənərkən kod bloklarımızda işə düşəcəkdir, yəni səhifə yüklənərkən script işə düşəcək

Əgər siz `body` sonunda yazırsınızsa səhifənin böyük hissəsi yükləndikdən sonra script işə düşəcəkdir, yəni səhifə yüklənərkən işə düşməyəcəkdir və bu layihələrə görə dezavantaj ola bilər.





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