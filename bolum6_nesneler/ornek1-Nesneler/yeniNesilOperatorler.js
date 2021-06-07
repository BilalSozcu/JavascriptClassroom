// ======================================================
//      YENİ NESİL OPERATORLER: DESTRUCTURING (OBJECT)
// ======================================================
// ES6 ile birlikte bir dizi ya da nesnenin içerisindeki
// elemanlar kolaylıkla ayrıştırılabilir.

const birey = {
  ad: "Can",
  konum: "Samsun",
  email: "can@gmail.com",
};

// 1.Yontem ==> Klasik yontem
let ad1 = birey.ad;
let konum1 = birey.konum;

console.log(ad1, konum1);

ad1 = "Canan";
console.log(birey);

// 2. YONTEM (OBJECT DESTRUCTURING)
//  ! Destructuring kullanilirken "Key" isimleri nesneninki ile ayni olmalidir
//  ! aksi takdirde undefined degerler donerler
const { ad, konum, email } = birey; // birey nesnesindeki property'leri ayristirir
console.log(ad, konum, email);
// ad = "Mustafa";
birey.ad = "Mustafa"; // birey nesnesindeki ad'i gunceller
console.log(birey);

function bilgiAl() {
  return {
    id: "101",
    urunAdi: "Apple",
    fiyat: 15000,
  };
}
console.log(bilgiAl());
const { id, urunAdi, fiyat } = bilgiAl();

// ======================================================
//      YENİ NESİL OPERATORLER: DESTRUCTURING (ARRAY)
// ======================================================
const isimler = ["Ahmet", "Can", "Veli"];

// Klasik Yontem
const isim1 = isimler[0];
const isim2 = isimler[1];

//  Destructuring
const [kisi1, kisi3] = isimler;
console.log(kisi1, kisi3);

// ======================================================
//        YENİ NESİL OPERATORLER: SPREAD VEYA REST
// ======================================================
// Spread operatoru dizileri ve nesneleri birleştirmek
// veya ayırmak icin kullanilabilir.
// Kullanmak için dizinin onune ... karakterleri konulur.
// DİZİLERDE DESTRUCTURING YAPARKEN GERİ KALANLARI SEÇMEK İÇİN KULLANILABİLİR.
const arabalar = ["bmw", "fiat", "citroen", "reno", "audi"];
const [araba1, araba2, ...geriKalanArabalar] = arabalar;
console.log(araba1, geriKalanArabalar);
// NESNELERDE DESTRUCTURING YAPARKEN GERİ KALANLARI SEÇMEK İÇİN KULLANILABİLİR.
const personel = { ad: "john", soyad: "smith", meslek: "developer" };
const { meslek, ...geriKalan } = personel;
console.log(meslek, geriKalan);
// DIZILERI BIRLESTIRMEK ICIN DE KULLANILABILIR
const araclar = ["Ucak", "Helikopter", "Bisiklet"];
const otomobiller = ["Kamyon", "Kamyonet", "Otobus", "Araba"];
const birlesim = ["Ucak", "Helikopter", "Bisiklet", ...otomobiller];
console.log(birlesim);
const birlesim1 = [...araclar, ...otomobiller];
console.log(birlesim1);

const meyveler = ["kiraz", "armut", "seftali", "uzum"];
const turunclar = ["limon", "portakal", "mandalina", ...meyveler];
console.log(turunclar);
