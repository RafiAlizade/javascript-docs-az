# Giriş

Bu hissədə JavaScriptin qoşulma üsulları, BOM və DOM haqqında, dəyişənlər haqqında, Hoisting məsələsi haqqında, data tipləri və if/else şərtləri haqqında yazılıb.

Bu hissələri oxuduqdan sonra mütləq şəkildə kodlara baxmağınızı tövisyyə edirəm.

## Scriptin qoşulma üsulları


Javascriptin 2 cür qoşulma üsulu vardır, External və Internal üsulları.

### External

External ``head`` və ya ``body`` taglarının arasında yazıla bilər. 

Əgər siz ``head`` daxilində yazırsınızsa async və ya defer olaraq yüklənmə və işə salma tipini seçməlisiniz.

``async`` (Asynchronous sözündən götürülüb) scriptin digər komponentlərlə birlikdə yüklənməsini təmin edir, yəni başqa bir scriptin və ya komponentin yüklənməsini gözləmir.

``defer`` scriptin digər komponentlərlə birlikdə yüklənməsini təmin edir ama digər scriptlər və komponentlər yükləndikdən sonra işə düşür.

``<script src="script.js" async></script>``  
``<script src="script.js" defer></script>``

### Internal

Internal ``head`` və ya ``body`` taglarının arasında yazıla bilər.

Əgər siz ``head`` daxilində yazırsınızsa səhifə yüklənərkən kod bloklarımızda işə düşəcəkdir, yəni səhifə yüklənərkən script işə düşəcək

Əgər siz ``body`` sonunda yazırsınızsa səhifənin böyük hissəsi yükləndikdən sonra script işə düşəcəkdir, yəni səhifə yüklənərkən işə düşməyəcəkdir və bu layihələrə görə dezavantaj ola bilər.



