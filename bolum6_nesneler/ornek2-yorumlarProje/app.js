import yorumlar from "./data.js";

// Bilgilere eriselim
const foto = document.getElementById("kisi-resim");
const yazar = document.getElementById("yazar");
const is = document.getElementById("meslek");
const aciklama = document.getElementById("aciklama");

//   Butonlara eriselim
const ileriBtn = document.querySelector(".ileri-btn");
const geriBtn = document.querySelector(".geri-btn");
const rasgeleBtn = document.querySelector(".rasgele-btn");

// kisiyiGoster(0);
let index = 0;
// const kisiyiGoster = function (index) {
//   const kisi = yorumlar[index];
//   resim.src = kisi.resim;
//   yazar.textContent = kisi.ad;
//   meslek.innerHTML = kisi.meslek;
//   aciklama.textContent = kisi.yorum;
// };
const kisiyiGoster = function (index) {
  const kisi = yorumlar[index];
  const { resim, ad, meslek, yorum } = kisi; // Destructuring
  foto.src = resim;
  yazar.textContent = ad;
  is.innerHTML = meslek;
  aciklama.textContent = yorum;
};

kisiyiGoster(index);
ileriBtn.onclick = function () {
  index++;
  if (index > yorumlar.length - 1) {
    index = 0;
  }
  kisiyiGoster(index);
};

geriBtn.onclick = function () {
  index--;
  if (index < 0) {
    index = yorumlar.length - 1;
  }
  kisiyiGoster(index);
};

rasgeleBtn.onclick = function () {
  const index = Math.floor(Math.random() * yorumlar.length);
  console.log(index);
  kisiyiGoster(index);
};
