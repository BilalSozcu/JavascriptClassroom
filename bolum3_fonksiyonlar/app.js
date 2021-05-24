// * =======================================================
// *                    FONKSİYONLAR
// * =======================================================

// ! 1.YONTEM : FUNCTION DECLARATION

function yazdir() {
  console.log("Ahmet");
}
yazdir(); // Fonksiyon'un cagrilmasi

function isimYazdir(isim, yas) {
  console.log(`Adiniz: ${isim} Yasiniz: ${yas}`);
}
isimYazdir("Ahmet", 27); // Call || invoke

function yasHesapla(dogum) {
  return 2021 - dogum;
}

console.log(`Yasiniz: ${yasHesapla(1988)}`);
const yas = yasHesapla(1984);
console.log(`Yasiniz: ${yas}`);

// const sayi = prompt("Sayi giriniz");
//   // Function declaration yontemi ile fonksiyonun tanimlanmasi cagrilmasindan
//   // once veya sonra olabilir
//   // console.log(tekCift(sayi));
// function tekCift(sayi) {
//   const result = sayi % 2 == 0 ? "Cift" : "Tek";
//   return result;
// }
// let last = tekCift(sayi);
// console.log(`${sayi} ${last}'tir`);

// ! 2.YONTEM : FUNCTION EXPRESSION

const tekCift1 = function (sayiniz) {
  return sayiniz % 2 == 0 ? "CIFT" : "TEK";
};
console.log(tekCift1(10)); // invoke

// ORNEK: Buyuk sayiyi bulma
let buyukSayi = function (x, y, z) {
  let enBuyuk;
  if (x > y && x > z) {
    enBuyuk = x;
  } else if (y > z && y > x) {
    enBuyuk = y;
  } else if (z > x && z > y) {
    enBuyuk = z;
  }
  return enBuyuk;
};
console.log("Enbuyuk sayi: " + buyukSayi(5, 3, 8));

// ! 3.YONTEM : ARROW FUNCTION
const topla = (x, y) => x + y; // Otomatik return yapiyor ayrica return yazmaya gerek yok
console.log(topla(5, 2));
console.log(topla(3, 12));

const ciftMi = (sayi) => (sayi % 2 == 0 ? "CIFT" : "TEK");
console.log(ciftMi(45));
console.log(ciftMi(50));

const taban = prompt("taban giriniz");
const us = prompt("us giriniz");
const usAl = (t, u) => t ** u;
console.log(usAl(taban, us));

// * Ornek: Menu
// ! Arrow fonsiyonunda birden fazla ifade var ise fonsiyonda suslu parantez kullanmaliyiz

const menu = () => {
  console.log("=====================");
  console.log("  JAVASCRIPT DERSI   ");
  console.log("=====================");
};

menu();

// Ornek
const kisiselBilgiler = (ad, soyad, dogum) => {
  const bilgi = `Adim: ${ad}, Soyadim: ${soyad}, Yasim: ${2021 - dogum}`;
  return bilgi;
};
console.log(kisiselBilgiler("Kemal", "Sozcu", 2013));

// Silindirin Hacim Hesabi
const r = prompt("Yaricapi giriniz");
const h = prompt("Yuksekligi giriniz");
const silHacim = (r, h) => {
  const hacim = Math.PI * r ** 2 * h;
  return hacim;
};
console.log("Silindir hacmi: " + Math.round(silHacim(r, h))); // En yakin sayiya yuvarlar
console.log("Silindir hacmi: " + silHacim(r, h).toFixed(2)); // Virgulden sonra 2 basamak alir
