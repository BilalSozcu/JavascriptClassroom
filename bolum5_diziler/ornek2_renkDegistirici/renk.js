document.querySelector(".btn").onclick = function () {
  const renkler = ["Red", "Blue", "Pink", "Purple", "Green", "Yellow"];

  const rasgele = Math.floor(Math.random() * renkler.length);
  document.querySelector(".renk").innerHTML = renkler[rasgele];
  document.querySelector("body").style.backgroundColor = renkler[rasgele];
  document.querySelector("h1").style.color = renkler[rasgele];
};
