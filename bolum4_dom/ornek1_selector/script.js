// **************** GETELEMENTBYID *****************

const paragraf = document.getElementById("par");
console.log(paragraf);
paragraf.style.backgroundColor = "black";
paragraf.style.color = "white";
paragraf.style.fontSize = "20px";

const buton = document.getElementById("btn");
buton.style.width = "100px";
buton.style.height = "30px";
buton.style.backgroundColor = "black";
buton.style.color = "yellow";
buton.style.fontSize = "18px";
buton.innerHTML = "ARA";

// ***************** GETELEMENTSBYTAGNAME *******************

const image = document.getElementsByTagName("img");
image[0].style.width = "300px";
image[0].style.height = "300px";
image[1].style.border = "3px solid red";

// ***************** GETELEMENTSBYCLASSNAME *******************

const h1 = document.getElementsByClassName("h1");
h1[0].style.color = "red";
h1[0].style.textAlign = "center";

// ***************** QUERYSELECTOR *********************

const baslik = document.querySelector(".title");
baslik.innerHTML = "DOM SELECTOR 👀";

const body = document.querySelector("#body");
body.style.backgroundImage = "linear-gradient(green, blue)";

// ***************** EVENTS *********************
// * Ornek-1 (Mouse Over, Mouse Out)

document.querySelector(".h1").onmouseover = function () {
  const h1 = document.querySelector("h1");
  h1.style.color = "white";
  h1.style.backgroundColor = "black";
};

document.querySelector(".h1").onmouseout = function () {
  const h1 = document.querySelector("h1");
  h1.style.color = "black";
  h1.style.backgroundColor = "white";
};

// ***************** addEventListener() *********************

document.querySelector("#btn").addEventListener("mouseover", () => {
  document.querySelector("#btn").style.width = "150px";
});

document.querySelector("#btn").addEventListener("mouseout", () => {
  document.querySelector("#btn").style.width = "100px";
});
