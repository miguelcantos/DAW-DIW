var PersonajeX = 0;
var PersonajeY = 4;
mapa = [[3, 3, 3, 3, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
[3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
[3, 0, 11, 11, 11, 0, 11, 11, 11, 0, 11, 11, 11, 0, 11, 11, 11, 0, 11, 11, 11, 0, 3],
[3, 0, 11, 11, 11, 0, 11, 11, 11, 0, 11, 11, 11, 0, 11, 11, 11, 0, 11, 11, 11, 0, 3],
[3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
[3, 0, 11, 11, 11, 0, 11, 11, 11, 0, 11, 11, 11, 0, 11, 11, 11, 0, 11, 11, 11, 0, 3],
[3, 0, 11, 11, 11, 0, 11, 11, 11, 0, 11, 11, 11, 0, 11, 11, 11, 0, 11, 11, 11, 0, 3],
[3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
[3, 0, 11, 11, 11, 0, 11, 11, 11, 0, 11, 11, 11, 0, 11, 11, 11, 0, 11, 11, 11, 0, 3],
[3, 0, 11, 11, 11, 0, 11, 11, 11, 0, 11, 11, 11, 0, 11, 11, 11, 0, 11, 11, 11, 0, 3],
[3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
[3, 0, 11, 11, 11, 0, 11, 11, 11, 0, 11, 11, 11, 0, 11, 11, 11, 0, 11, 11, 11, 0, 3],
[3, 0, 11, 11, 11, 0, 11, 11, 11, 0, 11, 11, 11, 0, 11, 11, 11, 0, 11, 11, 11, 0, 3],
[3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 3],
[3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]];

window.onload = function () {
  listo();
}

function listo() {
  crearMapa();
  document.addEventListener('keydown', moverte);
}

function crearMapa() {
  document.querySelector(".mapa").innerHTML = "";
  for (var i = 0; i < 15; i++) {
    for (var j = 0; j < 23; j++) {
      var newDiv = document.createElement("div");

      if (mapa[i][j] == 3) {
        newDiv.classList.add("piedra");
        mapa[i][j] = newDiv;

      } else if (mapa[i][j] == 2) {
        newDiv.classList.add("wazowski");
        mapa[i][j] = newDiv;

      } else if (mapa[i][j] == 0) {
        newDiv.classList.add("camino");
        mapa[i][j] = newDiv;

      } else if (mapa[i][j] == 4) {
        newDiv.classList.add("sullivan");
        mapa[i][j] = newDiv;

      } else {
        newDiv.classList.add("bloque");
        mapa[i][j] = newDiv;

      }

      document.querySelector(".mapa").appendChild(newDiv);
    }
  }

}


function moverte(tecla) {

  var key = tecla.keyCode;

  switch (key) {
    case 38:
      moverArriba();
      break;

    case 40:
      moverAbajo();
      break;

    case 39:
      moverDerecha();
      break;

    case 37:
      moverIzquierda();
      break;
  }

}


function moverAbajo() {
  console.log("Abajo");

  if (mapa[PersonajeX + 1][PersonajeY].classList.value.includes("huellas")) {
    mapa[PersonajeX][PersonajeY].classList.replace("wazowski", "huellas");
    PersonajeX++;
    mapa[PersonajeX][PersonajeY].classList.replace("huellas", "wazowski");

  } else if (mapa[PersonajeX + 1][PersonajeY].classList.value.includes("camino")) {
    mapa[PersonajeX][PersonajeY].classList.replace("wazowski", "huellas");
    PersonajeX++;
    mapa[PersonajeX][PersonajeY].classList.replace("camino", "wazowski");

  } else {
    console.log("muro");
  }
  marcar();
  comprobarBloque();
}

function moverArriba() {
  console.log("Arriba");

  if (mapa[PersonajeX - 1][PersonajeY].classList.value.includes("huellas")) {
    mapa[PersonajeX][PersonajeY].classList.replace("wazowski", "huellas");
    PersonajeX--;
    mapa[PersonajeX][PersonajeY].classList.replace("huellas", "wazowski");

  } else if (mapa[PersonajeX - 1][PersonajeY].classList.value.includes("camino")) {
    mapa[PersonajeX][PersonajeY].classList.replace("wazowski", "huellas");
    PersonajeX--;
    mapa[PersonajeX][PersonajeY].classList.replace("camino", "wazowski");

  } else {
    console.log("muro");
  }
  marcar();
  comprobarBloque();
}

function moverDerecha() {
  console.log("Derecha");


  if (mapa[PersonajeX][PersonajeY + 1].classList.value.includes("huellas")) {
    mapa[PersonajeX][PersonajeY].classList.replace("wazowski", "huellas");
    PersonajeY++;
    mapa[PersonajeX][PersonajeY].classList.replace("huellas", "wazowski");

  } else if (mapa[PersonajeX][PersonajeY + 1].classList.value.includes("camino")) {
    mapa[PersonajeX][PersonajeY].classList.replace("wazowski", "huellas");
    PersonajeY++;
    mapa[PersonajeX][PersonajeY].classList.replace("camino", "wazowski");

  } else {
    console.log("muro");
  }
  marcar();
  comprobarBloque();
}

function moverIzquierda() {
  console.log("Izquierda");

  if (mapa[PersonajeX][PersonajeY - 1].classList.value.includes("huellas")) {
    mapa[PersonajeX][PersonajeY].classList.replace("wazowski", "huellas");
    PersonajeY--;
    mapa[PersonajeX][PersonajeY].classList.replace("huellas", "wazowski");

  } else if (mapa[PersonajeX][PersonajeY - 1].classList.value.includes("camino")) {
    mapa[PersonajeX][PersonajeY].classList.replace("wazowski", "huellas");
    PersonajeY--;
    mapa[PersonajeX][PersonajeY].classList.replace("camino", "wazowski");

  } else {
    console.log("muro");
  }
  marcar();
  comprobarBloque();
}

function marcar() {
  mapa[PersonajeX][PersonajeY].classList.add("pisado");
  /*
  if (mapa[PersonajeX][PersonajeY + 1].classList.contains("bloque")) {
    mapa[PersonajeX][PersonajeY + 1].classList.add("pisado");

  }
  if (mapa[PersonajeX][PersonajeY - 1].classList.contains("bloque")) {
    mapa[PersonajeX][PersonajeY - 1].classList.add("pisado");

  }
  if (mapa[PersonajeX - 1][PersonajeY].classList.contains("bloque")) {
    mapa[PersonajeX - 1][PersonajeY].classList.add("pisado");

  }
  if (mapa[PersonajeX + 1][PersonajeY].classList.contains("bloque")) {
    mapa[PersonajeX + 1][PersonajeY].classList.add("pisado");

  }
  */
}

function comprobarBloque() {
  var X = 2;
  var Y = 2;
  for (let i = 1; i < 6; i++) {
    X = 2;
    for (let j = 1; j < 5; j++) {
      comprobar(X, Y);
      X += 3;

    }
    Y += 4;
  }

}

function comprobar(X, Y) {
  var contador = 0;
  comprobarX = X;
  comprobarY = Y;

  if(mapa[comprobarX-1][comprobarY-1].classList.contains("pisado")){
      contador++;
  }
  if(mapa[comprobarX-1][comprobarY].classList.contains("pisado")){
    contador++;
  }
  if(mapa[comprobarX-1][comprobarY+1].classList.contains("pisado")){
    contador++;
  }
  if(mapa[comprobarX-1][comprobarY+2].classList.contains("pisado")){
  contador++;
  }
  if(mapa[comprobarX-1][comprobarY+3].classList.contains("pisado")){
  contador++;
  }
  if(mapa[comprobarX][comprobarY-1].classList.contains("pisado")){
  contador++;
  }
  if(mapa[comprobarX][comprobarY+3].classList.contains("pisado")){
  contador++;
  }
  if(mapa[comprobarX+1][comprobarY-1].classList.contains("pisado")){
  contador++;
  }
  if(mapa[comprobarX+1][comprobarY+3].classList.contains("pisado")){
  contador++;
  }
  if(mapa[comprobarX+2][comprobarY-1].classList.contains("pisado")){
  contador++;
  }
  if(mapa[comprobarX+2][comprobarY].classList.contains("pisado")){
  contador++
  }
  if(mapa[comprobarX+2][comprobarY+1].classList.contains("pisado")){
  contador++
  }
  if(mapa[comprobarX+2][comprobarY+2].classList.contains("pisado")){
  contador++
  }
  if(mapa[comprobarX+2][comprobarY+3].classList.contains("pisado")){
  contador++
  }
   

  /*
  for (let i = 1; i < 3; i++) {
    comprobarY = Y;
    for (let j = 1; j < 4; j++) {

      if (mapa[comprobarX][comprobarY].classList.contains("pisado")) {
        contador++;

      }


      comprobarY++;
    }
    comprobarX++;

  }
  */
  comprobarX = X;
  comprobarY = Y;
  if (contador == 14) {
    for (let i = 1; i < 3; i++) {
      comprobarY = Y;
      for (let j = 1; j < 4; j++) {
        mapa[comprobarX][comprobarY].classList.add("lleno");
        comprobarY++;
      }
      comprobarX++;

    }
  }
}

