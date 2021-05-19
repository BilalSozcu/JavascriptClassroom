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

piSayisi = 3;
console.log(piSayisi);
