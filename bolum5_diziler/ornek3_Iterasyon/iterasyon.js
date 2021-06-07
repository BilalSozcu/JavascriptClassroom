const koordinatlar = [120, 100, -100, 220, 330];
let negatif = 0;
let pozitif = 0;
// for (let i = 0; i < koordinatlar.length; i++) {
//   koordinatlar[i] < 0 ? negatif++ : pozitif++;
// }

// ** FOR IN DONGUSU
for (let i in koordinatlar) {
  koordinatlar[i] < 0 ? negatif++ : pozitif++;
}
console.log(
  `Negatif Koordinat Sayısı: ${negatif} Pozitif Koordinat sayisi ${pozitif}`
);
//---------------------------------------------------------------
// SORU: Bir hayvanat bahçesinde bulunan hayvan türlerinin bir dizide
// saklandığı varsayalım.Bu hayvanları türüne göre aramamızı sağlayacak
// ve o türden kaç adet bulunduğu ana programa döndürecek fonksiyonu
// yazınız. Eğer o türden bir hayvan yok ise bulunamdığını yazdırsın.
//----------------------------------------------------------------

// const hayvanlar = ["fil", "deve", "kuş", "deve", "fare", "kedi", "deve"];
// const ara = prompt("aramak istenilen hayvan türünü giriniz:");
// ** const ara = prompt("aramak istenilen hayvan türünü giriniz:").toLowerCase();
// const bulDondur = function (ara) {
//   let hayvanSayisi = 0;
//   for (let i in hayvanlar) {
//     if (hayvanlar[i] == ara.toLowerCase()) {
//       hayvanSayisi++;
//     }
//   }
//   return hayvanSayisi;
// };
// const sayi = bulDondur(ara);
// sayi == 0
//   ? console.log("Aradiginiz hayvan bulunamadi")
//   : console.log(`Aradiginiz ${ara} 'den ${sayi} adet bulunmaktadir`);

// ** =========   FOR OF DONGUSU =========
// for of dongusu for in dongusunun bir cok veri yapisini kapsayacak sekilde guncellenmis halidir. Bu dongude dizi icersindeki veriye erisirken indisleme kullanmaya gerek yoktur.
let arabalar = ["BMW", "Volvo", "Mini"];
let yazi = "";
for (let i of arabalar) {
  console.log(i);
  yazi += i + " "; // i:  dizinin i. elemani demektir.
}
console.log(yazi);

// ** =========   FOREACH METHODU   ===========
let ogrenciler = ["John", "Ali", "Can"];
function yazdır(a) {
  console.log(a);
}
ogrenciler.forEach(yazdır);
ogrenciler.forEach((x) => console.log(x));

const fiyatlar = [200, 300, 125, 450, 333];
let toplam = 0;
fiyatlar.forEach((f) => (toplam += f));
console.log(toplam);
document.querySelector(".toplam").innerHTML = `${toplam}  TL`;

toplam = 0;
fiyatlar.forEach((a, i) => {
  toplam += a;
  console.log(`${i} . iterasyon: ${toplam}`);
});
console.log(toplam);
document.querySelector(".toplam").innerHTML = `${toplam}  TL`;

//  fiyatlar dizisinde her bir fiyata %10 zam yapalim

const yeniFiyat = [];
fiyatlar.forEach((f, i) => (yeniFiyat[i] = (f * 1.1).toFixed(2)));
console.log(yeniFiyat);

let toplamFiyat = 0;
let zamliFiyatlar = [];
fiyatlar.forEach((deger, indis) => {
  zamliFiyatlar[indis] = (deger * 1.1).toFixed(2);
  toplamFiyat += Number(zamliFiyatlar[indis]);
});
console.log(zamliFiyatlar);
console.log(toplamFiyat);

// ** =========   MAP METHODU   ===========
// Ornek: Dizinin her bir elemaninin 2 katini aliniz
const rakamlar = [3, 5, 3, 2, 6, 7, 9];
const ikikat = rakamlar.map((x) => x * 2);
console.log(ikikat, rakamlar);

// Ornek: Isimler dizisinin icerisindeki her bir ismi buyuk harf olarak
// yeni bir diziye saklayalim
const isimler = [
  "Ahmet",
  "mehmet",
  "ismet",
  "SAFFET",
  "Can",
  "Canan",
  "Cavidan",
];

// ? map() method'undan sonra eger bir terminal islemi (forEach gibi) kullanilirsa
// ? map() methodu bir dizi dondurmez
const buyuk = isimler.map((isim) => isim.toUpperCase());
buyuk.forEach((isim) => console.log(isim));

