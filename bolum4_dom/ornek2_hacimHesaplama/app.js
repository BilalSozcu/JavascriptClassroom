function hesapla() {
  const r = document.getElementById("r").value; // ! Class'lara erisim icin .class_adi
  // ! id'li bir html elemanina erisim icin "#id"
  const h = document.querySelector(".h").value; // ! hem id hem de class icin kullanilabilir

  const sonuc = (Math.PI * r ** 2 * h).toFixed(2);

  document.querySelector(".hacim").textContent = sonuc;
}

const buton = document.querySelector(".btn");
buton.style.color = "red";
buton.style.backgroundColor = "black";
buton.style.width = "100px";
