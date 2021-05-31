let random = Math.ceil(Math.random() * 20);

document.querySelector(".kont").onclick = function () {
  const input = document.querySelector(".sayi2").value;
  const sonuc = document.querySelector(".label2");
  let puan = document.querySelector(".puan");
  const enYuksek = document.querySelector(".derece");
  if (!(input <= 20 && input >= 1)) {
    sonuc.innerHTML = "Yanlis bir sayi girdiniz";
  } else if (puan.value == 0) {
    sonuc.innerHTML = "Oyun bitti kaybettiniz";
  } else if (random == input) {
    sonuc.innerHTML = "Kazandiniz";
    document.querySelector("body").style.backgroundColor = "green";
    const soru = document.querySelector(".soru");
    soru.innerHTML = random;
  } else if (random > input) {
    sonuc.innerHTML = "Artir";
    puan.value--;
    puan.innerHTML = puan.value;
  } else if (random < input) {
    sonuc.innerHTML = "Azaltin";
    puan.value--;
    puan.innerHTML = puan.value;
  }

  if (puan.value > enYuksek.value) {
    enYuksek.value = puan.value;
    document.querySelector(".derece").textContent = puan.value;
  }
};
document.querySelector(".btn").onclick = function () {
  // window.location.reload(false);
  random = Math.ceil(Math.random() * 20);
  document.querySelector(".soru").textContent = "?";
  document.querySelector(".puan").textContent = 10;
  document.querySelector(".label2").textContent = "Tahmine Baslaniyor";
  document.querySelector("body").style.backgroundColor = "#2d3436";
  document.querySelector(".sayi2").value = " ";
};
