// const s1 = +prompt("Birinci Sayi:");
// const islem = prompt("Islemi Giriniz:");
// const s2 = Number(prompt("Ikinci Sayi:"));
// let sonuc = 0;

// if (islem == "+") {
//   sonuc = s1 + s2;
// } else if (islem == "-") {
//   sonuc = s1 - s2;
// } else if (islem == "*") {
//   sonuc = s1 * s2;
// } else if (islem == "/") {
//   sonuc = s1 / s2;
// } else {
//   alert("Yanlis islem yaptiniz.");
// }

// console.log(`${s1} ${islem} ${s2} = ${sonuc}`);

// const yas = prompt("Yasinizi giriniz");
// const health = prompt("Saglikli misiniz e/h");

// // alert(yas > 18 && health == "e" ? "askere gidebilir" : "askere gidemez");
// const result =
//   yas > 18 && health == "e" ? "askere gidebilir" : "askere gidemez";
// console.log(result);

// const gunNo = prompt("Gun sayisini giriniz");
// switch (gunNo) {
//   case "1":
//     gun = "Pazartesi";
//     break;
//   case "2":
//     gun = "Salı";
//     break;
//   case "3":
//     gun = "Çarşamba";
//     break;
//   case "4":
//     gun = "Perşembe";
//     break;
//   case "5":
//     gun = "Cuma";
//     break;
//   case "6":
//     gun = "Cumartesi";
//     break;
//   case "7":
//     gun = "Pazar";
//     break;
//   default:
//     alert("Gün 1-7 arasında olmalıdır");
//     break;
// }
// console.log(gun);

// const maas = prompt("Maasinizi giriniz");
// const calismaSuresi = prompt("Calisma surenizi giriniz");
// const result =
//   calismaSuresi > 10 ? maas * 1.5 : calismaSuresi > 5 ? maas * 1.2 : maas * 1.1;
// console.log(`Zamli maasiniz ${result}`);

// const borç = 0;
// const maaş = 3000;
// console.log(
//   !borç && maaş > 2825.9 ? "Kredi Alabilir :😉:" : "Kredi Alamaz :😠:"
// );

// ******************* FOR LOOP *********************

// Ornek: Asal sayi tesbiti
const number = 7;
let asal = true;
for (let i = 2; i < number; i++) {
  if (number % i == 0) {
    asal = false;
    break;
  }
}
const asalMi = asal ? "ASAL" : "ASAL DEGIL";
console.log(asalMi);

// let not;
// do {
// not = prompt("0-100 arasında bir not giriniz:");
// } while (not < 0 || not > 100);
// console.log("Girdiğiniz not 0-100 arasındadır");

// let not;
// not = prompt("0-100 arasında bir not giriniz:");
// while (not < 0 || not > 100) {
//   console.error("Girilen not 0-100 arasinda olmalidir.");
//   not = prompt("0-100 arasında bir not giriniz:");
// }
// console.log("Girdiğiniz not 0-100 arasındadır");

// let not1,
//   i = 1;
// while (true) {
//   ** ? ==>true yerine 1==1 ya da 1 de yazilabilir
//   not1 = prompt(i + ".kisinin notunu giriniz:");
//   not1 = not1.toLowerCase();
//   if (not1 == "q") {
//     break;
//   }
//   i++;
//   console.log(Number(not1));
// }
