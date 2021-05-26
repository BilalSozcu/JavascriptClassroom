const dogum = 1980;
const yaslar = [30, 25, 44, 77];
const isimler = [
  "ahmet",
  "mustafa",
  "can",
  "bekir",
  "ayşe",
  20,
  40,
  true,
  23.4,
  2021 - dogum,
  yaslar,
];
console.log(isimler);
console.log(isimler[0]);
console.log((isimler[3] = "canan"));
isimler[isimler.length - 2] = false;
console.log(isimler);
// isimler dizisini 10. elemanının 0. elemanini yazdir.
console.log(isimler[10][0]);

// * ================= DIZIYI DEGISTIREN METHODLAR =================== *
const h1 = document.getElementById("meyveler");
let meyveler = ["Elma", "Armut", "Muz", "Kivi"];

// pop() son elemani siler ve silinen elemani dondurur
meyveler.pop();

//  push() dizinin sonuna bir eleman ekler.
//  Dizinin son eleman sayisini dondurur
const boyut = meyveler.push("Cilek", "Karpuz");
console.log(boyut);

//  unshift dizinin 0. index'ine eleman ekler
const boyut1 = meyveler.unshift("Ayva");
console.log(boyut1);

// Dizinin 0. index elemanini siler ve silinen elemani dondurur
const silinen = meyveler.shift();
console.log(silinen);
console.log(meyveler);

// Dizinin tamamini tersten yer degistiriyor
meyveler.reverse();

//  Sona kavun ekle
meyveler.push("Kavun");

// Diziyi alfabetik olarak siralar
meyveler.sort();

//  Dizinin index'i 1 (baslangic noktasi) ile 2 arasina eleman ekliyor. 0 ==> uzerine yazmiyor demek
meyveler.splice(1, 0, "Erik");

// Dizinin 4. elemanini siler ve yerine Mango yazar
meyveler.splice(4, 1, "Mango");

console.log(meyveler);
h1.innerHTML = meyveler;

// * ================= DIZIYI ERISIM METHODLARI =================== *
const sayilar = [3, 5, 2, "2", "uc", 2, "bes", 5];

console.log(sayilar.includes("5"));
console.log(sayilar.includes(5));

const ikiIndeks = sayilar.indexOf(2);
console.log(ikiIndeks);
console.log("2'nin son index'i: " + sayilar.lastIndexOf(2));

// Eger aranilan eleman bulunamaz ise -1 dondurur
const ucIndex = sayilar.indexOf(7);
// ucIndex < 0
//   ? alert("aranilan nesne bulunamadi")
//   : alert("aranilan nesnenin index'i:" + ucIndex);

// join dizinin elemanlari birlestirip string hale cevirir.
const sayilar1 = sayilar.join("-"); // "", "-", () sekilde birlestirir
console.log(sayilar1);

// toString fonksiyonu sadece dizinin elemanlarini aralarina "," virgul koyarak birlestirir
// ve string yapar
const sayilar2 = sayilar.toString();
console.log(sayilar2);
h1.innerHTML = sayilar2;

const arabalar = ["bmw", "mercedes", "audi", "ferrari", "volvo"];
console.log(arabalar.slice(2)); // index 2 inclusive

const arabalar1 = arabalar.slice(2);
arabalar1.push("Jaguar"); // arabalarin sonuna jaguar ekler
console.log(arabalar1);

const arabalar2 = arabalar.slice(1, 3);
console.log(arabalar2);

//* ====== CONCAT ====== *
const yazilar = ["a", "b", "ad", "soyad", "yas"];
const rakamlar = [3, 5, 1, 4, 7];
const birlesik = yazilar.concat(rakamlar, true, true, false, [4, 7, 9]);
console.log(typeof birlesik[7]);
console.log(birlesik);
h1.innerHTML = birlesik;
