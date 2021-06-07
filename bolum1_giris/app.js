// console.log("Hello javascript");
// console.log("Javascript Java'dan kolay bir dildir.");
// console.error("Bu bir hatadir");
// console.warn("Bu bir uyaridir");
// alert("Dikkat");

// ** =========== Degisken tanimlama ============= **
// var keyword'u ile degisken tanimlanabilir
// ancak modern js ile var keyword'unun kullanimi azaldi.
// Cunku var global degisken gibi dusunulmektedir
// TODO: const ve let yeni degisken tanimlama keyword'leridir.
// ! CONST: Sadece baslangicta deger atanabilir (non-primitive'ler haric) sonradan degeri degistirilemez
var pi = 3.14;
console.log(pi);
console.log(typeof pi);

pi = "3";
console.log(pi);
console.log(typeof pi);

pi = true;
console.log(typeof pi);

isim = "Ahmet";
console.log(isim);
console.log(typeof isim);

isim = 4;
console.log(isim);
console.log(typeof isim);

const piSayisi = 3.14;
console.log(piSayisi);

//piSayisi = 3;
//console.log(piSayisi);
//**  -----  LET ----- **
// ? Eğerki değişkenimzin değerinin değişmesi gerekiyor ise const kullanamayız. Bunun yerine LET kullanabiliriz.
// ! LET Block-scope bir değişkendir
let fiyat;
console.log(fiyat);
fiyat = 5.5;
console.log(fiyat);
console.log(typeof fiyat);

let isim1 = "Mustafa"; // Cift Tirnak
let isim2 = "Ahmet"; // Tek Tirnak
let isim3 = `Alican`; // Backtick

console.log(isim1);
console.log(isim2);
console.log(isim3);

const dil = null;
console.log(dil);
console.log(typeof dil);

const sucuk = 40;
const sakiz = 2;
const kola = 5;
let toplam = sucuk + sakiz + kola;
// const toplam = sucuk + sakiz + kola; ==> hata verir
toplam++;
toplam += 50;
console.log(toplam);
console.log(toplam, kola); // Birden fazla degiskenin degerini yazdirmak icin virgul kullanilir

console.log("Toplam: ", toplam); // ? TOPLAM: 98
//  ! + operatoru string birlestirme islemi de gerceklestirilir.
const ad = "Can";
const soyad = "Canan";
console.log(ad + soyad);
console.log(ad + " " + soyad);

const s1 = 7,
  s2 = "7";
console.log(s1 + s2);
const ad1 = "Mesut";
const yas = 55;
console.log(`BENIM ADIM: ${ad1} YASIM:${yas}'dir`);
console.log(`BENIM ADIM: ${ad1} 
YASIM:${yas}'dir`);
console.log();

const yıl = 2021;
const dogumTarihi = 1980;
const sene = yıl - dogumTarihi;
console.log("YAS:" + sene);
console.log("YAŞ:" + (yıl - dogumTarihi));
console.log("YAŞ:" + yıl - dogumTarihi); // !Hata ==> NaN = Not a Number
console.log(`YAŞ: ${yıl - dogumTarihi}`); // ** Template literal ile yazdirma

const taban = 2;
const us = 8;
const sonuc = taban ** us;
console.log(sonuc);
// mod alma
const sayi = 123;
const birler = sayi % 10;
console.log(`birler: ${birler}`);
const onlar = Math.floor(sayi / 10) % 10;
console.log(`onlar: ${onlar}`);
const yuzler = Math.floor(sayi / 100);
console.log(`yuzler: ${yuzler}`);

// ** KARSILASTIRMA OPERATORLERI **
// ! 3'lu karsilatirma operatoru kullanildiginda hem veri tipi
// ! hem de icerik konrolu yapilir
const sayi1 = 100;
const sayi2 = "100";
console.log(typeof sayi1, typeof sayi2);
console.log(sayi1 == sayi2);
console.log(sayi1 === sayi2);

const x = true;
const y = true;
const z = undefined;
console.log(x && y && z);

// ** ======= TERNARY =======

// const age = +prompt("Yasinizi giriniz:"); // ? prompt'un basina  + ekleyince number oldu veri tipi
const name1 = prompt("Adinizi giriniz:");
const age = Number(prompt("Yasinizi giriniz:")); // ? Veri tipi number
console.log("Yasiniz:" + age);
console.log(typeof age);
age >= 18
  ? console.log(`${name1} ehliyet alabilir`)
  : console.log(`${name1} ehliyet alamaz`);

const result =
  age >= 18 ? `${name1} ehliyet alabilir` : `${name1} ehliyet alamaz`;

console.log(result);
const sayi4 = 41;
console.log(String(sayi4), sayi4);
