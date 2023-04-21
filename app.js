document.addEventListener("DOMContentLoaded", () => {
  const cardsAdj = [
    {
      name: "descarga1",
      img: "Imagenes/descarga1.jpg"
    },
    {
      name: "descarga2",
      img: "Imagenes/descarga2.jpg"
    },
    {
      name: "descarga3",
      img: "Imagenes/descarga3.jpg"
    },
    {
      name: "descarga4",
      img: "Imagenes/descarga4.jpg"
    },
    {
      name: "descarga5",
      img: "Imagenes/descarga5.jpg"
    },
    {
      name: "descarga6",
      img: "Imagenes/descarga6.jpg"
    }
  ];
});
const cuadricula = document.querySelector(".cuadricula");
  const resultado = document.querySelector("#resultado");
  var cartasEscogidas = [];
  var cartasEscogidasId = [];
  var cartasGanadas = [];

 
  function crearTablero() {
    for (let i = 0; i < cardsAdj.length; i++) {
      var carta = document.createElement("img"); 
      carta.setAttribute("data-id", i); 
      carta.addEventListener("click", voltearCarta); 
      cuadricula.appendChild(carta);
    }
  }
  function verificarPareja() {
    var cards = document.querySelectoIAll("img");
    const opcionUnoId = cartasEscogidasId[0];
    const opcionDosId = cartasEscogidasId[1];

    if (opcionUnoId === opcionDosId) {
      cards[opcionUnoId].setAttribute("src", "imagenes/descarga 1.jpg");
      cards[opcionDosId].setAttribute("src", "imagenes/descarga 2.jpg");
      alert("¡Diste click a la misma imagen!");
    } else if (cartasEscogidas[0] === cartasEscogidas[1]) {
      alert("¡Correcto!");
      cards[opcionUnoId].setAttribute("src", "imagenes/descarga 3.jpg");
      cards[opcionDosId].setAttribute("src", "imagenes/descarga 4.jpg");
      cards[opcionUnoId].removeEventListener("click", voltearCarta);
      cards[opcionDosId].removeEventListener("click", voltearCarta);
      cartasGanadas.push(cartasEscogidas);
    } else {
      cards[opcionUnoId].setAttribute("src", "imagenes/descarga 5.jpg");
      cards[opcionDosId].setAttribute("src", "imagenes/descarga 6.jpg");
      alert("¡Intenta de nuevo!");
    }
    cartasEscogidas = [];
    cartasEscogidasId = [];

    resultado.textContent = cartasGanadas.length;

    if (cartasGanadas.length === cardsAdj.length / 2) {
      resultado.textContent = "¡Felicidades, encontraste todos los pares!";
    }
  }
  function voltearCarta() {
    var cardId = this.getAttribute("data-id");
    cartasEscogidas.push(cardsAdj[cardId].name);
    cartasEscogidasId.push(cardId);
    this.setAttribute("src", cardsAdj[cardId].img);
    if (cartasEscogidas.length === 2) {
      setTimeout(verificarPareja, 1500);
    }
  }
  crearTablero();
});
const cuadricula = document.querySelector(".cuadricula");
  const resultado = document.querySelector("#resultado");
  var cartasEscogidas = [];
  var cartasEscogidasId = [];
  var cartasGanadas = [];


  function crearTablero() {
    for (let i = 0; i < cardsAdj.length; i++) {
      var carta = document.createElement("img"); 
      carta.setAttribute("src", "imagenes/descarga 7.jpg");
      carta.setAttribute("data-id", i);
      carta.addEventListener("click", voltearCarta); 
      cuadricula.appendChild(carta); 
    }
  }
  function verificarPareja() {
    var cards = document.querySelectoIAll("img");
    const opcionUnoId = cartasEscogidasId[0];
    const opcionDosId = cartasEscogidasId[1];

    if (opcionUnoId === opcionDosId) {
      cards[opcionUnoId].setAttribute("src", "descarga 8.jpg");
      cards[opcionDosId].setAttribute("src", "imagenes/descarga 9.jpg");
      alert("¡Diste click a la misma imagen!");
    } else if (cartasEscogidas[0] === cartasEscogidas[1]) {
      alert("¡Correcto!");
      cards[opcionUnoId].setAttribute("src", "imagenes/descarga 10.jpg");
      cards[opcionDosId].setAttribute("src", "imagenes/descarga 11.jpg");
      cards[opcionUnoId].removeEventListener("click", voltearCarta);
      cards[opcionDosId].removeEventListener("click", voltearCarta);
      cartasGanadas.push(cartasEscogidas);
    } else {
      cards[opcionUnoId].setAttribute("src", "imagenes/descarga 12.jpg");
      cards[opcionDosId].setAttribute("src", "imagenes/descarga 13.jpg");
      alert("¡Intenta de nuevo!");
    }
    cartasEscogidas = [];
    cartasEscogidasId = [];

    resultado.textContent = cartasGanadas.length;

    if (cartasGanadas.length === cardsAdj.length / 2) {
      resultado.textContent = "¡Felicidades, encontraste todos los pares!";
    }
  }
  function voltearCarta() {
    var cardId = this.getAttribute("data-id");
    cartasEscogidas.push(cardsAdj[cardId].name);
    cartasEscogidasId.push(cardId);
    this.setAttribute("src", cardsAdj[cardId].img);
    if (cartasEscogidas.length === 2) {
      setTimeout(verificarPareja, 1500);
    }
  }
  crearTablero();
});
 