// const buyuk = isimler
//   .map((isim) => isim.toUpperCase())
//   .forEach((isim) => console.log(isim));

//  Ornek: Dolar, Euro parite hesaplama
tlFiyatlar = [120, 340, 550, 245, 322.5, 789];
const dolarKur = document.querySelector(".dolar");
const euroKur = document.querySelector(".euro");
const dolar = document.querySelector(".dolar-fiyat");
const euro = document.querySelector(".euro-fiyat");

dolarKur.onchange = function () {
  dolarKur.value < 0
    ? alert("Kur 0'dan kucuk olamaz")
    : (dolar.innerHTML = tlFiyatlar.map((tl) =>
        Math.round(tl / dolarKur.value)
      ));
};

euroKur.onchange = function () {
  euroKur.value < 0
    ? alert("Kur 0'dan kucuk olamaz")
    : (euro.innerHTML = tlFiyatlar.map((tl) => Math.round(tl / euroKur.value)));
};

// tlFiyatlar dizisindeki urun fiyatlarinin 250 tl altinda olanlarina
// %10 zam, ustunde olanlarina %20 zam yapilmak isteniyor. Yeni bir diziye atayin.
// 1. urun zamli fiyati 110 TL

const zamliFiyat = tlFiyatlar.map((x, i) => {
  if (x > 100) {
    return `${i + 1}.urunun zamli fiyati: ${(x * 1.1).toFixed(2)}'dir.<br>`;
  } else {
    return `${i + 1}.urunun zamli fiyati: ${(x * 1.2).toFixed(2)}'dir.<br>`;
  }
});
const stringZamliFiyat = zamliFiyat.join("");
console.log(stringZamliFiyat);
document.querySelector(".zamli-fiyat").innerHTML = stringZamliFiyat;

// ** =========== FILTER METHODU ==============
// tlFiyatlar listesinde fiyati 250 TL'den az olanlari bir dizide saklayalim
const kucuk = tlFiyatlar.filter((x) => x < 250);
console.log(kucuk);

// fiyati 350'den kucuk olanlari yazdiriniz
tlFiyatlar.filter((x) => x < 350).forEach((x) => console.log(x));

// Kucukten buyuge siralama
console.log(tlFiyatlar.sort((x, y) => x - y));

// Buyukten kucuge siralama
console.log(tlFiyatlar.sort((x, y) => y - x));

// ** =========== PIPELINE ==============

// Maasi 4000 $'dan dusuk olanlara %50 zam yapmak istiyoruz
// ve bunu ayri bir dizi olarak saklamak istiyoruz
const maaslar = [3000, 5000, 4000, 6000, 6500];
const zamliMaaslar = maaslar.filter((d) => d <= 4000).map((d) => d * 1.5);

// Maasi 4000'den buyuk olanlara %25 zam yaparak sonuclari yazdiralim
const zamli4000 = maaslar
  .filter((d) => d > 4000)
  .map((d) => d * 1.25)
  .forEach((d) => console.log(d));

// =========  ORNEK  ==========

const adlar = [
  "Samed",
  "Hakki",
  "Duygu",
  "Emrullah",
  "Bilal",
  "Ali",
  "Ahmet",
  "Hasan",
  "Defne",
  "Serdar",
];
const isimBul = (harf) => {
  const buyukHarf = harf.toUpperCase();
  adlar.filter((t) => t.startsWith(buyukHarf)).forEach((x) => console.log(x));
};
isimBul("A");
isimBul("a");
isimBul("d");
isimBul("H");

// *** ===========  REDUCE METHODU ============
// ! const maaslar = [3000, 5000, 4000, 6000, 6500];
const toplamMaas = maaslar.reduce((x, y) => x + y, 0);
console.log(toplamMaas);

const toplamMaas1 = maaslar.reduce((x, y, i) => {
  console.log(`${i}. iterasyon : ${x}  `);
  return x + y;
});
console.log(toplamMaas1);
// 4000'den buyuk olan maaslari hesaplayin
const maas4000 = maaslar.filter((x) => x >= 4000).reduce((x, y) => x + y, 0);
console.log(maas4000);

// Maasi ortalamanin altinda olanlara %20 zam yapalim,
const ortMaas = maaslar.reduce((x, y) => x + y, 0) / maaslar.length;
const yeniMaaslar = maaslar
  .filter((m) => m >= ortMaas)
  .map((x) => (x * 1.1).toFixed(2));
console.log(yeniMaaslar);
