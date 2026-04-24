export interface Character {
  name: string;
  role: string;
  description: string;
}

export interface Book {
  title: string;
  author: string;
  year: string;
  genre: string;
  description: string;
  fullAnalysis: string;
  themes: { title: string; explanation: string }[];
  characters: Character[];
  plotSummary: string;
  impact: string;
}

export const booksData: { books: Book[] } = {
  "books": [
    {
      "title": "O'tkan kunlar",
      "author": "Abdulla Qodiriy",
      "year": "1922-yil",
      "genre": "Tarixiy roman",
      "description": "O'zbek adabiyotining ilk romani, sevgi va xiyonat, urf-odat va turg'unlik haqidagi buyuk asar.",
      "fullAnalysis": "Qodiriyning ushbu romani o'zbek nasrining cho'qqisidir. Otabek va Kumushning pokiza muhabbati fonida XIX asrdagi Turkistonning ijtimoiy-siyosiy inqirozi, xonliklar o'rtasidagi nizo va turg'un jamiyat fojiyasi tasvirlangan. Asarning tili shunchalik boy va shiraliki, har bir sahifada o'zbekona ruh nafas oladi.",
      "plotSummary": "Roman Marg'ilonlik savdogar Otabek va Kumushbibining uchrashuvi va bir-biriga bo'lgan muhabbati bilan boshlanadi. Biroq, bu yo'lda ularni ko'plab to'siqlar kutib turadi. Otabekning Toshkentdagi xotini Zaynab bilan bo'lgan munosabatlari, Kumushga qarshi uyushtirilgan fitnalar va oxir-oqibat Kumushning zaharlanib o'lishi asarning markaziy fojeasidir. Voqealar Turkistondagi turg'unlik, xonliklararo nizolar va milliy o'zlikni anglash masalalari bilan chambarchas bog'liq.",
      "themes": [
        { "title": "Muhabbat va Sadoqat", "explanation": "Otabek va Kumushning sevgisi orqali insoniy tuyg'ularning eng yuksak namunasi ko'rsatiladi." },
        { "title": "Ijtimoiy Tanqid", "explanation": "Asar XIX asrdagi Turkiston jamiyatidagi fanatizm, turg'unlik va xonliklarning mishiqiyligini tanqid qiladi." },
        { "title": "Oilaviy Majburiyatlar", "explanation": "Zaynab va Kumush o'rtasidagi ziddiyat o'sha davrning kundoshlik va majburiy nikoh muammolarini aks ettiradi." }
      ],
      "characters": [
        { "name": "Otabek", "role": "Bosh qahramon", "description": "Ma'rifatli, mard va sevgi yo'lida sobit turuvchi yigit." },
        { "name": "Kumush", "role": "Bosh qahramon", "description": "Gidoyatda go'zal, aqlli va vafodor o'zbek ayoli timsoli." },
        { "name": "Zaynab", "role": "Antagonist", "description": "Otabekning ikkinchi xotini, rashk va nafrat tufayli fojia keltirib chiqaradi." },
        { "name": "Yusufbek hoji", "role": "Otabekning otasi", "description": "Davlat arbobi, adolatli va dono inson." }
      ],
      "impact": "Ushbu roman o'zbek adabiyotida realistik nasrga asos soldi. Milliy o'zlikni anglash va millat taqdiri haqida qayg'urish uchun turtki bo'ldi."
    },
    {
      "title": "Kecha va kunduz",
      "author": "Cho'lpon",
      "year": "1936-yil",
      "genre": "Roman",
      "description": "O'zbek milliy uyg'onishi va istibdodga qarshi kurashning badiiy ifodasi.",
      "fullAnalysis": "Cho'lpon ushbu asarida Turkiston xalqining erk va ozodlik uchun intilishlarini, turg'unlikdagi jamiyatning fojealarini masterlik bilan tasvirlagan. Zebi obrazi orqali o'zbek ayolining o'sha davrdagi qismati va ojizligi ochib berilgan.",
      "plotSummary": "Kecha qismida Turkistonning istibdod ostidagi qorong'u hayoti, amaldorlarning chirigan dunyoqarashi va xalqning jaholati tasvirlangan. Bosh qahramon Zebi Miryoqubning makkorligi tufayli Mingboshiga xotin bo'ladi va o'z baxtidan mahrum bo'ladi. Kunduz qismi (yozilmagan yoki yo'qolgan) milliy uyg'onishni aks ettirishi kerak edi.",
      "themes": [
        { "title": "Ozodlik va Istibdod", "explanation": "Xalqning mustaqillikka intilishi va uni bo'g'ib turgan kuchlar o'rtasidagi kurash." },
        { "title": "Ayol huquqlari", "explanation": "Zebi taqdiri orqali ayollarning jamiyatdagi og'ir va erksiz ahvoli ko'rsatilgan." },
        { "title": "Xoinlik va Sadoqat", "explanation": "Miryoqub obrazi orqali o'z manfaatini hamma narsadan ustun qo'yuvchi insonlar tabiati ochib berilgan." }
      ],
      "characters": [
        { "name": "Zebi", "role": "Bosh qahramon", "description": "Beg'ubor, ammo taqdirning qattiq sinovlariga uchragan qiz." },
        { "name": "Miryoqub", "role": "Antagonist/Murakkab obraz", "description": "Makkor, aqlli, ammo keyinchalik o'zgarib boruvchi shaxs." },
        { "name": "Akbarali Mingboshi", "role": "Amaldor", "description": "Nodon va nafsiga berilgan boshqaruvchi vakili." }
      ],
      "impact": "Cho'lponning bu asari jadid adabiyotining eng yirik namunasi bo'lib, o'zbek romanistikasini yangi bosqichga ko'tardi."
    },
    {
      "title": "Ikki eshik orasi",
      "author": "O'tkir Hoshimov",
      "year": "1986-yil",
      "genre": "Roman",
      "description": "Urush yillarining ayanchli oqibatlari va insonlar o'rtasidagi murakkab rishtalar.",
      "fullAnalysis": "Asar bir necha qahramonlar tilidan hikoya qilinadi, bu esa voqealarga turli burchaklardan qarash imkonini beradi. Urushning beva-bechoralar taqdiridagi achchiq izi, or-nomus va sevgi mavzulari gihoyatda mahorat bilan chizilgan.",
      "plotSummary": "Roman turli davrlarni: urushdan oldin, urush yillari va undan keyingi hayotni qamrab oladi. Kimsan, Ra'no, Shomurod kabi qahramonlarning taqdirlari shunchalik chigal bo'lib ketganki, u inson umrini — ikki eshik (tug'ilish va o'lim) orasidagi masofaga o'xshatadi.",
      "themes": [
        { "title": "Urushning Insoniylikka Ta'siri", "explanation": "Urush nafaqat maydonda, balki odamlar qalbida qanday fojialar keltirishi." },
        { "title": "Insoniy Murakkablik", "explanation": "Hech bir odam mutloq yaxshi yoki yomon emasligi asarning bosh g'oyasidir." },
        { "title": "Taqdir va Sinov", "explanation": "Har bir qahramon hayotning eng og'ir damlarida o'z vijdonini qanday saqlab qolishi." }
      ],
      "characters": [
        { "name": "Kimsan", "role": "Qahramon", "description": "Urushda halok bo'lgan, ammo xotiralarda yashaydigan fidoyi yigit." },
        { "name": "Ra'no", "role": "Bosh qahramon", "description": "Sabrli, sadoqatli, hayotning barcha qiyinchiliklarini yengib o'tgan ona." },
        { "name": "Shomurod", "role": "Ziddiyatli obraz", "description": "Xatolari va azoblari bilan o'quvchiga tanish bo'lgan inson." }
      ],
      "impact": "Ushbu asar urush mavzusidagi o'zbek adabiyotining eng samimiy va psixologik romanidir."
    },
    {
      "title": "Ulug'bek xazinasi",
      "author": "Odil Yoqubov",
      "year": "1973-yil",
      "genre": "Tarixiy roman",
      "description": "Mirzo Ulug'bek hayoti va uning ilm yo'lidagi fojiali taqdiri.",
      "fullAnalysis": "Buyuk olim va shoh Ulug'bekning astronomiya sohasidagi kashfiyotlari, o'g'li Abdullatif bilan bo'lgan ziddiyatli munosabatlari va jaholat qurboni bo'lishi juda ta'sirli yoritilgan. Asar ilmning yengilmasligi haqidagi manifestdir.",
      "plotSummary": "Mirzo Ulug'bek o'zining butun umrini ilm-fanga, rasadxona qurishga bag'ishlaydi. Biroq, bu yo'lda u diniy mutaassiblar va o'z o'g'li Abdullatifning qarshiligiga uchraydi. Oxir-oqibat, ota va o'g'il o'rtasidagi so'nggi uchrashuv va fojiali o'lim asarning kulminatsiyasidir.",
      "themes": [
        { "title": "Ilm va Jaholat", "explanation": "Rivojlanishga intiluvchi olim va turg'unlik tarafdori bo'lgan jaholat vakillari kurashi." },
        { "title": "Ota va O'g'il Ziddiyati", "explanation": "Siyosiy hokimiyat va insoniy rishtalarning bir-biriga qarshi qo'yilishi." },
        { "title": "Tarixiy Sharaf", "explanation": "Ajodlarimizning fojiali bo'lsa-da, g'ururli hayot yo'li." }
      ],
      "characters": [
        { "name": "Mirzo Ulug'bek", "role": "Bosh qahramon", "description": "Shoh va olim, ma'naviyatning oliy darajasi." },
        { "name": "Abdullatif", "role": "Antagonist", "description": "Ulug'bekning o'g'li, tajovuzkor va hokimiyatga tashna." },
        { "name": "Ali Qushchi", "role": "Sadoqatli shogird", "description": "Ustozining merosini saqlab qolish uchun intiluvchi olim." }
      ],
      "impact": "Asar o'zbek kitobxonida tarixiy shaxsga bo'lgan hurmatni oshirishda va ilm-fanning ahamiyatini tushunishda katta rol o'ynadi."
    },
    {
      "title": "Sariq devni minib",
      "author": "Xudoyberdi To'xtaboyev",
      "year": "1968-yil",
      "genre": "Sarguzasht, fantastika",
      "description": "Xushchaqchaq Hoshimjonning sehrli shlyapa yordamida qilgan g'aroyib va kulgili sarguzashtlari.",
      "fullAnalysis": "Bu asar nafaqat sarguzasht, balki bolalar ruhiyatini eng chuqur o'rgangan darslikdir. Hoshimjonning dangasaligi va keyinchalik o'z xatolarini anglashi tarbiyaviy ahamiyatga ega.",
      "plotSummary": "Dangasa Hoshimjon sehrli shlyapa topib oladi. U shlyapa yordamida turli g'aroyib ishlarni amalga oshiradi, biroq oxir-oqibat bilim va mehnatning ahamiyatini tushunib yetadi.",
      "themes": [
        { "title": "Mehnat va Ilm", "explanation": "Sehr-jodu emas, faqat o'qish va mehnat orqali haqiqiy muvaffaqiyatga erishish mumkinligi." },
        { "title": "Bolalik Beg'uborligi", "explanation": "Hoshimjonning sho'xliklari orqali bolalar ruhiyati yoritiladi." }
      ],
      "characters": [
        { "name": "Hoshimjon", "role": "Bosh qahramon", "description": "Xushchaqchaq, dangasa, ammo o'z xatolaridan xulosa chiqaruvchi bola." },
        { "name": "Donoyev", "role": "O'qituvchi", "description": "Bolalarga yo'l-yo'riq ko'rsatuvchi ma'rifatli ustoz." }
      ],
      "impact": "O'zbek bolalar adabiyotida yangi janr — sarguzasht-fantastikani ommalashtirdi."
    },
    {
      "title": "Shum bola",
      "author": "G'afur G'ulom",
      "year": "1936-yil",
      "genre": "Qissa",
      "description": "Hayotning achchiq sarguzashtlarini hazil-mutoyiba bilan yengib o'tuvchi bolaning qismati.",
      "fullAnalysis": "G'afur G'ulom ushbu asarida o'zbek xalqining hayoti, urf-odatlari va o'sha davrdagi ijtimoiy qiyinchiliklarni Shum bola sarguzashtlari orqali hazil-mutoyiba bilan tasvirlab bergan.",
      "plotSummary": "Uyi tashlab ketgan bolaning turli joylarda sarguzashtlar boshdan kechirishi. U turli xil odamlarga duch keladi va hayot maktabini o'rganadi.",
      "themes": [
        { "title": "Hayot va Tirikchilik", "explanation": "Qiyinchiliklar fonida insonning yashab qolish uchun intilishi." },
        { "title": "Xalqona Humor", "explanation": "O'zbek xalqining eng og'ir vaziyatlardan ham kulgi topa olishi." }
      ],
      "characters": [
        { "name": "Shum bola", "role": "Bosh qahramon", "description": "Pishiq, uddaburon va har qanday vaziyatdan chiqib ketuvchi bola." },
        { "name": "Omon", "role": "Do'st", "description": "Shum bolaning sargardonlikdagi sherigi." }
      ],
      "impact": "O'zbek adabiyotida yumoristik va xalqchil nasrning yuksak namunasi hisoblanadi."
    },
    {
      "title": "Dunyoning ishlari",
      "author": "O'tkir Hoshimov",
      "year": "1982-yil",
      "genre": "Qissa",
      "description": "Ona siymosi va mehriga bag'ishlangan eng samimiy, qalblarni titratuvchi asar.",
      "fullAnalysis": "Bu asar yozuvchining onasiga bo'lgan cheksiz muhabbati natijasidir. Har bir hikoyada o'zbek onalarining sabr-bardoshi, sadoqati va fidoiyligi ufurib turadi.",
      "plotSummary": "Bir-biriga bog'liq hikoyalar orqali yozuvchining bolaligi, onasining turli vaziyatlardagi xatti-harakatlari va hayotning kutilmagan zarbalari tasvirlanadi.",
      "themes": [
        { "title": "Onaga Muhabbat", "explanation": "Dunyodagi eng muqaddas zot — ona poyiga qo'yilgan ma'naviy haykal." },
        { "title": "Insoniy Qadr", "explanation": "Oddiy odamlarning buyuk qalbi haqidagi mulohazalar." }
      ],
      "characters": [
        { "name": "Ona", "role": "Bosh siymo", "description": "Sabrli, mehribon, butun umrini farzandlariga bag'ishlagan o'zbek onasi." },
        { "name": "Yozuvchi", "role": "Hikoyachi", "description": "Voqealarni o'z nigohi bilan tasvirlab beruvchi farzand." }
      ],
      "impact": "Ushbu asar har bir o'zbek oilasining eng sevimli kitoblaridan biriga aylandi."
    },
    {
      "title": "Diyonat",
      "author": "Odil Yoqubov",
      "year": "1977-yil",
      "genre": "Roman",
      "description": "Insoniy prinsiplar, halollik va jamiyatdagi ma'naviy muammolar.",
      "fullAnalysis": "Olimlar va rahbarlar hayoti misolida diyonat, or-nomus va mas'uliyat kabi mavzular tahlil qilinadi. Jamiyatdagi soxtaliklar va ularga qarshi kurashgan insonlar taqdiri asarning markazida turadi.",
      "plotSummary": "Umarali va boshqa qahramonlar misolida mansab pillapoyalari, halollik va nafsoniyat o'rtasidagi kurash tasvirlanadi. Olimlarning ilmiy izlanishlari va hayotiy qarashlari to'qnash keladi.",
      "themes": [
        { "title": "Ma'naviy Poklik", "explanation": "Inson har qanday vaziyatda ham o'z diyonatini saqlab qolishi shartligi." },
        { "title": "Ijtimoiy Adolat", "explanation": "Jamiyatdagi illatlar va ularni tuzatish yukini o'z zimmasiga olgan shaxslar." }
      ],
      "characters": [
        { "name": "Umarali", "role": "Ijobiy qahramon", "description": "Halol, diyonatli va o'z prinsiplariga sodiq inson." },
        { "name": "Nurmatov", "role": "Ziddiyatli qahramon", "description": "Mansab va pul ortidan quvuvchi shaxs." }
      ],
      "impact": "Jamiyatda ma'naviy uyg'onishga va halollikka chaqiruvchi kuchli asar bo'lib xizmat qildi."
    },
    {
      "title": "Alpomish",
      "author": "O'zbek xalq og'zaki ijodi",
      "year": "Qadimiy",
      "genre": "Qahramonlik doston",
      "description": "O'zbek xalqi mardligi, or-nomusi va vatanparvarligini tarannum etuvchi buyuk asar.",
      "fullAnalysis": "Alpomish dostoni o'zbek xalqining eng qadimiy va sevimli asarlaridan biridir. Unda Hakimbek (Alpomish) va Barchinoyning sadoqati, vatan va el-yurt ozodligi yo'lidagi kurashlari tasvirlangan. Doston o'z ichiga o'zbek milliy qadriyatlarini, oila mustahkamligini va Alp qahramonlik ideallarini qamrab oladi.",
      "plotSummary": "Hakimbek (Alpomish) o'z yori Barchinoyni qatag'onlardan qutqarish va o'z elini yovuz dushmanlardan ozod qilish uchun Qalmoqshohga qarshi jangga otlanadi. U ko'plab sinovlardan o'tadi, asirga tushadi, ammo do'stlari va sadoqati yordamida g'alaba qozonadi.",
      "themes": [
        { "title": "Vatanparvarlik", "explanation": "El-yurt tinchligi va ozodligi yo'lidagi mardona kurash." },
        { "title": "Sadoqat", "explanation": "Alpomish va Barchinoyning bir-biriga bo'lgan o'chmas muhabbati." }
      ],
      "characters": [
        { "name": "Alpomish", "role": "Bosh qahramon", "description": "G'ayritabiiy kuchga ega, mard va adolatli qahramon." },
        { "name": "Barchinoy", "role": "Bosh qahramon", "description": "Aqlli, sadoqatli va jasur o'zbek ayoli timsoli." }
      ],
      "impact": "O'zbek milliy o'zligini va qahramonlik ruhini asrlar bo'yi saqlab kelgan eng muhim doston."
    },
    {
      "title": "Mehrobdan chayon",
      "author": "Abdulla Qodiriy",
      "year": "1928-yil",
      "genre": "Tarixiy roman",
      "description": "Xudoyorxon davri saroy fitnalari va pok muhabbatning fojiali to'qnashuvi.",
      "fullAnalysis": "Anvar va Ra'noning sevgisi orqali xonliklar davridagi adolatsizliklar, ulamolarning xatolari va insoniy qadr-qimmat masalalari yoritilgan. Asardagi Solih mahdum obrazi o'sha davrning ziddiyatli vakili sifatida gavdalanadi.",
      "plotSummary": "Xudoyorxon saroyida mirzo bo'lib ishlovchi Anvar o'z sevgilisi Ra'no bilan baxtli bo'lishni orzu qiladi. Biroq, makkor amaldorlar va saroy fitnalari ularning yo'liga g'ov bo'ladi. Asar so'ngida adolat va sevgi g'alabasi fojiaviy tus oladi.",
      "themes": [
        { "title": "Adolat va Zulm", "explanation": "Xonliklar davridagi ijtimoiy tengsizlik va zulmning fosh etilishi." },
        { "title": "Pok Muhabbat", "explanation": "Anvar va Ra'noning o'z sevgisi yo'lidagi sobitligi." }
      ],
      "characters": [
        { "name": "Anvar", "role": "Bosh qahramon", "description": "Bilimli, mard va sevgi yo'lida fidoiy yigit." },
        { "name": "Ra'no", "role": "Bosh qahramon", "description": "Zukko, go'zal va o'z baxti uchun kurashuvchi qiz." }
      ],
      "impact": "O'zbek tarixiy romanistikasining durdonalaridan biri bo'lib, o'tmish saboqlarini o'rganishda xizmat qiladi."
    },
    {
      "title": "Oq kema",
      "author": "Chingiz Aytmatov",
      "year": "1970-yil",
      "genre": "Qissa",
      "description": "Tabiat va insonning fojiali munosabati, bolaning beg'ubor orzulari yer bilan bitta bo'lishi.",
      "fullAnalysis": "Aytmatov ushbu asarida insonning hayvonot olamiga, tabiatga va ezgu sadoqatga munosabatini bolaning nigohi bilan tasvirlaydi. Shoxli bug'u onaning kelishi haqidagi afsona va real hayotning qat'iyatsizligi orasidagi ziddiyat fojia bilan tugaydi.",
      "plotSummary": "Tog'lar orasida bobosi bilan yashovchi bola durbini orqali ko'rinadigan Oq kema haqida orzu qiladi. U o'zini baliqqa aylanib, otasining yoniga suzib borishini tasavvur qiladi. Bobosining mardligi va Oroqulning yovuzligi o'rtasidagi kurash bolaning dunyosini ostun-ustun qiladi.",
      "themes": [
        { "title": "Tabiat va Ekologiya", "explanation": "Insonning tabiatga bo'lgan shafqatsiz munosabati va uning oqibatlari." },
        { "title": "Ezgulik va Yovuzlik", "explanation": "Afsonaviy qadriyatlar va moddiy manfaatlar to'qnashuvi." }
      ],
      "characters": [
        { "name": "Bola", "role": "Bosh qahramon", "description": "Beg'ubor, xayolchan va vijdonli etti yoshli bola." },
        { "name": "Mo'min bobo", "role": "Ijobiy qahramon", "description": "Mehribon, ammo hayot sinovlari oldida ojiz qolgan qariya." }
      ],
      "impact": "Jahon adabiyotining eng chuqur falsafiy asarlaridan biri sifatida tan olingan."
    },
    {
      "title": "Kichkina shahzoda",
      "author": "Antuan de Sent-Ekzyuperi",
      "year": "1943-yil",
      "genre": "Falsafiy ertak",
      "description": "Bolalar uchun yozilgan kattalar kitobi - sevgi, do'stlik va mas'uliyat haqida.",
      "fullAnalysis": "Shahzodaning sayyoralararo sayohati davomida duch kelgan turli obrazlari - bu insoniyatning turli xarakterlari va nuqsonlari ustidan yozilgan o'tkir satira va chuqur falsafadir.",
      "plotSummary": "Sahroi Kabirda samolyoti buzilib qolgan uchuvchi g'aroyib Kichkina shahzoda bilan uchrashadi. Shahzoda o'z sayyorasidagi Guli va koinotdagi sayohatlari haqida hikoya qilib beradi.",
      "themes": [
        { "title": "Mas'uliyat", "explanation": "Inson o'zi bo'ysundirgan (o'rgatgan) narsasi uchun doimo javobgar ekanligi." },
        { "title": "Sevgi", "explanation": "Gulga bo'lgan g'aroyib va murakkab bog'liqlik." }
      ],
      "characters": [
        { "name": "Kichkina shahzoda", "role": "Bosh qahramon", "description": "Boshqa sayyoradan kelgan, dunyoga bolalar nigohi bilan boqaruvchi sayyoh." },
        { "name": "Tulki", "role": "Falsafiy do'st", "description": "Shahzodaga 'bo'ysundirish' va do'stlik sirlarini o'rgatuvchi qahramon." }
      ],
      "impact": "Dunyodagi eng ko'p tillarga tarjima qilingan va eng ko'p o'qiladigan asarlardan biridir."
    },
    {
      "title": "O'tkan kunlar 2",
      "author": "Abdulla Qodiriy",
      "year": "Arxiv",
      "genre": "Tarixiy roman",
      "description": "Buyuk asarning navbatdagi tahlili va yangicha talqini.",
      "fullAnalysis": "Mazkur qismda O'tkan kunlar asarining ijtimoiy-siyosiy jihatlariga chuqurroq urg'u beriladi. Yusufbek hoji va o'sha davr ulamolarining qarashlari tahlil qilinadi.",
      "plotSummary": "Otabek va Kumushning baxtli damlari va ulardan so'ng boshlangan ayriliq fojiasi. Toshkent va Marg'ilon orasidagi yo'llarda kechgan sarguzashtlar.",
      "themes": [
        { "title": "Millat Taqdiri", "explanation": "Parcha-parchalikning millat boshiga keltiradigan kulfatlari." }
      ],
      "characters": [
        { "name": "Otabek", "role": "Qahramon", "description": "Ziyoli o'zbek yigiti." }
      ],
      "impact": "Milliy o'zlikni anglashda davom etuvchi darslik vazifasini o'taydi."
    },
    {
      "title": "Alpomish 2",
      "author": "Xalq og'zaki ijodi",
      "year": "Qadimiy",
      "genre": "Doston",
      "description": "Dostonning navbatdagi variantlari va qahramonlik motivlari.",
      "fullAnalysis": "Bu variantda Alpomishning asirlikdagi kechinmalari va Qalmoq elidagi do'stlari (Qaldirg'och) bilan munosabatlari batafsil yoritiladi.",
      "plotSummary": "Alpomishning etti yillik zindondan so'ng o'z yurtiga qaytishi va Barchinoyning to'yi kuni yetib kelishi.",
      "themes": [
        { "title": "Mardlik", "explanation": "Har qanday qiyinchilikda ham bukimas iroda." }
      ],
      "characters": [
        { "name": "Hakimbek", "role": "Alpomish", "description": "Yengilmas bahodir." }
      ],
      "impact": "Xalqning ma'naviy tayanch nuqtasi bo'lib xizmat qiladi."
    },
    {
      "title": "Zumrad va Qimmat",
      "author": "Xalq ertagi",
      "year": "Noma'lum",
      "genre": "Ertak",
      "description": "Yaxshilik va yomonlik, mehnat va dangasalik o'rtasidagi kurashni bolalar tilida tushuntiruvchi ibratli ertak.",
      "fullAnalysis": "Ushbu ertakda ikki qarama-qarshi qahramon: mehnatsevar Zumrad va erkatoy, dangasa Qimmat orqali axloqiy tarbiya beriladi. Zumradning kamtarligi va kattalarga bo'lgan hurmati unga omad va baxt keltiradi.",
      "plotSummary": "Mehnatsevar Zumrad o'gay onasi tomonidan uydan haydaladi. U o'rmonda uchrashgan kampirning barcha topshiriqlarini bajarib, mukofot oladi. Buni ko'rgan Qimmat ham yo'lga chiqadi, ammo dangasaligi tufayli jazosini oladi.",
      "themes": [
        { "title": "Mehnatsevarlik", "explanation": "Yaxshi xulq va mehnat doimo mukofotlanishi." },
        { "title": "Adolat", "explanation": "Yomonlik qilgan inson jazosiz qolmasligi." }
      ],
      "characters": [
        { "name": "Zumrad", "role": "Bosh qahramon", "description": "Odobli, ishchan va ochiq ko'ngil qiz." },
        { "name": "Qimmat", "role": "Antagonist", "description": "Dangasa, tartibsiz va hasadgo'y qiz." }
      ],
      "impact": "O'zbek xalq og'zaki ijodining eng mashhur va tarbiyaviy ahamiyatga ega ertaklaridan biri."
    },
    {
      "title": "Boy ila xizmatchi",
      "author": "Hamza Hakimzoda Niyoziy",
      "year": "1918-yil",
      "genre": "Drama",
      "description": "Ijtimoiy tengsizlik va jabr-zulm haqida hikoya qiluvchi dramatik asar.",
      "fullAnalysis": "Hamza Hakimzoda Niyoziyning ushbu dramasi ijtimoiy tengsizlik va jabr-zulm haqida hikoya qiladi. Asarda boy qatlamning makkorligi va oddiy xizmatchining qiyinchiliklari aks ettirilgan.",
      "plotSummary": "Zulm ostida yashovchi xizmatchi G'afurning taqdiri va boylarning adolatsizligi. Jamila ismli qahramonning pokligi va sadoqati fonida ijtimoiy ziddiyatlar ochib beriladi.",
      "themes": [
        { "title": "Sinfiy Kurash", "explanation": "Boy va kambag'al qatlam o'rtasidagi bitmas-tuganmas nizo." }
      ],
      "characters": [
        { "name": "G'afur", "role": "Bosh qahramon", "description": "Mazlum, ammo o'z haq-huquqi uchun kurashuvchi xizmatchi." }
      ],
      "impact": "O'zbek dramaturgiyasining shakllanishida poydevor vazifasini o'tagan asar."
    },
    {
      "title": "Ufq",
      "author": "Said Ahmad",
      "year": "1964-yil",
      "genre": "Trilogiya",
      "description": "Urush davridagi o'zbek xalqining matonati, qahramonligi va murakkab taqdirlari.",
      "fullAnalysis": "Said Ahmadning ushbu trilogiyasi urush yillari va undan keyingi davrni qamrab olgan eng yirik asarlardandir. Unda nafaqat jang maydoni, balki front ortidagi odamlarning ruhiy olami ochib berilgan.",
      "plotSummary": "Urush yillarida front ortida qolgan dehqonlar, ayollar va qariyalar hayoti. Azizxon, Tursunboy kabi qahramonlarning murakkab taqdirlari va urush keltirgan og'ir kulfatlar.",
      "themes": [
        { "title": "Matonat", "explanation": "Xalqning og'ir damlarda birlasha olish xislati." }
      ],
      "characters": [
        { "name": "Azizxon", "role": "Bosh qahramon", "description": "Mard va vatanparvar inson." }
      ],
      "impact": "O'zbek adabiyotida urush mavzusini yoritishda yangi bosqich bo'lgan asar."
    },
    {
      "title": "Chol va dengiz",
      "author": "Ernest Xeminguey",
      "year": "1952-yil",
      "genre": "Qissa",
      "description": "Insonning yengilmas irodasi va hayot bilan mardona kurashi haqida jahon durdonasi.",
      "fullAnalysis": "Santyago ismli qariya cholning baliq bilan qilgan bir necha kunlik jangi - bu insoniyatning orzu va maqsad yo'lidagi kurashining ramzidir.",
      "plotSummary": "Qariya baliqchi Santyago ko'p vaqt omadsizlikdan so'ng ulkan qilich-baliqni tutadi. U bilan bir necha kecha-kunduz kurashadi, ammo oxirida baliqning faqat suyaklari qoladi.",
      "themes": [
        { "title": "Iroda", "explanation": "Insonni mag'lub qilib bo'lmaydi, uni faqat yo'q qilish mumkin." }
      ],
      "characters": [
        { "name": "Santyago", "role": "Bosh qahramon", "description": "Tajribali va metin irodali qariya." }
      ],
      "impact": "Inson irodasini madh etuvchi ushbu asar uchun yozuvchi Nobel mukofotini olgan."
    },
    {
      "title": "Robinzon Kruzo",
      "author": "Daniel Defo",
      "year": "1719-yil",
      "genre": "Sarguzasht roman",
      "description": "Kimsa yashamaydigan orolda 28 yil yashagan insonning matonati va hayotga bo'lgan intilishi.",
      "fullAnalysis": "Mazkur asar inson irodasining tabiat ustidan g'alabasini ifodalaydi. Robinzonning orolda o'ziga uy qurishi, dehqonchilik qilishi va yolg'izlikka qarshi kurashishi har bir o'quvchi uchun katta darsdir.",
      "plotSummary": "Kema halokatidan so'ng Robinzon Kruzo kimsasiz orolga tushib qoladi. U erda ko'p yillar davomida yolg'iz hayot kechiradi, keyinchalik Juma ismli do'st orttiradi.",
      "themes": [
        { "title": "Yolg'izlik", "explanation": "Insonning yolg'izlikda o'zligini yo'qotmay saqlab qolishi." }
      ],
      "characters": [
        { "name": "Robinzon Kruzo", "role": "Bosh qahramon", "description": "Uddaburon, sabrli va bilimdon sayyoh." }
      ],
      "impact": "Realistik sarguzasht janrining dunyodagi eng mashhur namunasi."
    },
    {
      "title": "Bolalik",
      "author": "Oybek",
      "year": "1962-yil",
      "genre": "Avtobiografik qissa",
      "description": "Yozuvchining o'z bolaligi, o'sha davrdagi Toshkent hayoti va shirin xotiralari.",
      "fullAnalysis": "Oybek ushbu asarida o'z bolalik yillarini shunday tasvirlaydiki, o'quvchi ko'z oldida eski Toshkentning ko'chalari, odamlari va muhiti jonlanadi.",
      "plotSummary": "Yosh Musoning (Oybekning) bolalik xotiralari, uning oilasi, do'stlari va ilmga bo'lgan ilk qadamlari.",
      "themes": [
        { "title": "Xotiralar", "explanation": "O'tmishning shirin va achchiq damlariga sayohat." }
      ],
      "characters": [
        { "name": "Muso", "role": "Bosh qahramon", "description": "Yosh va hamma narsaga qiziqqan bola." }
      ],
      "impact": "O'zbek avtobiografik adabiyotining eng yirik namunasi."
    },
    {
      "title": "Ufq 2",
      "author": "Said Ahmad",
      "year": "Arxiv",
      "genre": "Roman",
      "description": "Tarixiy trilogiyaning ikkinchi qismi bo'yicha tahlillar.",
      "fullAnalysis": "Trilogiyaning 'Hijron kunlari' qismi tahlil qilinadi. Urushning insoniylikka bo'lgan zarbasi.",
      "plotSummary": "Urushning qizg'in davri. Front ortidagi hayot va frontdagi mardliklar.",
      "themes": [
        { "title": "Sadoqat", "explanation": "Kutish azobi va sadoqat qadri." }
      ],
      "characters": [
        { "name": "Tursunboy", "role": "Ziddiyatli qahramon", "description": "Qiyin vaziyatda qolgan inson." }
      ],
      "impact": "Urush davri ruhiyatini eng yaxshi ochib bergan asar."
    },
    {
      "title": "Mening o'g'rigina bolam",
      "author": "G'afur G'ulom",
      "year": "1936-yil",
      "genre": "Qissa",
      "description": "Insoniylik, mehr-shafqat va yetimlikning og'ir damlari haqida hikoya qiluvchi samimiy asar.",
      "fullAnalysis": "G'afur G'ulomning ushbu asari yetim qolgan bolaning taqdiri orqali o'sha davrdagi qiyinchiliklarni va insoniy fazilatlarni yuksak badiiy mahorat bilan tasvirlaydi.",
      "plotSummary": "Ochlik va yetimlikka duch kelgan bolaning sarguzashtlari. Uning hayotdagi qiyinchiliklarga qarshi kurashi va o'zining beg'uborligini saqlab qolishi.",
      "themes": [
        { "title": "Mehr-shafqat", "explanation": "Insonning eng og'ir damlarda ham bir-biriga yordam berishi." }
      ],
      "characters": [
        { "name": "Bosh qahramon", "role": "Yetim bola", "description": "Taqdir zarbalariga qaramay, hayotga umid bilan boquvchi bola." }
      ],
      "impact": "O'zbek adabiyotida bolalar ruhiyatini yorituvchi eng ta'sirli asarlardan biri."
    },
    {
      "title": "Robinzon Kruzo 2",
      "author": "Daniel Defo",
      "year": "Arxiv",
      "genre": "Sarguzasht",
      "description": "Robinzonning oroldagi hayoti va uning ma'naviy yuksalishi haqida yangicha qarashlar.",
      "fullAnalysis": "Asarning ikkinchi variantida Robinzonning oroldagi diniy va ma'naviy izlanishlariga ko'proq e'tibor qaratiladi.",
      "plotSummary": "Robinzonning oroldagi sarguzashtlarining davomi va uning Juma bilan muloqoti.",
      "themes": [
        { "title": "Do'stlik", "explanation": "Til va madaniyat to'siqlarini yenguvchi haqiqiy do'stlik." }
      ],
      "characters": [
        { "name": "Juma", "role": "Bosh qahramonning do'sti", "description": "Sadoqatli va o'rganuvchan yigiti." }
      ],
      "impact": "Butun jahon madaniyatida sadoqat ramziga aylangan asar."
    }
  ]
};
