## Bölüm 1

Bu hissədə JavaScriptin qoşulma üsulları, BOM və DOM haqqında, dəyişənlər haqqında, Hoisting məsələsi haqqında, data tipləri və if/else şərtləri haqqında yazılıb.

Javascriptin 2 cür qoşulma üsulu vardır, External və Internal üsulları.

External ``head`` və ya ``body`` taglarının arasında yazıla bilər. 

Əgər siz ``head`` daxilində yazırsınızsa async və ya defer olaraq yüklənmə və işə salma tipini seçməlisiniz.

``async`` (Asynchronous sözündən götürülüb) scriptin digər komponentlərlə birlikdə yüklənməsini təmin edir, yəni başqa bir scriptin və ya komponentin yüklənməsini gözləmir.

``defer`` scriptin digər komponentlərlə birlikdə yüklənməsini təmin edir ama digər scriptlər və komponentlər yükləndikdən sonra işə düşür.

``<script src="script.js" async></script>``  
``<script src="script.js" defer></script>``