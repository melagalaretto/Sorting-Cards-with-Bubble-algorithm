/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {};
let simbolo = ["♣", "♥", "♦", "♠"];
let numero = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

var btnClick = document.querySelector("#btn1");
btnClick.addEventListener("click", function(e) {
  e.preventDefault();
  btnClick.disabled = true;
  var card = document.querySelector("#card");
  /* CANTIDAD DE CARTAS */
  var input = document.querySelector("#box").value;
  /* CONDICION QUE EVALUE SI MI VARIABLE INPUT ES MAYOR A 0 Y MENOR,IGUAL A 10. SI ESTO ES VERDADERO EJECUTAR BUCLE */
  if (input > 0 && input <= 6) {
    for (let i = 0; i < input; i++) {
      card.appendChild(dibujarCarta());
    }
  }
});
function dibujarCarta() {
  let simboloIndex = Math.floor(Math.random() * simbolo.length);
  let numeroInd = Math.floor(Math.random() * numero.length);

  let contenedor = document.createElement("div");
  contenedor.classList.add("contenedor1");

  let simb1 = document.createElement("p");
  simb1.classList.add("simb1");
  simb1.innerHTML = simbolo[simboloIndex];

  let numA = document.createElement("p");
  numA.classList.add("numeroA");
  numA.innerHTML = numero[numeroInd];

  let simb2 = document.createElement("p");
  simb2.classList.add("simb2");
  simb2.innerHTML = simbolo[simboloIndex];

  contenedor.appendChild(simb1);
  contenedor.appendChild(numA);
  contenedor.appendChild(simb2);
  if (simbolo[simboloIndex] === "♦" || simbolo[simboloIndex] === "♥") {
    simb1.style.color = "red";
    simb2.style.color = "red";
  }

  return contenedor;
}
