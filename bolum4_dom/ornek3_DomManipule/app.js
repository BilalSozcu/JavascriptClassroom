// Ac butonuna tiklandiginda calisir
document.querySelector(".on").onclick = function () {
  document.querySelector(".resim").src = "./img/lamba_on.gif";
};

document.querySelector(".off").onclick = function () {
  document.querySelector(".resim").src = "./img/lamba_off.gif";
};

// resmin uzerine mouse her geldiginde lamba_on resmini gosterir
document.querySelector(".resim").addEventListener("mouseover", () => {
  document.querySelector(".resim").src = "./img/lamba_on.gif";
});

// resmin uzerinden mouse ayrildiginda  lamba_off resmini gosterir
document.querySelector(".resim").addEventListener("mouseout", function () {
  document.querySelector(".resim").src = "./img/lamba_off.gif";
});

// Klavyeden her bir tusa basildiginda bu fonksiyon tetiklenecek
document.querySelector(".textbox").onkeyup = function () {
  const checkbox = document.querySelector(".checkbox");
  const textbox = document.querySelector(".textbox");
  if (checkbox.checked == true) {
    textbox.value = textbox.value.toUpperCase();
  } else {
    textbox.value = textbox.value.toLowerCase();
  }
};
// ! Yazi elemanlarinin (span, h, p gibi) icine eklemeyi innerHTML ile yapiyoruz

// * HTML'de input-div'in altina yeni bir H1 elemani olusturalim
const sonDiv = document.querySelector(".input-div");
const h1 = document.createElement("h1");
const yazi = document.createTextNode("Programlama Dilleri");
h1.appendChild(yazi);
sonDiv.after(h1); // input-div'in sonrasina h1'i ekliyoruz
h1.className = "yeni-h1";
// h1.style.marginTop = "20px";
// h1.style.color = "red";
// h1.style.textAlign = "left";

document.querySelector(".ekle").onclick = function () {
  // Ekeleme yapilacak listeyi al
  const liste = document.querySelector(".liste");

  // input elemanina girilen yeni satirin degerini al
  const satir = document.querySelector(".dil").value;

  // Yeni girilen satiri saklamak icin bir li olusturduk
  const yenili = document.createElement("li");

  // yeni li icin textNode olusturduk
  const textNode = document.createTextNode(satir);

  // Olusturdugumuz textNode'u yeni li'ye bagladik
  yenili.appendChild(textNode);

  // Yeni eklenen satiri var olan listeye ekledik
  liste.appendChild(yenili);
};

document.querySelector(".sil").onclick = function () {
  const liste = document.querySelector(".liste");
  // liste.removeChild(liste.lastElementChild);
  liste.removeChild(liste.firstElementChild);
};
