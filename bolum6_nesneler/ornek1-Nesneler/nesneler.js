// ======================================================
//            NESNELER (OBJECTS)
//======================================================
// Diziler sıralı bellek bölgeleridir. Dolayısıyla dizilere erişim indisleme ile yapılır.
// Sıralı belleklere ihtiyaç varsa (structured) dizi kullanmak mantıklıdır.
// Eğer veriler kompleks ise o zaman dizilerde erişim güçlüğü ortaya çıkar.
// ! OBJECT
// Nesnelerde Key-value (property-value) yapısı kullanlır.
// Nesnelerde aradıgımız veriye erişmek için property adini kullanmak yeterlidir.
// Javascript proto-type bir dildir. Java class-based bir dildir.

//  ! Object literal
const insan = {
  ad: "Can",
  soyad: "Yilmaz",
  yas: 30,
  meslek: "developer",
  diller: ["Java", "JS", "C++", "SQL", "Python"],
};
console.log(insan);
console.log(insan.ad); // .dot notasyonu ile verilere erisilebilir.

// " " isareti olmasa da key'ler string mantigiyla calisir
// Koseli parantez erisimi(koseli parantez icerisine bir expression yazmak mumkundur)
console.log(insan["yas"]);
const yazi = "Adim";
console.log(`${yazi} ${insan.ad} ve yasim ${insan["yas"]}'dur`);

const bilgiSecimi = prompt(
  "Insan hakkinda ne bilmek istersin ? Seciminizi giriniz: ad, soyad, yas, meslek ve diller"
);

// console.log(insan[bilgiSecimi]); // undefined herhangi bir veri gir

if (insan[bilgiSecimi]) {
  console.log(insan[bilgiSecimi]);
} else {
  console.log("Yanlis secim");
}
insan.konum = "Turkiye";
insan.email = "insan@gmail.com";
insan["dogumTarihi"] = 1990;
console.log(insan);

// ************  NESNE METHODLARI  ************

const kisi = {
  ad: "Ahmet",
  soyad: "Can",
  dogumTarihi: 1990,
  meslek: "tester",
  tool: "selenium",
  ehliyet: true,
  yasHesapla: function () {
    console.log(this);
    return new Date().getFullYear() - this.dogumTarihi;
  },
  ozet: function () {
    return `${this.ad} ${this.soyad} ${this.yasHesapla()} yasindadir. Meslegi ${
      this.meslek
    }'likdir.`;
  },
};

// ? Arrow function'lar (lambda fonsiyonlari) icerisinde new veya this gibi
// ? function expression yerine arrow function yazilirsa NaN doner
// ! mülakat sorusu: lambda veya arrow fonksiyonlari klasik obje degiller.
// ! klasik obje metodlarini this new gibi metodlari kullanamaz

const tarih = new Date();
console.log(tarih);
console.log(tarih.getMonth());
console.log(tarih.getDay());
console.log(kisi.yasHesapla());
console.log(kisi.ozet());

// *************  NESNE ITERASYON ORNEKLERI  **************

const kisiler = [
  {
    ad: "mustafa",
    soyad: "can",
    meslek: "developer",
    yas: 20,
  },
  {
    ad: "ayse",
    soyad: "yilmaz",
    meslek: "tester",
    yas: 25,
  },
  {
    ad: "canan",
    soyad: "ari",
    meslek: "grafiker",
    yas: 35,
  },
  {
    ad: "ali",
    soyad: "veli",
    meslek: "team lead",
    yas: 26,
  },
  {
    ad: "ceren",
    soyad: "yilmaz",
    meslek: "developer",
    yas: 24,
  },
];

console.log(kisiler);

// ORNEK 1- Kisiler dizisindeki kisilerin mesleklerini konsola yazdiralim
kisiler.forEach((x) => console.log(x.meslek));

//ÖRNEK 2- kisiler dizisindeki tüm bireylerin yaşını bir arttırarak yazdırınız.
const yaslar = kisiler.map((x) => x.yas + 1);
console.log(yaslar);

// ORNEK 3- Kisiler dizisindeki kişilerin isimlerini büyük harf olarak değiştiren ve
// yaşlarini da 5 artırak yeni bir nesne oluşturan kodu yaziniz.
const buyukHarf = kisiler.map((x) => {
  return {
    ad: x.ad.toUpperCase(),
    yas: x.yas + 5,
  };
});
console.log(buyukHarf);

// ORNEK 4- Yaşı 25' eşit veya küçük olanların adlarını yazdıran kodu yazınız.
kisiler.filter((x) => x.yas <= 25).forEach((x) => console.log(x.ad));

// ORNEK 5- Mesleği developer olanların isim ve yaşlarını bir diziye kaydediniz.
const developer = kisiler
  .filter((x) => x.meslek == "developer")
  .map((x) => {
    return {
      ad: x.ad,
      yas: x.yas,
    };
  });
console.log(developer);

// ORNEK 6- kisilerin ortalama yasini hesaplayiniz.
const ortalamaYas =
  kisiler.reduce((toplam, kisi) => toplam + kisi.yas, 0) / kisiler.length;
console.log(ortalamaYas);
